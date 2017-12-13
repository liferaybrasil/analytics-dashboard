/**
 * Copyright (c) 2000-present Liferay, Inc. All rights reserved.
 *
 * This library is free software; you can redistribute it and/or modify it under
 * the terms of the GNU Lesser General Public License as published by the Free
 * Software Foundation; either version 2.1 of the License, or (at your option)
 * any later version.
 *
 * This library is distributed in the hope that it will be useful, but WITHOUT
 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
 * FOR A PARTICULAR PURPOSE. See the GNU Lesser General Public License for more
 * details.
 */

package com.liferay.analytics.dashboard.workflow.controller;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.google.common.collect.Iterables;
import com.liferay.analytics.dashboard.workflow.domain.Workflow;
import com.liferay.analytics.dashboard.workflow.domain.WorkflowEntities;
import com.liferay.analytics.dashboard.workflow.domain.WorkflowProcessAvg;
import com.liferay.analytics.dashboard.workflow.domain.WorkflowTaskAvg;
import com.liferay.analytics.dashboard.workflow.dto.SummaryDTO;
import com.liferay.analytics.dashboard.workflow.dto.TaskDTO;
import com.liferay.analytics.dashboard.workflow.dto.WorkflowDTO;
import com.liferay.analytics.dashboard.workflow.repository.WorkflowEntitiesRepository;
import com.liferay.analytics.dashboard.workflow.repository.WorkflowProcessAvgRepository;
import com.liferay.analytics.dashboard.workflow.repository.WorkflowRepository;
import com.liferay.analytics.dashboard.workflow.repository.WorkflowTaskAvgRepository;

/**
 * @author Inácio Nery
 */
@RestController
@RequestMapping("/api/workflow")
public class WorkflowController {

	@Autowired
	private WorkflowEntitiesRepository workflowEntitiesRepository;

	@Autowired
	private WorkflowProcessAvgRepository WorkflowProcessAvgRepository;

	@Autowired
	private WorkflowTaskAvgRepository workflowTaskAvgRepository;

	@Autowired
	private WorkflowRepository workflowRepository;

	@GetMapping("/summary/{start}")
	public ResponseEntity<SummaryDTO> summary(
		@PathVariable(value = "start") @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate start) {

		Iterable<Workflow> workflows = workflowRepository.findByDeletedFalse();

		long published = 0;
		long unpublished = 0;
		long completed = 0;
		long progress = 0;
		long removed = 0;
		long started = 0;

		List<WorkflowDTO> workflowDTOs = new ArrayList<>();

		for (Workflow workflow : workflows) {

			if (workflow.isActive()) {
				published++;
			}
			else {
				unpublished++;
			}

			Iterable<WorkflowProcessAvg> workflowProcessAvgs =
				WorkflowProcessAvgRepository.findByAnalyticsKeyAndProcessId(
					workflow.getAnalyticsKey(), workflow.getProcessid());

			long completedAux = 0;
			long progressAux = 0;
			long removedAux = 0;
			long startedAux = 0;

			for (WorkflowProcessAvg workflowProcessAvg : workflowProcessAvgs) {
				LocalDate date = workflowProcessAvg.getDate();

				if (start.compareTo(date) *
					date.compareTo(LocalDate.now()) >= 0) {
					completedAux += workflowProcessAvg.getTotalcompleted();

					startedAux += workflowProcessAvg.getTotalstarted();

					removedAux += workflowProcessAvg.getTotalremoved();
				}

				progressAux += (workflowProcessAvg.getTotalstarted() -
					workflowProcessAvg.getTotalcompleted() -
					workflowProcessAvg.getTotalremoved());
			}

			completed += completedAux;
			progress += progressAux;
			started += startedAux;
			removed += removedAux;

			workflowDTOs.add(
				new WorkflowDTO(
					workflow.getProcessid(), workflow.getTitle(),
					workflow.isActive(), progressAux + completedAux,
					startedAux - removedAux, progressAux,
					completedAux - removedAux));
		}

		return ResponseEntity.ok(
			new SummaryDTO(
				Iterables.size(workflows), published, unpublished,
				progress + completed, started - removed, progress,
				completed - removed, workflowDTOs));
	}

	@GetMapping("/process/{id}/{start}")
	public ResponseEntity<WorkflowDTO> process(
		@PathVariable(value = "id") long processId,
		@PathVariable(value = "start") @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate start) {

		Workflow workflow = workflowRepository.findByProcessid(processId);

		Iterable<WorkflowProcessAvg> workflowProcessAvgs =
			WorkflowProcessAvgRepository.findByAnalyticsKeyAndProcessId(
				workflow.getAnalyticsKey(), workflow.getProcessid());

		long completed = 0;
		long progress = 0;
		long removed = 0;
		long started = 0;
		long duration = 0;
		long average = 0;

		List<TaskDTO> taskDTOs = new ArrayList<>();

		for (WorkflowProcessAvg workflowProcessAvg : workflowProcessAvgs) {
			LocalDate date = workflowProcessAvg.getDate();

			if (start.compareTo(date) * date.compareTo(LocalDate.now()) >= 0) {
				completed += workflowProcessAvg.getTotalcompleted();

				started += workflowProcessAvg.getTotalstarted();

				removed += workflowProcessAvg.getTotalremoved();

				duration += workflowProcessAvg.getTotalDuration();
			}

			progress += (workflowProcessAvg.getTotalstarted() -
				workflowProcessAvg.getTotalcompleted() -
				workflowProcessAvg.getTotalremoved());

			Iterable<WorkflowTaskAvg> workflowTaskAvgs =
				workflowTaskAvgRepository.findByprocessversionid(
					workflowProcessAvg.getProcessVersionId());

			for (WorkflowTaskAvg workflowTaskAvg : workflowTaskAvgs) {
				WorkflowEntities task = workflowEntitiesRepository.findOne(
					"KALEO_TASK", workflowTaskAvg.getTaskid());

				taskDTOs.add(
					new TaskDTO(
						workflowTaskAvg.getTaskid(), task.getName(),
						workflowTaskAvg.getTotal(),
						workflowTaskAvg.getTotalDuration() /
							workflowTaskAvg.getTotal()));
			}

		}

		if (duration > 0) {
			average = duration / completed;
		}

		return ResponseEntity.ok(
			new WorkflowDTO(
				workflow.getProcessid(), workflow.getTitle(),
				workflow.isActive(), progress + completed, started - removed,
				progress, completed - removed, average, taskDTOs));

	}
}

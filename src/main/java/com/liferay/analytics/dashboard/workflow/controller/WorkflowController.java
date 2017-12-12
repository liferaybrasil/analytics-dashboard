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
import java.time.temporal.ChronoUnit;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.google.common.collect.Iterables;
import com.liferay.analytics.dashboard.workflow.domain.Workflow;
import com.liferay.analytics.dashboard.workflow.domain.WorkflowProcessAvg;
import com.liferay.analytics.dashboard.workflow.dto.SummaryDTO;
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

	@GetMapping("/summary/{start}/{end}")
	public ResponseEntity<SummaryDTO> summary(
		@PathVariable(value = "start") @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate start,
		@PathVariable(value = "end") @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate end) {

		Iterable<Workflow> workflows = workflowRepository.findByDeletedFalse();

		long published = 0;
		long unpublished = 0;
		long completed = 0;
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
				WorkflowProcessAvgRepository.findByAnalyticsKeyAndDateInAndProcessId(
					workflow.getAnalyticsKey(),
					getDatesBetweenUsing(start, end), workflow.getProcessid());

			long completedAux = 0;
			long removedAux = 0;
			long startedAux = 0;

			for (WorkflowProcessAvg workflowProcessAvg : workflowProcessAvgs) {
				completedAux += workflowProcessAvg.getTotalcompleted();

				startedAux += workflowProcessAvg.getTotal();

				removedAux += workflowProcessAvg.getTotalremoved();
			}

			removed += removedAux;
			started += startedAux;
			completed += completedAux;

			workflowDTOs.add(
				new WorkflowDTO(
					workflow.getProcessid(), workflow.getTitle(),
					workflow.isActive(), startedAux + completedAux - removedAux,
					startedAux, startedAux - completedAux - removedAux,
					completedAux));
		}

		return ResponseEntity.ok(
			new SummaryDTO(
				Iterables.size(workflows), published, unpublished,
				started + completed - removed, started,
				started - completed - removed, completed, workflowDTOs));
	}

	@GetMapping("/process/{id}/{start}/{end}")
	public void process(
		@PathVariable(value = "key") String analyticsKey,
		@PathVariable(value = "id") long processId,
		@PathVariable(value = "start") @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate start,
		@PathVariable(value = "end") @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate end) {

		Workflow workflow = workflowRepository.findByAnalyticsKeyAndProcessId(
			analyticsKey, processId);

		Iterable<WorkflowProcessAvg> workflowProcessAvgs =
			WorkflowProcessAvgRepository.findByAnalyticsKeyAndDateInAndProcessId(
				workflow.getAnalyticsKey(), getDatesBetweenUsing(start, end),
				workflow.getProcessid());

		long completed = 0;
		long removed = 0;
		long started = 0;

		for (WorkflowProcessAvg workflowProcessAvg : workflowProcessAvgs) {
			completed += workflowProcessAvg.getTotalcompleted();

			started += workflowProcessAvg.getTotal();

			removed += workflowProcessAvg.getTotalremoved();
		}

	}

	protected List<LocalDate> getDatesBetweenUsing(
		LocalDate startDate, LocalDate endDate) {

		long numOfDaysBetween = ChronoUnit.DAYS.between(startDate, endDate) + 1;

		return IntStream.iterate(0, i -> i + 1).limit(
			numOfDaysBetween).mapToObj(i -> startDate.plusDays(i)).collect(
				Collectors.toList());
	}

}

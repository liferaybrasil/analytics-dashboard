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

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.google.common.collect.Iterables;
import com.liferay.analytics.dashboard.workflow.domain.Workflow;
import com.liferay.analytics.dashboard.workflow.domain.WorkflowEntities;
import com.liferay.analytics.dashboard.workflow.domain.WorkflowProcessAvg;
import com.liferay.analytics.dashboard.workflow.domain.WorkflowTaskAvg;
import com.liferay.analytics.dashboard.workflow.dto.SumaryDTO;
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

	@GetMapping("/sumary/{start}/{end}")
	public SumaryDTO sumary(
		@PathVariable(value = "start") @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) String start,
		@PathVariable(value = "end") @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) String end) {

		Iterable<Workflow> workflows = workflowRepository.findByDeletedFalse();

		long published = 0;
		long unpublished = 0;
		long process = 0;
		long started = 0;
		long inprogress = 0;
		long completed = 0;

		for (Workflow workflow : workflows) {
			if (workflow.isActive()) {
				published++;
			}
			else {
				unpublished++;
			}
			Iterable<WorkflowProcessAvg> workflowProcessAvgs =
				WorkflowProcessAvgRepository.findByProcessid(
					workflow.getProcessid());

			for (WorkflowProcessAvg workflowProcessAvg : workflowProcessAvgs) {
				process += workflowProcessAvg.getTotal() -
					workflowProcessAvg.getTotalremoved();

				completed += workflowProcessAvg.getTotalcompleted();
			}
		}

		return new SumaryDTO(
			Iterables.size(workflows), published, unpublished, process, started,
			inprogress, completed);
	}

	@GetMapping("/list")
	public Iterable<Workflow> list() {

		return workflowRepository.findByDeletedFalse();
	}

	@GetMapping("/taskavg")
	public Iterable<WorkflowTaskAvg> getWorkflowTaskAvgs() {

		Iterable<WorkflowTaskAvg> workflowTaskAvgs =
			workflowTaskAvgRepository.findAll();

		for (WorkflowTaskAvg workflowTaskAvg : workflowTaskAvgs) {
			WorkflowEntities workflowEntities =
				workflowEntitiesRepository.findOne(
					"KALEO_TASK", workflowTaskAvg.getTaskid());

			if (workflowEntities != null) {
				workflowTaskAvg.setName(workflowEntities.getName());
			}
		}

		return workflowTaskAvgs;
	}

}

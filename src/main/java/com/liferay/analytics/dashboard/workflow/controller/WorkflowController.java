
package com.liferay.analytics.dashboard.workflow.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.liferay.analytics.dashboard.workflow.domain.WorkflowEntities;
import com.liferay.analytics.dashboard.workflow.domain.WorkflowProcessAvg;
import com.liferay.analytics.dashboard.workflow.domain.WorkflowTaskAvg;
import com.liferay.analytics.dashboard.workflow.repository.WorkflowEntitiesRepository;
import com.liferay.analytics.dashboard.workflow.repository.WorkflowProcessAvgRepository;
import com.liferay.analytics.dashboard.workflow.repository.WorkflowTaskAvgRepository;

@RestController
@RequestMapping("/api/workflow")
public class WorkflowController {

	@Autowired
	private WorkflowEntitiesRepository workflowEntitiesRepository;

	@Autowired
	private WorkflowProcessAvgRepository workflowProcessAvgRepository;

	@Autowired
	private WorkflowTaskAvgRepository workflowTaskAvgRepository;

	@GetMapping("/processavg")
	public Iterable<WorkflowProcessAvg> getWorkflowProcessAvgs() {

		Iterable<WorkflowProcessAvg> workflowProcessAvgs =
			workflowProcessAvgRepository.findAll();

		for (WorkflowProcessAvg workflowProcessAvg : workflowProcessAvgs) {
			WorkflowEntities workflowEntities =
				workflowEntitiesRepository.findOne(
					"KALEO_DEFINITION_VERSION",
					workflowProcessAvg.getProcessversionid());

			if (workflowEntities != null) {
				workflowProcessAvg.setName(workflowEntities.getName());
			}
		}

		return workflowProcessAvgs;
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

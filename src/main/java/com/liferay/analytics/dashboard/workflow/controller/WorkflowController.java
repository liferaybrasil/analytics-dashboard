package com.liferay.analytics.dashboard.workflow.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.liferay.analytics.dashboard.workflow.domain.WorkflowProcessAvg;
import com.liferay.analytics.dashboard.workflow.repository.WorkflowProcessAvgRepository;

@RestController
@RequestMapping("/api/workflow")
public class WorkflowController {

    @GetMapping("/processavg")
    public Iterable<WorkflowProcessAvg> listProducts() {
        return workflowProcessAvgRepository.findAll();
    }

    @Autowired
    private WorkflowProcessAvgRepository workflowProcessAvgRepository;

}
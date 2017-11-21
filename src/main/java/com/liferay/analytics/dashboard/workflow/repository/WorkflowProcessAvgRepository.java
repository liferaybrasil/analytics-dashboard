package com.liferay.analytics.dashboard.workflow.repository;

import org.springframework.data.cassandra.repository.CassandraRepository;

import com.liferay.analytics.dashboard.workflow.domain.WorkflowProcessAvg;

public interface WorkflowProcessAvgRepository
    extends CassandraRepository<WorkflowProcessAvg> {
}
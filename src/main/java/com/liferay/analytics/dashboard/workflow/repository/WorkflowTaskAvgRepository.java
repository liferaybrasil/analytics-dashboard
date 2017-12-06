
package com.liferay.analytics.dashboard.workflow.repository;

import org.springframework.data.cassandra.repository.CassandraRepository;

import com.liferay.analytics.dashboard.workflow.domain.WorkflowTaskAvg;

/**
 * @author Inácio Nery
 */
public interface WorkflowTaskAvgRepository
	extends CassandraRepository<WorkflowTaskAvg> {
}

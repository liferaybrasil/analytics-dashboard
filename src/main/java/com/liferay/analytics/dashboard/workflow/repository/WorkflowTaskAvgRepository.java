
package com.liferay.analytics.dashboard.workflow.repository;

import org.springframework.data.cassandra.repository.CassandraRepository;
import org.springframework.data.cassandra.repository.Query;
import org.springframework.data.repository.query.Param;

import com.liferay.analytics.dashboard.workflow.domain.WorkflowTaskAvg;

/**
 * @author Inácio Nery
 */
public interface WorkflowTaskAvgRepository
	extends CassandraRepository<WorkflowTaskAvg> {

	@Query("SELECT * FROM WorkflowTaskAvg WHERE processversionid = :processversionid and taskid = :taskid ALLOW FILTERING")
	WorkflowTaskAvg find(
		@Param("processversionid") Long processversionid,
		@Param("taskid") Long taskid);
}

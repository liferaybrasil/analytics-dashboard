package com.liferay.analytics.dashboard.workflow.domain;

import java.io.Serializable;

import org.springframework.data.cassandra.mapping.CassandraType;
import org.springframework.data.cassandra.mapping.PrimaryKey;

import com.datastax.driver.mapping.annotations.Table;

import com.datastax.driver.core.DataType;

@Table(name = "workflowprocessavg")
public class WorkflowProcessAvg implements Serializable {


	@PrimaryKey
    @CassandraType(type = DataType.Name.BIGINT)
    private long workflowDefinitionVersionId;

	@CassandraType(type = DataType.Name.BIGINT)
	private long total;

	@CassandraType(type = DataType.Name.BIGINT)
	private long totalDuration;


	public long getWorkflowDefinitionVersionId() {
		return workflowDefinitionVersionId;
	}

	public long getTotal() {
		return total;
	}

	public long getTotalDuration() {
		return totalDuration;
	}

	public void setWorkflowDefinitionVersionId(long workflowDefinitionVersionId) {
		this.workflowDefinitionVersionId = workflowDefinitionVersionId;
	}

	public void setTotal(long total) {
		this.total = total;
	}

	public void setTotalDuration(long totalDuration) {
		this.totalDuration = totalDuration;
	}

}

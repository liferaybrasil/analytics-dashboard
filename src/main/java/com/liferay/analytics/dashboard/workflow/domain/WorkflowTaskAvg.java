
package com.liferay.analytics.dashboard.workflow.domain;

import java.io.Serializable;

import org.springframework.data.cassandra.mapping.CassandraType;
import org.springframework.data.cassandra.mapping.PrimaryKeyColumn;

import com.datastax.driver.core.DataType;
import com.datastax.driver.mapping.annotations.Table;

/**
 * @author Inácio Nery
 */
@Table(name = "workflowtaskavg")
public class WorkflowTaskAvg implements Serializable {

	@PrimaryKeyColumn(ordinal = 0)
	@CassandraType(type = DataType.Name.BIGINT)
	private long kaleoDefinitionVersionId;

	@PrimaryKeyColumn(ordinal = 1)
	@CassandraType(type = DataType.Name.BIGINT)
	private long kaleoTaskId;

	@CassandraType(type = DataType.Name.BIGINT)
	private long total;

	@CassandraType(type = DataType.Name.BIGINT)
	private long totalDuration;

	private String name = "Unknown";

	public long getKaleoDefinitionVersionId() {

		return kaleoDefinitionVersionId;
	}

	public long getKaleoTaskId() {

		return kaleoTaskId;
	}

	public String getName() {

		return name;
	}

	public long getTotal() {

		return total;
	}

	public long getTotalDuration() {

		return totalDuration;
	}

	public void setName(String name) {

		this.name = name;
	}

}

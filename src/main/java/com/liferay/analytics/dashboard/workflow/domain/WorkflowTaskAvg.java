
package com.liferay.analytics.dashboard.workflow.domain;

import java.io.Serializable;

import org.springframework.data.cassandra.mapping.CassandraType;
import org.springframework.data.cassandra.mapping.PrimaryKeyColumn;

import com.datastax.driver.core.DataType;
import com.datastax.driver.core.LocalDate;
import com.datastax.driver.mapping.annotations.Table;

/**
 * @author Inácio Nery
 */
@Table(name = "workflowtaskavg")
public class WorkflowTaskAvg implements Serializable {

	@PrimaryKeyColumn(ordinal = 0)
	@CassandraType(type = DataType.Name.DATE)
	private LocalDate date;

	@PrimaryKeyColumn(ordinal = 1)
	@CassandraType(type = DataType.Name.TEXT)
	private String analyticskey;

	@PrimaryKeyColumn(ordinal = 2)
	@CassandraType(type = DataType.Name.BIGINT)
	private long taskid;

	@PrimaryKeyColumn(ordinal = 3)
	@CassandraType(type = DataType.Name.BIGINT)
	private long processversionid;

	@CassandraType(type = DataType.Name.BIGINT)
	private long total;

	@CassandraType(type = DataType.Name.BIGINT)
	private long totalDuration;

	private String name = "Unknown";

	public LocalDate getDate() {

		return date;
	}

	public String getAnalyticskey() {

		return analyticskey;
	}

	public long getTaskid() {

		return taskid;
	}

	public long getProcessversionid() {

		return processversionid;
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

	@Override
	public String toString() {

		return "WorkflowTaskAvg [date=" + date + ", analyticskey=" +
			analyticskey + ", taskid=" + taskid + ", processversionid=" +
			processversionid + ", total=" + total + ", totalDuration=" +
			totalDuration + ", name=" + name + "]";
	}

}

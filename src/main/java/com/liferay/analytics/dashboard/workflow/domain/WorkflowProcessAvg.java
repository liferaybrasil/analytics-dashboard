
package com.liferay.analytics.dashboard.workflow.domain;

import java.io.Serializable;

import org.springframework.data.cassandra.mapping.CassandraType;
import org.springframework.data.cassandra.mapping.PrimaryKey;
import org.springframework.data.cassandra.mapping.PrimaryKeyColumn;

import com.datastax.driver.core.DataType;
import com.datastax.driver.core.LocalDate;
import com.datastax.driver.mapping.annotations.Table;

@Table(name = "workflowprocessavg")
public class WorkflowProcessAvg implements Serializable {

	@PrimaryKeyColumn(ordinal = 0)
	@CassandraType(type = DataType.Name.DATE)
	private LocalDate date;

	@PrimaryKeyColumn(ordinal = 1)
	@CassandraType(type = DataType.Name.TEXT)
	private String analyticsKey;

	@PrimaryKeyColumn(ordinal = 2)
	@CassandraType(type = DataType.Name.BIGINT)
	private long processid;

	@PrimaryKeyColumn(ordinal = 3)
	@CassandraType(type = DataType.Name.BIGINT)
	private long processversionid;

	@CassandraType(type = DataType.Name.BIGINT)
	private long total;

	@CassandraType(type = DataType.Name.BIGINT)
	private long totalcompleted;

	@CassandraType(type = DataType.Name.BIGINT)
	private long totalremoved;

	@CassandraType(type = DataType.Name.BIGINT)
	private long totalDuration;

	private String name = "Unknown";

	public String getName() {

		return name;
	}

	public void setName(String name) {

		this.name = name;
	}

	public LocalDate getDate() {

		return date;
	}

	public String getAnalyticsKey() {

		return analyticsKey;
	}

	public long getProcessid() {

		return processid;
	}

	public long getProcessversionid() {

		return processversionid;
	}

	public long getTotal() {

		return total;
	}

	public long getTotalcompleted() {

		return totalcompleted;
	}

	public long getTotalremoved() {

		return totalremoved;
	}

	public long getTotalDuration() {

		return totalDuration;
	}

}

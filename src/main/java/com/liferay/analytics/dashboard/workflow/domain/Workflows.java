
package com.liferay.analytics.dashboard.workflow.domain;

import java.io.Serializable;

import org.springframework.data.cassandra.mapping.CassandraType;
import org.springframework.data.cassandra.mapping.PrimaryKeyColumn;

import com.datastax.driver.core.DataType;
import com.datastax.driver.mapping.annotations.Table;

@Table(name = "workflowprocessavg")
public class Workflows implements Serializable {

	@PrimaryKeyColumn(ordinal = 0)
	@CassandraType(type = DataType.Name.BIGINT)
	private long processid;

	@PrimaryKeyColumn(ordinal = 1)
	@CassandraType(type = DataType.Name.TEXT)
	private String analyticsKey;

	@PrimaryKeyColumn(ordinal = 3)
	@CassandraType(type = DataType.Name.BOOLEAN)
	private boolean deleted;

	@CassandraType(type = DataType.Name.BOOLEAN)
	private boolean active;

	@CassandraType(type = DataType.Name.TEXT)
	private long title;

	public long getProcessid() {

		return processid;
	}

	public String getAnalyticsKey() {

		return analyticsKey;
	}

	public boolean isDeleted() {

		return deleted;
	}

	public boolean isActive() {

		return active;
	}

	public long getTitle() {

		return title;
	}

}

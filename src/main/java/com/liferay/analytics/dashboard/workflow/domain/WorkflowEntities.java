
package com.liferay.analytics.dashboard.workflow.domain;

import java.io.Serializable;

import org.springframework.data.cassandra.mapping.CassandraType;
import org.springframework.data.cassandra.mapping.PrimaryKeyColumn;

import com.datastax.driver.core.DataType;
import com.datastax.driver.mapping.annotations.Table;

/**
 * @author Inácio Nery
 */
@Table(name = "workflowentities")
public class WorkflowEntities implements Serializable {

	@PrimaryKeyColumn(ordinal = 0)
	private String entity;

	@PrimaryKeyColumn(ordinal = 1)
	private long id;

	@CassandraType(type = DataType.Name.TEXT)
	private String name;

	public String getName() {

		return name;
	}

	public String getEntity() {

		return entity;
	}

	public long getId() {

		return id;
	}
}

/**
 * Copyright (c) 2000-present Liferay, Inc. All rights reserved.
 *
 * This library is free software; you can redistribute it and/or modify it under
 * the terms of the GNU Lesser General Public License as published by the Free
 * Software Foundation; either version 2.1 of the License, or (at your option)
 * any later version.
 *
 * This library is distributed in the hope that it will be useful, but WITHOUT
 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
 * FOR A PARTICULAR PURPOSE. See the GNU Lesser General Public License for more
 * details.
 */

package com.liferay.analytics.dashboard.workflow.domain;

import java.io.Serializable;
import java.time.LocalDate;

import org.springframework.cassandra.core.PrimaryKeyType;
import org.springframework.data.cassandra.mapping.PrimaryKeyColumn;
import org.springframework.data.cassandra.mapping.Table;

/**
 * @author Inácio Nery
 */
@Table(value = "workflowprocessavg")
public class WorkflowProcessAvg implements Serializable {

	@PrimaryKeyColumn(ordinal = 0, type = PrimaryKeyType.PARTITIONED)
	private String analyticsKey;

	@PrimaryKeyColumn(ordinal = 1)
	private LocalDate date;

	@PrimaryKeyColumn(ordinal = 2)
	private long processId;

	@PrimaryKeyColumn(ordinal = 3)
	private long processVersionId;

	private long totalcompleted;

	private long totalduration;

	private long totalremoved;

	private long totalstarted;

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

	public long getProcessId() {

		return processId;
	}

	public long getProcessVersionId() {

		return processVersionId;
	}

	public long getTotalstarted() {

		return totalstarted;
	}

	public long getTotalcompleted() {

		return totalcompleted;
	}

	public long getTotalremoved() {

		return totalremoved;
	}

	public long getTotalDuration() {

		return totalduration;
	}

}

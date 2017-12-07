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

import org.springframework.cassandra.core.PrimaryKeyType;
import org.springframework.data.cassandra.mapping.PrimaryKeyColumn;
import org.springframework.data.cassandra.mapping.Table;

import com.datastax.driver.core.LocalDate;

/**
 * @author Inácio Nery
 */
@Table(value = "workflowprocessavg")
public class WorkflowProcessAvg implements Serializable {

	@PrimaryKeyColumn(ordinal = 0, type = PrimaryKeyType.PARTITIONED)
	private LocalDate date;

	@PrimaryKeyColumn(ordinal = 1)
	private String analyticsKey;

	@PrimaryKeyColumn(ordinal = 2)
	private long processid;

	@PrimaryKeyColumn(ordinal = 3)
	private long processversionid;

	private long total;

	private long totalcompleted;

	private long totalremoved;

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

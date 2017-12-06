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

package com.liferay.analytics.dashboard.forms.domain;

import java.io.Serializable;
import java.text.SimpleDateFormat;
import java.util.Calendar;

import org.springframework.cassandra.core.Ordering;
import org.springframework.cassandra.core.PrimaryKeyType;
import org.springframework.data.cassandra.mapping.PrimaryKeyColumn;
import org.springframework.data.cassandra.mapping.Table;

import com.datastax.driver.core.LocalDate;

/**
 * @author Leonardo Barros
 */
@Table(value = "formsaggregateddata")
public class FormsAggregatedData implements Serializable {

	@PrimaryKeyColumn(ordinal = 0, type = PrimaryKeyType.PARTITIONED)
	private String analyticskey;

	@PrimaryKeyColumn(ordinal = 1, ordering = Ordering.ASCENDING)
	private Long formid;

	@PrimaryKeyColumn(ordinal = 2, ordering = Ordering.ASCENDING)
	private LocalDate date;

	private long views;

	private long sessions;

	private long started;

	private long converted;

	private long convertedTotalTime;

	private long dropoffs;

	public String getDate() {
		Calendar c = Calendar.getInstance();
		c.set(date.getYear(), date.getMonth()-1, date.getDay());

		return sdf.format(c.getTime());
	}

	public long getViews() {
		return views;
	}

	public long getSessions() {
		return sessions;
	}

	public long getStarted() {
		return started;
	}
	
	public double getStartedPercent() {
		return ((double)started / views) * 100;
	}

	public long getConverted() {
		return converted;
	}

	public long getConvertedTotalTime() {
		return convertedTotalTime;
	}

	public long getDropoffs() {
		return dropoffs;
	}
	
	private static final SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
}

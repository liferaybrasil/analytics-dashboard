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

package com.liferay.analytics.dashboard.workflow.dto;

/**
 * @author Inácio Nery
 */
public class TaskDTO {

	public TaskDTO(long id, String title, long total, long average) {

		super();
		this.id = id;
		this.title = title;
		this.total = total;
		this.average = average;
	}
	public long getAverage() {

		return average;
	}
	public long getId() {

		return id;
	}
	public String getTitle() {

		return title;
	}

	public long getTotal() {

		return total;
	}

	private long average;
	private long id;
	private String title;
	private long total;

}

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

import java.util.List;

/**
 * @author Inácio Nery
 */
public class WorkflowDTO {

	private long id;
	private String title;
	private boolean status;
	private long total;
	private long started;
	private long progress;
	private long completed;
	private long average;
	private List<TaskDTO> taskDTOs;

	public WorkflowDTO(
		long id, String title, boolean status, long total, long started,
		long progress, long completed) {

		super();
		this.id = id;
		this.title = title;
		this.status = status;
		this.total = total;
		this.started = started;
		this.progress = progress;
		this.completed = completed;
	}

	public WorkflowDTO(
		long id, String title, boolean status, long total, long started,
		long progress, long completed, long average, List<TaskDTO> taskDTOs) {

		super();
		this.id = id;
		this.title = title;
		this.status = status;
		this.total = total;
		this.started = started;
		this.progress = progress;
		this.completed = completed;
		this.average = average;
		this.taskDTOs = taskDTOs;
	}

	public long getId() {

		return id;
	}

	public String getTitle() {

		return title;
	}

	public boolean isStatus() {

		return status;
	}

	public long getTotal() {

		return total;
	}

	public long getStarted() {

		return started;
	}

	public long getProgress() {

		return progress;
	}

	public long getCompleted() {

		return completed;
	}

	public long getAverage() {

		return average;
	}

	public List<TaskDTO> getTaskDTOs() {

		return taskDTOs;
	}

}

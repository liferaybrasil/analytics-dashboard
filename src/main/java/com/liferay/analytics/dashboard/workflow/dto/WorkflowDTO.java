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
		long progress, long completed, long averageProcess, long averageTask,
		List<TaskDTO> taskDTOs) {

		super();
		this.id = id;
		this.title = title;
		this.status = status;
		this.total = total;
		this.started = started;
		this.progress = progress;
		this.completed = completed;
		this.averageProcess = averageProcess;
		this.averageTask = averageTask;
		this.taskDTOs = taskDTOs;
	}
	public long getAverageProcess() {

		return averageProcess;
	}
	public long getAverageTask() {

		return averageTask;
	}
	public long getCompleted() {

		return completed;
	}
	public long getId() {

		return id;
	}
	public long getProgress() {

		return progress;
	}
	public long getStarted() {

		return started;
	}
	public List<TaskDTO> getTaskDTOs() {

		return taskDTOs;
	}
	public String getTitle() {

		return title;
	}

	public long getTotal() {

		return total;
	}

	public boolean isStatus() {

		return status;
	}

	private long averageProcess;
	private long averageTask;
	private long completed;
	private long id;
	private long progress;
	private long started;
	private boolean status;
	private List<TaskDTO> taskDTOs;
	private String title;
	private long total;

}

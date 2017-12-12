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
public class WorkflowDTO {

	private long id;
	private String title;
	private boolean status;
	private long process;
	private long started;
	private long inprogress;
	private long completed;

	public WorkflowDTO(
		long id, String title, boolean status, long process, long started,
		long inprogress, long completed) {

		super();
		this.id = id;
		this.title = title;
		this.status = status;
		this.process = process;
		this.started = started;
		this.inprogress = inprogress;
		this.completed = completed;
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

	public long getProcess() {

		return process;
	}

	public long getStarted() {

		return started;
	}

	public long getInprogress() {

		return inprogress;
	}

	public long getCompleted() {

		return completed;
	}

}

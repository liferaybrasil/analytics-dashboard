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
public class SummaryDTO {

	public SummaryDTO(
		long workflows, long published, long unpublished, long total,
		long started, long progress, long completed,
		List<WorkflowDTO> workflowDTOs) {

		this.workflows = workflows;
		this.published = published;
		this.unpublished = unpublished;
		this.total = total;
		this.started = started;
		this.progress = progress;
		this.completed = completed;
		this.workflowDTOs = workflowDTOs;
	}
	public long getCompleted() {

		return completed;
	}
	public long getProgress() {

		return progress;
	}
	public long getPublished() {

		return published;
	}
	public long getStarted() {

		return started;
	}
	public long getTotal() {

		return total;
	}
	public long getUnpublished() {

		return unpublished;
	}
	public List<WorkflowDTO> getWorkflowDTOs() {

		return workflowDTOs;
	}

	public long getWorkflows() {

		return workflows;
	}

	private long completed;
	private long progress;
	private long published;
	private long started;
	private long total;
	private long unpublished;
	private List<WorkflowDTO> workflowDTOs;
	private long workflows;

}

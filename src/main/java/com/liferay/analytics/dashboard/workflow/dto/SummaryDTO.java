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

	private long workflows;
	private long published;
	private long unpublished;
	private long process;
	private long started;
	private long inprogress;
	private long completed;
	private List<WorkflowDTO> workflowDTOs;

	public SummaryDTO(
		long workflows, long published, long unpublished, long process,
		long started, long inprogress, long completed,
		List<WorkflowDTO> workflowDTOs) {

		this.workflows = workflows;
		this.published = published;
		this.unpublished = unpublished;
		this.process = process;
		this.started = started;
		this.inprogress = inprogress;
		this.completed = completed;
		this.workflowDTOs = workflowDTOs;
	}

	public long getWorkflows() {

		return workflows;
	}

	public long getPublished() {

		return published;
	}

	public long getUnpublished() {

		return unpublished;
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

	public List<WorkflowDTO> getWorkflowDTOs() {

		return workflowDTOs;
	}

}

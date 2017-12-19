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

package com.liferay.analytics.dashboard.workflow.repository;

import org.springframework.data.cassandra.repository.CassandraRepository;
import org.springframework.data.cassandra.repository.Query;

import com.liferay.analytics.dashboard.workflow.domain.WorkflowProcess;

/**
 * @author Inácio Nery
 */
public interface WorkflowProcessRepository
	extends CassandraRepository<WorkflowProcess> {

	@Query("select max(processVersionId) from WorkflowProcess where analyticskey = ?0 and processid = ?1")
	Long findMaxProcessVersionIdByAnalyticsKeyAndProcessId(
		String analyticsKey, long processId);

	@Query("select * from WorkflowProcess where analyticskey = ?0 and processid = ?1 and processversionid = ?2 ALLOW FILTERING")
	Iterable<WorkflowProcess> findByAnalyticsKeyAndProcessIdAndProcessVersionId(
		String analyticsKey, long processId, long processVersionId);

	Iterable<WorkflowProcess> findByAnalyticsKeyAndProcessId(
		String analyticsKey, long processId);
}

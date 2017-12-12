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

import java.time.LocalDate;
import java.util.Collection;

import org.springframework.data.cassandra.repository.CassandraRepository;

import com.liferay.analytics.dashboard.workflow.domain.WorkflowProcessAvg;

/**
 * @author Inácio Nery
 */
public interface WorkflowProcessAvgRepository
	extends CassandraRepository<WorkflowProcessAvg> {

	Iterable<WorkflowProcessAvg> findByAnalyticsKeyAndDateInAndProcessId(
		String analyticsKey, Collection<LocalDate> dates, long processId);
}

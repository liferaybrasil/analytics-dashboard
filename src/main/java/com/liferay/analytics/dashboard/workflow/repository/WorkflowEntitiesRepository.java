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
import org.springframework.data.cassandra.repository.MapId;
import org.springframework.data.cassandra.repository.support.BasicMapId;

import com.liferay.analytics.dashboard.workflow.domain.WorkflowEntities;

/**
 * @author Inácio Nery
 */
public interface WorkflowEntitiesRepository
	extends CassandraRepository<WorkflowEntities> {

	default WorkflowEntities findOne(String entity, long id) {

		MapId mapId = BasicMapId.id("entity", entity).with("id", id);

		return findOne(mapId);
	}
}

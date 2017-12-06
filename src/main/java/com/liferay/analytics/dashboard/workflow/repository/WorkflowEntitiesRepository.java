
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

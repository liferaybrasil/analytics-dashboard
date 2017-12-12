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

package com.liferay.analytics.dashboard.forms.repository;

import java.util.List;

import org.springframework.data.cassandra.repository.CassandraRepository;
import org.springframework.data.cassandra.repository.Query;

import com.datastax.driver.core.LocalDate;
import com.liferay.analytics.dashboard.forms.domain.FormsAggregatedData;

/**
 * @author Leonardo Barros
 */
public interface FormsAggregatedDataRepository
	extends CassandraRepository<FormsAggregatedData> {

	@Query("select * from FormsAggregatedData where analyticskey = ?0 " +
		"and formid = ?1 and date >= ?2 and date <= ?3")
	List<FormsAggregatedData> find(
		String analyticskey, Long formid, LocalDate start, LocalDate end);
}

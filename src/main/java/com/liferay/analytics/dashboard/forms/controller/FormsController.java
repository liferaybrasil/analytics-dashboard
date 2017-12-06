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

package com.liferay.analytics.dashboard.forms.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.datastax.driver.core.LocalDate;
import com.liferay.analytics.dashboard.forms.domain.FormsAggregatedData;
import com.liferay.analytics.dashboard.forms.repository.FormsAggregatedDataRepository;

/**
 * @author Leonardo Barros
 */
@RequestMapping("/api/forms")
@RestController
public class FormsController {

	@Autowired
	private FormsAggregatedDataRepository repository;

	@GetMapping("/find")
	List<FormsAggregatedData> hello() {
		
		LocalDate s = LocalDate.fromYearMonthDay(2017, 12, 4);
		
		return repository.find("analyticskey:test", 35490L, s, s);
	}
}
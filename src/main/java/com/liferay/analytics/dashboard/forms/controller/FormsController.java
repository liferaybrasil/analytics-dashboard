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

import java.util.Calendar;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
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
	List<FormsAggregatedData> find(
		@RequestParam(name = "analyticskey") String analyticskey,
		@RequestParam(name = "formid") Long formid,
		@RequestParam(name = "start") @DateTimeFormat(pattern="yyyy-MM-dd") Date start,
		@RequestParam(name = "end", required = false) @DateTimeFormat(pattern="yyyy-MM-dd") Date end) {

		Calendar startCalendar = Calendar.getInstance();
		startCalendar.setTime(start);

		Calendar endCalendar = Calendar.getInstance();
		endCalendar.setTime(end != null ? end : new Date());

		return repository.find(
			analyticskey, formid, 
			LocalDate.fromYearMonthDay(
				startCalendar.get(Calendar.YEAR), 
				startCalendar.get(Calendar.MONTH) + 1, 
				startCalendar.get(Calendar.DAY_OF_MONTH)), 
			LocalDate.fromYearMonthDay(
				endCalendar.get(Calendar.YEAR), 
				endCalendar.get(Calendar.MONTH) + 1, 
				endCalendar.get(Calendar.DAY_OF_MONTH)));
	}
}
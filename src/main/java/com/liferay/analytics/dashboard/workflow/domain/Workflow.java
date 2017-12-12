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

package com.liferay.analytics.dashboard.workflow.domain;

import java.io.Serializable;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
import org.json.XML;
import org.springframework.cassandra.core.PrimaryKeyType;
import org.springframework.data.cassandra.mapping.PrimaryKeyColumn;
import org.springframework.data.cassandra.mapping.Table;

/**
 * @author Inácio Nery
 */
@Table(value = "workflows")
public class Workflow implements Serializable {

	@PrimaryKeyColumn(ordinal = 0, type = PrimaryKeyType.PARTITIONED)
	private String analyticsKey;

	@PrimaryKeyColumn(ordinal = 1)
	private long processid;

	private boolean deleted;

	private boolean active;

	private String title;

	public String getAnalyticsKey() {

		return analyticsKey;
	}

	public long getProcessid() {

		return processid;
	}

	public boolean isActive() {

		return active;
	}

	public String getTitle() {

		try {
			JSONObject titlesJSONObject = XML.toJSONObject(title);

			JSONObject rootJSONObject = titlesJSONObject.getJSONObject("root");

			String defaultLocale = rootJSONObject.getString("default-locale");

			try {
				JSONArray titleJSONArray = rootJSONObject.getJSONArray("Title");
				for (int i = 0; i < titleJSONArray.length(); i++) {
					JSONObject titleJSONObject =
						titleJSONArray.getJSONObject(i);

					String languageId =
						titleJSONObject.getString("language-id");

					if (languageId.equals(defaultLocale)) {
						return titleJSONObject.getString("content");
					}

				}
			}
			catch (JSONException e) {
				JSONObject titleJSONObject =
					rootJSONObject.getJSONObject("Title");

				String languageId = titleJSONObject.getString("language-id");

				if (languageId.equals(defaultLocale)) {
					return titleJSONObject.getString("content");
				}

			}

		}
		catch (JSONException e) {

		}
		return title;
	}

}

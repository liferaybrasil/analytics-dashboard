package com.liferay.analytics.dashboard.workflow.domain;

import java.io.Serializable;

import org.springframework.data.cassandra.mapping.CassandraType;
import org.springframework.data.cassandra.mapping.PrimaryKey;

import com.datastax.driver.core.DataType;
import com.datastax.driver.mapping.annotations.Table;

@Table(name = "workflowprocessavg")
public class WorkflowProcessAvg implements Serializable {

    @PrimaryKey
    @CassandraType(type = DataType.Name.BIGINT)
    private long kaleoDefinitionVersionId;

    @CassandraType(type = DataType.Name.BIGINT)
    private long total;

    @CassandraType(type = DataType.Name.BIGINT)
    private long totalDuration;

    private String name = "Unknown";

    public long getKaleoDefinitionVersionId() {
        return kaleoDefinitionVersionId;
    }

    public long getTotal() {
        return total;
    }

    public long getTotalDuration() {
        return totalDuration;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

}
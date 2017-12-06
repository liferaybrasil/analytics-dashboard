<!doctype html>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<html lang="en">
	<head>
		<meta charset="utf-8">
		<title>Analytics Dashboard</title>
		<link rel="stylesheet" href="/main.css"/>
		<script src="/build/Workflow.js" type="text/javascript"/></script>
	</head>
	<body>
		<div id="workflowProcessAvg"></div>
		<div id="workflowTaskAvg"></div>
		<script type="text/javascript">
			window.DashBoardWorkflowProcessAvg = new Workflow.WorkflowProcessAvg({
			  title: 'Dashboard'
			}, document.querySelector('#workflowProcessAvg'));
			window.DashBoardWorkflowTaskAvg = new Workflow.WorkflowTaskAvg({
			  title: 'Dashboard'
			}, document.querySelector('#workflowTaskAvg'));
		</script>
	</body>
</html>
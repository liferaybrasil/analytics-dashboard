<!doctype html>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<html lang="en">
	<head>
		<meta charset="utf-8">
		<title>Forms Analytics Dashboard</title>
		<script src="/build/Workflow.js" type="text/javascript"/></script>
	</head>
	<body>
		<div id="dashboard"></div>
		<script type="text/javascript">
			window.WorkflowDashboard = new Workflow.Dashboard(
				{
					title: 'Workflow Dashboard'
				}, 
				document.querySelector('#dashboard')
			);
		</script>
	</body>
</html>
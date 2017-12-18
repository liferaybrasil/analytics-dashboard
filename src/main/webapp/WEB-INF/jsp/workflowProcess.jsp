<!doctype html>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<html lang="en">
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<title>Workflow Analytics Dashboard</title>
		<script src="/build/WorkflowProcess.js" type="text/javascript"/></script>
	</head>
	<body>
		<div id="dashboard"></div>
		<script type="text/javascript">
			window.WorkflowProcessDashboard = new WorkflowProcess.Dashboard(
				{
					title: 'Workflow Process Dashboard'
				}, 
				document.querySelector('#dashboard')
			);
		</script>
	</body>
</html>
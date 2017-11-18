<!doctype html>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<html lang="en">
  <head>
    <meta charset="utf-8">
      <title>Analytics Dashboard</title>
      <link rel="stylesheet" href="/main.css"/>
      <script src="/build/Dashboard.js" type="text/javascript"/></script>
  </head>
  <body>
    <div id="app"></div>
    <script type="text/javascript">
      window.DashBoardApp = new Dashboard.App({
        title: 'Dashboard'
      }, document.querySelector('#app'));
    </script>
  </body>
</html>
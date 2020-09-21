<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!-- jstl 사용을 위한 taglib -->
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Something</title>
<!-- sample.css 파일 사용을 위한 태그 -->
<link rel="stylesheet" type="text/css" href="resources/css/sample.css?ver=3"/>
<!-- Jquey를 사용을 위한 태그 -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<!-- smaple.js를 사용하기 위한 태그 -->
</head>
<body>
 	<div class="js-clock">
 		<h1 class="js-title"></h1>
 	</div>
 	<form class="js-form form">
 		<input type="text" placeholder="What is your name?">
 	</form>
 	<h4 class="js-greetings greetings"></h4>
 	<form class="js-toDoForm">
 		<input type="text" placeholder="Write a to do" />
 	</form>
 	<ul class="js-toDoList">
 	</ul>
 	<span class="js-weather"></span>
	<script src="resources/js/clock.js?ver=1"></script>
	<script src="resources/js/greeting.js?ver=1"></script>
	<script src="resources/js/todo.js?ver=2"></script>
	<script src="resources/js/backGround.js?ver=1"></script>
	<script src="resources/js/weather.js?ver=3"></script>

</body>
</html>
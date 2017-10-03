<?php
	if(!defined('isPage')) { die("HTTP/1.1 403 Forbidden"); } 
	include '_content.php';
?>

<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<meta content="IE=edge" http-equiv="X-UA-Compatible">
	
	<title>WEB TITLE</title>

	<meta content="en" name="language">

	<meta content="yes" name="apple-mobile-web-app-capable">
	<meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" name="viewport">

	<meta content="Lorem Ipsum" name="description">
	<meta content="keywords, key" name="keywords">

	<link href="SITE_URL" hreflang="x-default" rel="alternate">
	<link href="myicon.png" rel="icon" type="image/png">

	<link href="assets/css/app.css" media="all" rel="stylesheet" type="text/css">
</head>
<body>
	<div id="site-wrapper">
		<nav class="container-fluid">
			<a class="logo" href="/"></a>
			<div class="hamburger" id="openBtn">
				<span></span><span></span><span></span>
			</div>
			<div class="menu container">
				<div class="list">
					<ul>
						<li class="active">
							<a href="/about.html">About Us</a>
						</li>
						<li>
							<a href="/wedding.html">Wedding</a>
						</li>
						<li>
							<a href="/events.html">Events</a>
						</li>
						<li>
							<a href="/portfolio.html">Portfolio</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>

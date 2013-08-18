<!DOCTYPE HTML>
<html>
<head>
	<?php include("includes/head.php"); ?>
</head>
<body class="<?php include("includes/bodyclass.php"); ?>">
	<?php include("includes/nav.php"); ?>

	<header>
		<div class="content-wrapper">
			<h1>We are</h1>
			<div id="logo"><img src="images/logo.png" alt="Precise Pixels"></div>
			<h1>We pride ourselves on creating websites that are functional, intuitive and beautiful.</h1>
		</div>
	</header>

	<div class="content-wrapper">
		<div class="content-section" itemscope itemtype="http://www.data-vocabulary.org/Organization/">
			<h2>Why hello there</h2>
			<h3><span itemprop="name">Precise Pixels</span> is a web design company based in <span itemprop="address" itemscope itemtype="http://data-vocabulary.org/Address"><span itemprop="locality">Canterbury</span>, <span itemprop="region">Kent</span></span>.</h3>
		</div>

		<div class="content-section">
			<a href="about-us">
				<div class="button third">
					<span>About Us</span>
					<span class="icon icon_large icon_about">Ý</span>
				</div>
			</a>
			<a href="our-work">
				<div class="button third">
					<span>Our Work</span>
					<span class="icon icon_large icon_work">7</span>
				</div>
			</a>
			<a href="contact-us">
				<div class="button third">
					<span>Contact</span>
					<span class="icon icon_large icon_contact">h</span>
				</div>
			</a>
		</div>
	</div>

	<?php include("includes/footer.php"); ?>

	<?php include("includes/scripts.php"); ?>
</body>
</html>
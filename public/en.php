<!DOCTYPE html>
<html>
<head>
	<title>Faso Template</title>
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="stylesheet" href="/font-awesome/css/font-awesome.min.css">
	<link rel="stylesheet" type="text/css" href="/css/style.css">
</head>
<body id="allPages">
	<div class="container" id="main" data-role="page">
		<?php include("header.php"); ?>
			<i class="fa fa-arrow-circle-o-up fa-3x" id="go-to-top"></i>
			<div class="row no-gutters  " id="content_top_margin">
				<div class="container cell-xs-12 cell-sm-offset-3 cell-sm-6 cell-md-9">
					<div class="row">
						<div class="cell-md-12">
							
							<form>
								<div class="cell-md-offset-3 cell-md-6 email_news_form">
									<h1>Sign Up for my Email Newsletter</h1>
									<h5>Please complete the form below to sign up for my newsletter</h5>
									<form>
										<input type="email" name="email" placeholder="Email" >
										<input id="focusHere" type="text" name="firstname" placeholder="First Name">
										<input id="focusHere" type="text" name="lastname" placeholder="Last Name">
										<div class="cell-md-12">
											<input class="cell-xs-2 cell-sm-1 cell-md-1" type="radio" name="option" value="subscribe" checked><p>Subscribe</p>
										</div>
										<div class="cell-md-12">
											<input class="cell-xs-2 cell-sm-1 cell-md-1" type="radio" name="option" value="unsubscribe"><p>Unsubscribe</p>
										</div>								
										<input class="cell-md-4" type="submit">			
									</form>
								</div>
							</form>
						</div>
					</div>
				</div> <!-- /container -->
		
				<div class="cell-xs-12 cell-sm-12 cell-md-3">
					<div class="row">
						
						<div class="cell-md-12 blog_widget_side_title">
							<h3>Search</h3>
						</div>
						<div class="row">
							<div class="cell-xs-12 cell-sm-12 cell-md-12 searchbox">
								<span class="cell-xs-6 cell-sm-6 cell-md-12">
								 <input class="cell-xs-6 cell-sm-6 searchbox"  type="text">
								</span>
								 <!-- <i class="fa fa-search fa-large"></i> -->
							</div>
						</div> <!-- /row -->
						<div class="cell-xs-12 cell-sm-12 cell-md-12 blog_widget_side_title">
							<a href="/collections.php" target="_self"><h3>Recent Works</h3></a>
						</div>
						<div class="row">
							<div class="cell-md-12 " id="recent_work_gallery">
								<ul>
									<li>
										<a class="img_holder1" href="/works_expanded.php" target="_self">
											
										</a>

									</li>
									<li>
										<a class="img_holder2" href="/works_expanded.php" target="_self">
																		
										</a>
									</li>
									<li>
										<a class="img_holder3" href="/works_expanded.php" target="_self">
																										
										</a>
									</li>
									<li>
										<a class="img_holder4" href="/works_expanded.php" target="_self">
																			
										</a>
									</li>
								</ul>
							
						</div> <!-- /recent worsk-->
						</div> <!-- </row> -->
						<div class="cell-md-12 blog_widget_side_title">
							<a href="/blogfront.php" target="_self"><h3>Recent Blog Entries</h3></a>
						</div>
						<div class="row">
							<div class="cell-md-12 " >
								<div class="cell-md-12">
									<a href="/blog.php" target="_self">
										<h2 class="blog_widget_title">Dallas Web Jobs</h2>
									</a>
								</div>
								
								<div class="cell-md-12">
									<a href="/blog.php" target="_self">
										<h2 class="blog_widget_title">Volunteer Art Classes</h2>
									</a>
								</div>
								
								<div class="cell-md-12">
									<a href="/blog.php" target="_self">
										<h2 class="blog_widget_title">Road Trip to Deep Ellum Art Festival</h2>
									</a>
								</div>
							</div> <!-- /recent blog row -->
						</div><!-- /row -->

						<div class="cell-md-12 blog_widget_side_title">
							<a href="/events.php" target="_self"><h3>UpComing Events</h3></a>
						</div>
						<div class="row">
							<div class="cell-md-12 " >
								<div class="cell-md-12">
									<a href="/event.php" target="_self">
										<h2 class="blog_widget_title">Painting for Hipsters</h2>
									</a>
								</div>
								
								<div class="cell-md-12">
									<a href="/event.php" target="_self">
										<h2 class="blog_widget_title">Live show saturday</h2>
									</a>
								</div>
								
							</div> <!-- /recent blog row -->
						</div><!-- /row -->
						<div class="cell-md-12 blog_widget_side_title">
							<h3>Join My Email list</h3>
							<span>Updates, Latest Works, News</span>
						</div>
						<div class="row">
							<div class="cell-xs-12 cell-sm-12 cell-md-12 searchbox">
								<div class="cell-xs-6 cell-sm-6 cell-md-9">
									<span>
									 <input class="searchbox"  type="text">
									</span>
								</div>
								<div class="cell-xs-6 cell-sm-6 cell-md-3">
								<a href="#"> <i class="fa fa-plus-square-o fa-2x"></i></a>
									
								</div>
							</div>
						</div> <!-- /row -->
						<div class="cell-md-12 blog_widget_side_title">
							<h3>Share</h3>
						</div>
						<div class="cell-md-offset-1">
							<ul>
								<a href="#"><li class="cell-md-4"><i class="fa fa-google-plus-square fa-2x"></i></li></a>
								<a href="#"><li class="cell-md-4"><i class="fa fa-facebook-square fa-2x"></i></li></a>
								<a href="#"><li class="cell-md-4"><i class="fa fa-twitter-square fa-2x"></i></li></a>
							</ul>
						</div>
					</div>
				</div>
			</div> <!-- /row -->
		<?php include("footer.php"); ?><!-- FOOTER -->
	</div><!-- /container -->
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
		<script type="text/javascript" src="/js/jquery.materialripple.js"></script>
		<script type="text/javascript" src="/js/mobiledetect.js"></script>	
		<script type="text/javascript" src="/js/main.js"></script>
</body>
</html>



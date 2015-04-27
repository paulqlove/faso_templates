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
				<div class="container cell-md-9">
					<div class="row">
						<div class="cell-md-12">
							
							<form>
							<h2 id="contact_title">Works Inquire</h2>
								<div class="contact_msg cell-md-offset-3 cell-md-6">
									
									<input id="focusHere" type="text" name="fullname" placeholder="Name" autofocus>
									
									<input type="email" name="email" placeholder="Email">
									
									<input type="tel" name="contactnumber" placeholder="Phone">
								
									
									<textarea name="message" maxlength="250" placeholder="Comments"></textarea>	
									<input class="cell-md-4" type="submit">			
								</div>
							</form>
						</div>
					</div>
				</div>
		
				<div class="cell-xs-12 cell-md-3">
					<div class="row">
						<div class="cell-md-12 blog_widget_side_title">
							<h3> Mother Beast</h3>
						</div>
						<div class="cell-md-12">
							<a href="/works_expanded.php"><img class="works_inq_img " src="/images/1184544w900.jpg"></a>
						</div>
						<div class="cell-md-12 blog_widget_side_title">
							<h3>Search</h3>
						</div>
						<div class="row">
							<div class="cell-md-12 searchbox">
								<span class="cell-md-12">
								 <input class="searchbox"  type="text" >
								</span>
								 <!-- <i class="fa fa-search fa-large"></i> -->
							</div>
						</div> <!-- /row -->
						<div class="cell-md-12 blog_widget_side_title">
							<a href="/collections.php" target="_self"><h3>Recent Works</h3></a>
						</div>
						<div class="row">

						<div class="cell-md-12 " >
							<div class="cell-xs-3 cell-sm-3 cell-md-4 img_holder">
								<a href="/works_expanded.php" target="_self">
									<img src="/images/464075w900.jpg">
								</a>
							</div>
							
							<div class="cell-xs-3 cell-sm-3 cell-md-4 img_holder">
								<a href="/works_expanded.php" target="_self">
									<img src="/images/desert3.jpg">								
								</a>
							</div>
							
							<div class="cell-xs-3 cell-sm-3 cell-md-4 img_holder">
								<a href="/works_expanded.php" target="_self">
									<img src="/images/desert1.jpg">															
								</a>
							</div>
							
							<div class="cell-xs-3 cell-sm-3 cell-md-4 img_holder">
								<a href="/works_expanded.php" target="_self">
									<img src="/images/desert.jpg">								
								</a>
							</div>
							
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
	</div><!--eventcontainer -->
		<?php include("footer.php"); ?><!-- FOOTER -->
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
		<script type="text/javascript" src="/js/jquery.materialripple.js"></script>
		<script type="text/javascript" src="/js/mobiledetect.js"></script>	
		<script type="text/javascript" src="/js/main.js"></script>
</body>
</html>





	

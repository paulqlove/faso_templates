<!DOCTYPE html>
<html>
<head>
	<title>Faso Template</title>

	<meta name="viewport" content="width=device-width, initial-scale=1">

	<!-- <link rel="stylesheet" href="http://code.jquery.com/mobile/1.4.0/jquery.mobile-1.4.0.min.css" /> -->
	<link rel="stylesheet" href="/font-awesome/css/font-awesome.min.css">
	<link rel="stylesheet" type="text/css" href="/css/style.css">
</head>
<body id="allPages">
	<div class="container" id="main" data-role="page">
			<?php include("header.php"); ?>

			<div class="single_work_expanded row" id="gallery_margin">
				<div class="cell-md-push-4 cell-md-8">
					<div class="image_info cell-sm-4 cell-md-5">
						<div class="row">
							<div class="cell-md-12 no-gutters">
								<div  class="cell-xs-6 cell-sm-6 cell-md-12">
									<h3>Title</h3>
									<p>Mother Beast</p>
								</div>
								<div  class="cell-xs-6 cell-sm-6 cell-md-12">
									<h3>Medium</h3>
									<p>Oil on Canvas</p>
								</div>
								<div  class="cell-xs-6 cell-sm-6 cell-md-12">
									<h3>Size</h3>
									<p>20 X 16 inches</p>
								</div>
								<div class="cell-xs-6 cell-sm-6 cell-md-12">
									<h3>price</h3>
									<p>$2000</p>
								</div>
								<div  class="cell-xs-8 cell-sm-12 cell-md-12">
									<h3>Description</h3>
									<p>This piece is a commision from my clients photograph. Both cows have what I look for in my own photos, personality!</p>
								</div>
							</div>
						</div>
					</div>
					<div class="cell-sm-8 cell-md-7">
						<div id="image_container">
							<img class="singleImage " src="/images/1184544w900.jpg">
							<i class="fa fa-angle-right fa-5x" id="next_image_button"></i>
							<i class="fa fa-angle-down fa-5x" id="scroll_down_arrow"></i>
						</div>
					</div>
				</div><!-- /content -->
			</div><!-- row -->
	<?php include("footer.php"); ?><!-- FOOTER -->
	</div><!-- /container -->
			
		
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
		
		<script type="text/javascript" src="/js/jquery.materialripple.js"></script>
		<script type="text/javascript" src="/js/mobiledetect.js"></script>	
		<script type="text/javascript" src="/js/main.js"></script>
</body>
</html>





$('#dlcv').bind('click', function() {
	var $dlalert = '<div class="alert alert-info" id="dlalert"><button class="close" data-dismiss="alert">×</button><strong>Downloaded</strong> The PDF copy should be in your download folder shortly.</div>'; 
	$("#cv-nav").append($dlalert);
	// window.setTimeout(function() { $("#dlalert").alert('close'); }, 10000);
	location.href='download.php';
}); 
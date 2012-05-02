<?php
	header('Content-type: application/pdf');
	header('Content-Disposition: attachment; filename="SafwanChoudhury.pdf"');
	readfile('cv.pdf');
?>
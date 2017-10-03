<?php
	//Config
	$outputDir = 'dist';
	$inputDir   = '../';


	mkdir('../' . $outputDir);

	$files = scandir($inputDir);
	for ($i=0; $i < sizeof($files); $i++) {

		if ( substr($files[$i], 0, 1) != "_" && 
			strpos($files[$i], '.php') !== false) {

			outputToFile($files[$i], $inputDir, $outputDir);
		}
	}

	recurse_copy('' . $inputDir . 'assets', '../' . $outputDir . '/assets');


	function outputToFile($filename, $inputDir, $outputDir) {

		// Start capturing data for converting PHP to HTML file
		ob_start();

		include $inputDir . $filename;

		// Output PHP to HTML file
		$HtmlCode= ob_get_contents(); 
		ob_end_flush(); 

		$fh = fopen( '../' . $outputDir . '/' . str_replace(".php", ".html", $filename), 'w');
		
		fwrite($fh,$HtmlCode);
		fclose($fh);
	}


	function recurse_copy($src,$dst) { 
		$dir = opendir($src); 
		@mkdir($dst); 
		while(false !== ( $file = readdir($dir)) ) { 
			if (( $file != '.' ) && ( $file != '..' )) { 
				if ( is_dir($src . '/' . $file) ) { 
					recurse_copy($src . '/' . $file,$dst . '/' . $file); 
				} 
				else { 
					copy($src . '/' . $file,$dst . '/' . $file); 
				} 
			} 
		} 
		closedir($dir); 
	} 
 ?>

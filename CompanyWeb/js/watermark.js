var intranet_cookies = ["w3ibmProfile","3_sauid","PD-W3-SSO-","OSCw3Session","IBM_W3SSO_ACCESS"];
	var cookies = document.cookie;
	var runWatermark = false;
	jQuery.each (intranet_cookies, function(index, element) {
		
		if (cookies.indexOf(element+"=") > -1) {
			jQuery('head').append('<script src="../../gtt.dst.ibm.com/tools/scripts/watermark/watermark.js"></script>');
			return;
		}
	});
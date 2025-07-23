$(function(){
	$(headerbar)[0].children[4].children[0].appendChild($(headerbarmore)[0])
	$(headerbarmore).css("display", "block")
	$(headerbarmore).css("position", "absolute")
	$(headerbarmore).css("top", "100%")
	$(headerbarmore).slideUp(0);
	
	var headerBar = $(header);
	if (document.getElementById("home-section").classList.contains("active")) {
		headerBar.slideUp(500);
	}
		
	window.onscroll = function() {window.thinkHeaderBar()};
	
	window.thinkHeaderBar = function() {
		if (document.getElementById("home-section").classList.contains("active") && $(window).scrollTop() < 10) {
			headerBar.slideUp(500);
			closeHeaderMore();
		} else {
			headerBar.slideDown(500);
		}
	};

	$('#headerbar > li:nth-child(5) > a')[0].addEventListener(
		'click',
		function(event) { 
			toggleHeaderMore()
		}
	);
});

var menuMoreHidden = true

function closeHeaderMore() {
	menuMoreHidden = true;
	$(headerbarmore).slideUp(250);
}

function openHeaderMore() {
	menuMoreHidden = false;
	$(headerbarmore).slideDown(250);
}

function toggleHeaderMore() {
	if (menuMoreHidden) {
		openHeaderMore();
	} else {
		closeHeaderMore();
	}
}
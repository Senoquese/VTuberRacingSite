const defaultVideo = "Default"

var landingVideos = [
	{	name: "Default",
		videofile: "assets/videos/landingpage.mp4",
		thumbnail: "assets/videos/landingpage.mp4.jpg",
		position: "top left",
		height: "115%",
		visible: true
	},{	name: "Starting Soon - Debut",
		videofile: "https://github.com/Senoquese/VTuberRacingSite/raw/refs/heads/main/streams/landingpage/1st%20starting%20soon.mp4",
		thumbnail: "https://raw.githubusercontent.com/Senoquese/VTuberRacingSite/refs/heads/main/streams/landingpage/1st%20starting%20soon.jpg",
		position: "center left",
		height: "100%",
		visible: false
	},{	name: "Starting Soon - Garage",
		videofile: "https://github.com/Senoquese/VTuberRacingSite/raw/refs/heads/main/streams/landingpage/starting%20soon.mp4",
		thumbnail: "https://raw.githubusercontent.com/Senoquese/VTuberRacingSite/refs/heads/main/streams/landingpage/starting%20soon.jpg",
		position: "center left",
		height: "100%",
		visible: false
	},{	name: "BRB - PS1",
		videofile: "https://github.com/Senoquese/VTuberRacingSite/raw/refs/heads/main/streams/landingpage/brb%20ps1.mp4",
		thumbnail: "https://raw.githubusercontent.com/Senoquese/VTuberRacingSite/refs/heads/main/streams/landingpage/brb%20ps1.jpg",
		position: "center left",
		height: "100%",
		visible: false
	},{	name: "BRB - Pitcrew Race",
		videofile: "https://github.com/Senoquese/VTuberRacingSite/raw/refs/heads/main/streams/landingpage/brb.mp4",
		thumbnail: "https://raw.githubusercontent.com/Senoquese/VTuberRacingSite/refs/heads/main/streams/landingpage/brb.jpg",
		position: "center left",
		height: "100%",
		visible: false
	},{	name: "We Need Cash",
		videofile: "https://github.com/Senoquese/VTuberRacingSite/raw/refs/heads/main/streams/landingpage/we%20need%20cash.mp4",
		thumbnail: "https://raw.githubusercontent.com/Senoquese/VTuberRacingSite/refs/heads/main/streams/landingpage/we%20need%20cash.jpg",
		position: "center center",
		height: "100%",
		visible: false
	},{	name: "Glory",
		videofile: "https://github.com/Senoquese/VTuberRacingSite/raw/refs/heads/main/streams/landingpage/glory.mp4",
		thumbnail: "https://raw.githubusercontent.com/Senoquese/VTuberRacingSite/refs/heads/main/streams/landingpage/glory.jpg",
		position: "center left",
		height: "100%",
		visible: true
	},{	name: "Warm Winter",
		videofile: "https://github.com/Senoquese/VTuberRacingSite/raw/refs/heads/main/streams/landingpage/warm%20winter.mp4",
		thumbnail: "https://raw.githubusercontent.com/Senoquese/VTuberRacingSite/refs/heads/main/streams/landingpage/warm%20winter.jpg",
		position: "center left",
		height: "100%",
		visible: true
	},{	name: "Space Cadet",
		videofile: "https://github.com/Senoquese/VTuberRacingSite/raw/refs/heads/main/streams/landingpage/spacecadet.mp4",
		thumbnail: "https://raw.githubusercontent.com/Senoquese/VTuberRacingSite/refs/heads/main/streams/landingpage/spacecadet.jpg",
		position: "center left",
		height: "100%",
		visible: true
	},{	name: "Nutcracker",
		videofile: "https://github.com/Senoquese/VTuberRacingSite/raw/refs/heads/main/streams/landingpage/nutcracker.mp4",
		thumbnail: "https://raw.githubusercontent.com/Senoquese/VTuberRacingSite/refs/heads/main/streams/landingpage/nutcracker.jpg",
		position: "center left",
		height: "100%",
		visible: false
	},{	name: "Virtual Vacation 2025",
		videofile: "https://github.com/Senoquese/VTuberRacingSite/raw/refs/heads/main/streams/landingpage/vv25.mp4",
		thumbnail: "https://raw.githubusercontent.com/Senoquese/VTuberRacingSite/refs/heads/main/streams/landingpage/vv25.jpg",
		position: "bottom left",
		height: "100%",
		visible: true
	},{	name: "Pit Crew Plushie",
		videofile: "https://github.com/Senoquese/VTuberRacingSite/raw/refs/heads/main/streams/landingpage/chillaplushiespin.mp4",
		thumbnail: "https://raw.githubusercontent.com/Senoquese/VTuberRacingSite/refs/heads/main/streams/landingpage/chillaplushiespin.jpg",
		position: "bottom left",
		height: "100%",
		visible: true
	}
];

var trophies = [
	{	name: "Newborn Idol",
		unlocked: false,
		givesVideo: "Starting Soon - Debut"
	},{	name: "Plenty of Gas",
		unlocked: false,
		givesVideo: "Starting Soon - Garage"
	},{	name: "So Retro..",
		unlocked: false,
		givesVideo: "BRB - PS1"
	},{	name: "Idol Meeting",
		unlocked: false,
		givesVideo: "BRB - Pitcrew Race"
	},{	name: "What Happened to our Stash?",
		unlocked: false,
		givesVideo: "We Need Cash"
	}
];

if (window.shouldHideHeader) {
	$("#fullscreenOverlay").hide();
	$("#fullscreenOverlay").css('opacity','0');
	$("#fullscreenOverlay").css('position','fixed');
	$("#fullscreenOverlay").css('inset','0px');
	$("#fullscreenOverlay").css('z-index','199');
	$(".site-main")[0].appendChild($("#fullscreenOverlay")[0]);
	$("#fullscreenOverlay")[0].children[0].appendChild($("#trophiesOverlay")[0]);
}

function showTrophies() {
	$("#fullscreenOverlay").show();
	$("#fullscreenOverlay").stop( true, true );
	$("#fullscreenOverlay").css('top','0%');
	$("#fullscreenOverlay").animate({ opacity: "1", }, 300, function() {});
}

function hideTrophies() {
	$("#fullscreenOverlay").stop( true, true );
	$("#fullscreenOverlay").animate({ opacity: "0", }, 200, function() {
		$("#fullscreenOverlay").hide()
	});
}

$("#fullscreenOverlay").on( "click", function() {
	hideTrophies()
})

function updateTrophies() {
	var trophiesNewCookie = ""
	for (let i = 0; i < trophies.length; i++) {
		if (localStorage.getItem("trophies").charAt(i) == "1") {
			trophies[i].unlocked = true;
		}

		if (trophies[i].unlocked == true) {
			trophiesNewCookie = trophiesNewCookie + "1"
			var unlockedVideoIndex = landingVideos.findIndex((videoTable) => videoTable.name == trophies[i].givesVideo);
			landingVideos[unlockedVideoIndex].visible = true;
		} else {
			trophiesNewCookie = trophiesNewCookie + "0"
		}

		if (i == trophies.length-1) {
			localStorage.setItem("trophies", trophiesNewCookie)
		}
	}
	updateTrophiesMenu();
}

function updateTrophiesMenu() {
	if (window.shouldHideHeader) {
		var videosList = document.getElementById("trophiesUnlocked").children[0].children[0]

		videosList.children[0].children[0].children[0].children[0].src = landingVideos[0].thumbnail
		videosList.children[0].children[1].children[0].innerHTML = landingVideos[0].name
		videosList.children[0].onclick = function() {playVideo(0)}

		for (let i = videosList.children.length; i > 1; i--) {
			videosList.children[i-1].remove();
		}

		for (let i = 1; i < landingVideos.length; i++) {
			if (landingVideos[i].visible) {
				var newVideo = videosList.children[0].cloneNode(true);
				videosList.appendChild(newVideo);

				newVideo.children[0].children[0].children[0].src = landingVideos[i].thumbnail
				newVideo.children[1].children[0].innerHTML = landingVideos[i].name

				newVideo.onclick = function() {playVideo(i)}
			}
		}

		var trophiesList = $("#trophiesLocked")[0].children[0].children[0]
		if (trophiesList.children.length == 0) {
			$("#trophiesLockedDivider").remove()
		} 

		for (let i = trophiesList.children.length; i > 0; i--) {
			trophiesList.children[i-1].remove();
		}

		for (let i = 0; i < trophies.length; i++) {
			if (!trophies[i].unlocked) {
				var newTrophy = videosList.children[0].cloneNode(true);
				trophiesList.appendChild(newTrophy);
				newTrophy.children[0].children[0].children[0].src = "https://raw.githubusercontent.com/Senoquese/VTuberRacingSite/refs/heads/main/streams/landingpage/lock.jpg"
				newTrophy.children[1].children[0].innerHTML = trophies[i].name
			}
		}
	}
}

$(function() {
	$("#trophyNotificationImage img")[0].src = "https://raw.githubusercontent.com/Senoquese/VTuberRacingSite/refs/heads/main/streams/landingpage/AshtonSpinFast.gif"
	$("#trophyNotification").hide();
	$("#trophyNotification").css('opacity','0');
	$("#trophyNotification").css('pointer-events','none');
	$("#trophyNotification").css('position','fixed');
	$("#trophyNotification").css('inset','0px');
	$("#trophyNotification").css('z-index','199');
	$(".site-main")[0].appendChild($("#trophyNotification")[0]);
})

var timeTrophy;
function showTrophyNotif(name) {
	$("#trophyNotificationName")[0].innerHTML = name;
	$("#trophyNotification").show();
	$("#trophyNotification").stop( true, true );
	$("#trophyNotification").css('top','0%');
	$("#trophyNotification").animate({ opacity: "1", }, 300, function() {});
	clearTimeout(timeTrophy);
	timeTrophy = setTimeout(hideTrophyNotif, 6000)
}

function hideTrophyNotif() {
	$("#trophyNotification").stop( true, true );
	$("#trophyNotification").animate({ opacity: "0", }, 200, function() {
		$("#trophyNotification").hide()
	});
}

function giveTrophy(trophyNum) {
	if (!trophies[trophyNum].unlocked) {
		trophies[trophyNum].unlocked = true;
		updateTrophies();
		showTrophyNotif("<u>"+trophies[trophyNum].name+"<u>");
	}
}

function getVideoIndex(videoName) { return landingVideos.findIndex((videoTable) => videoTable.name == videoName)}

function getTrophyIndex(trophyName) { return trophies.findIndex((trophyTable) => trophyTable.name == trophyName)}

function playVideo(videoIndex, temp) {
	if (landingVideos[videoIndex].visible == false) {
		playVideo(getVideoIndex(defaultVideo), false);
		return;
	}

	if (window.shouldHideHeader) {
		var videoElement = $("#landingpage video").first()
		if (videoElement.attr("src") != landingVideos[videoIndex].videofile) {
			videoElement.attr("poster", landingVideos[videoIndex].thumbnail);
			videoElement.css("height", landingVideos[videoIndex].height);
			videoElement.css("object-position", landingVideos[videoIndex].position);
			videoElement.attr("src", landingVideos[videoIndex].videofile);
		}
	}
	if (!temp) {
		localStorage.setItem("equippedVideo", videoIndex)
	}
}

function togglePerformanceMode() {
	if (!localStorage.getItem("videoPerformanceMode") || localStorage.getItem("videoPerformanceMode") == 0) {
		localStorage.setItem("videoPerformanceMode",1)
	} else {
		localStorage.setItem("videoPerformanceMode",0)
	}
}

$(function(){
	if (!localStorage.getItem("trophies")) {
		var trophiesNewCookie = ""
		for (let i = 0; i < trophies.length; i++) {
			trophiesNewCookie = trophiesNewCookie + "0"
			if (i == trophies.length-1) {
				localStorage.setItem("trophies", trophiesNewCookie)
			}
		}
	} else {
		updateTrophies()
	}

	if (localStorage.getItem("videoPerformanceMode") == 1) {
		$("#landingpage").css("mask", "")
		$("#landingpage video").css("mask", "")
		$("#fullscreenOverlay").css("backdrop-filter","none")

		$("#fgimage").remove()
		$("#bgimage").remove()
		$("#flagvideonew").remove()
	}

	if (localStorage.getItem("ticketNutcrackerNumber") > 0) {
		landingVideos[getVideoIndex("Nutcracker")].visible = true
	}

	if (!localStorage.getItem("equippedVideo")) {
		localStorage.setItem("equippedVideo", getVideoIndex("Default"))
	} else {
		playVideo(localStorage.getItem("equippedVideo"), false);
	}

	updateTrophiesMenu();
})


// IDLE EASTER EGG
var time;
window.onload = resetTimer;
document.onload = resetTimer;
document.onmousemove = resetTimer;
document.onmousedown = resetTimer;
document.ontouchstart = resetTimer;
document.onclick = resetTimer;
document.onkeydown = resetTimer;
document.addEventListener('scroll', resetTimer, true);

function tryToIdle() {
	if (document.body.contains(document.getElementById("home-section")) && landingVideos[localStorage.getItem("equippedVideo")].name == defaultVideo) {
		giveTrophy(getTrophyIndex("Idol Meeting"))
		playVideo(getVideoIndex("BRB - Pitcrew Race"), true)
	}
}

function resetTimer() {
	if (document.body.contains(document.getElementById("home-section")) && landingVideos[localStorage.getItem("equippedVideo")].name == defaultVideo) {
		clearTimeout(time);
		time = setTimeout(tryToIdle, 40000)
	}
}
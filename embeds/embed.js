fetch("https://raw.githubusercontent.com/Senoquese/VTuberRacingSite/refs/heads/main/embeds/header.html")
	.then(response => response.text())
	.then(data => {
		$(header)[0].innerHTML = data
		var headerBar = $(header)
		headerBar.css("position", "fixed")
		headerBar.css("top", "0px")
		headerBar.css("height", "2.25rem")
		headerBar.css("width", "100%")
		headerBar.css("z-index", "100")

		$(function(){
			const gitscripts = document.createElement('script');
			fetch("https://raw.githubusercontent.com/Senoquese/VTuberRacingSite/refs/heads/main/embeds/scripts.js")
				.then(response => response.text())
				.then(data => gitscripts.innerHTML = data)
			document.body.appendChild(gitscripts);

			const trophiesscript = document.createElement('script');
			fetch("https://raw.githubusercontent.com/Senoquese/VTuberRacingSite/refs/heads/main/embeds/trophies.js")
				.then(response => response.text())
				.then(data => trophiesscript.innerHTML = data)
			document.body.appendChild(trophiesscript);
		})
	})

const overlays = document.createElement('div');
fetch("https://raw.githubusercontent.com/Senoquese/VTuberRacingSite/refs/heads/main/embeds/overlays.html")
	.then(response => response.text())
	.then(data => overlays.innerHTML = data)
$(main)[0].appendChild(overlays);

const gitstyle = document.createElement('gitstyle');
fetch("https://raw.githubusercontent.com/Senoquese/VTuberRacingSite/refs/heads/main/embeds/headerstyles.html")
	.then(response => response.text())
	.then(data => gitstyle.innerHTML = data)
document.head.appendChild(gitstyle);

const gitstyleoverlay = document.createElement('gitstyle');
fetch("https://raw.githubusercontent.com/Senoquese/VTuberRacingSite/refs/heads/main/embeds/overlaystyles.html")
	.then(response => response.text())
	.then(data => gitstyleoverlay.innerHTML = data)
	document.head.appendChild(gitstyleoverlay);
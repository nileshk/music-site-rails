function demoInstanceInfo(myPlayer, myInfo) {
	var jPlayerInfo = "<p>This jPlayer instance is running in your browser using ";

	if(myPlayer.jPlayer("getData", "usingFlash")) {
		jPlayerInfo += "<strong>Flash</strong> with ";
	} else {
		jPlayerInfo += "<strong>HTML5</strong> with ";
	}
	
	if(myPlayer.jPlayer("getData", "usingMP3")) {
		jPlayerInfo += "<strong>MP3</strong>";
	} else {
		jPlayerInfo += "<strong>OGG</strong>";
	}
	
	
	jPlayerInfo += " files.<br />This instance is using the constructor options:<br /><code>$(\"#" + myPlayer.jPlayer("getData", "id") + "\").jPlayer({<br />";
	
	jPlayerInfo += "&nbsp;&nbsp;&nbsp;nativeSupport: " + myPlayer.jPlayer("getData", "nativeSupport");
	jPlayerInfo += ", oggSupport: " + myPlayer.jPlayer("getData", "oggSupport");
	jPlayerInfo += ", customCssIds: " + myPlayer.jPlayer("getData", "customCssIds");
	
	jPlayerInfo += "<br />});</code></p>";
	myInfo.html(jPlayerInfo);
}

function demoStatusInfo(myPlayer, myInfo) {
	var jPlayerStatus = "<p>jPlayer is ";
	jPlayerStatus += (myPlayer.jPlayer("getData", "diag.isPlaying") ? "playing" : "stopped");
	jPlayerStatus += " at time: " + Math.floor(myPlayer.jPlayer("getData", "diag.playedTime")) + "ms.";
	jPlayerStatus += " (tt: " + Math.floor(myPlayer.jPlayer("getData", "diag.totalTime")) + "ms";
	jPlayerStatus += ", lp: " + Math.floor(myPlayer.jPlayer("getData", "diag.loadPercent")) + "%";
	jPlayerStatus += ", ppr: " + Math.floor(myPlayer.jPlayer("getData", "diag.playedPercentRelative")) + "%";
	jPlayerStatus += ", ppa: " + Math.floor(myPlayer.jPlayer("getData", "diag.playedPercentAbsolute")) + "%)</p>"
	myInfo.html(jPlayerStatus);
}

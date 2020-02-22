function searchVideo(videoId){	
	var flashvars = window.wrappedJSObject['flashvars_' + videoId];
	if(typeof flashvars !== 'undefined'){
		if(typeof flashvars.quality_1080p !== 'undefined'){
			return flashvars.quality_1080p;
		}else if(typeof flashvars.quality_720p !== 'undefined'){
			return flashvars.quality_720p;
		}else if(typeof flashvars.quality_480p !== 'undefined'){
			return flashvars.quality_480p;
		}else if(typeof flashvars.quality_240p !== 'undefined'){
			return flashvars.quality_240p;
		}
	}
	return false;
}


var flashvarsString;
var video = false;
var videoShow = window.wrappedJSObject['VIDEO_SHOW'];
if(typeof videoShow.playerId !== 'undefined'){
	flashvarsString = videoShow.playerId.replace('playerDiv_', '');
}
else if(typeof videoShow.trackVideoId !== 'undefined'){
	flashvarsString = videoShow.trackVideoId;
}
else{
	flashvarsString = false;
}
video = searchVideo(flashvarsString);
video;
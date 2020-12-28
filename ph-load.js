function searchVideo(videoId){	
	var flashvars = window.wrappedJSObject['flashvars_' + videoId];
	var video240 = false;
	var video480 = false;
	var video720 = false;
	var video1080 = false;

	if(typeof flashvars !== 'undefined'){
		if(typeof flashvars.mediaDefinitions !== 'undefined'){
			for(var i = 0, len = flashvars.mediaDefinitions.length; i < len; i++){
				var media = flashvars.mediaDefinitions[i];
				if(media.format == 'mp4'){
					if(media.quality == '240'){
						video240 = media.videoUrl;
					}else if(media.quality == '480'){
						video480 = media.videoUrl;
					}else if(media.quality == '720'){
						video720 = media.videoUrl;
					}else if(media.quality == '1080'){
						video1080 = media.videoUrl;
					}
				}
			}
			
			if(video1080 != false){
				return video1080;
			}else if(video720 != false){
				return video720;
			}else if(video480 != false){
				return video480;
			}else if(video240 != false){
				return video240;
			}
		}
	}
	return false;
}

var flashvarsString;
var video = false;
var player = document.getElementById('videoShow');

if(player !== null){
	var videoElements = player.getElementsByTagName('video-element');
	if(videoElements !== null){
		flashvarsString = videoElements[0].firstChild.id;
	}
}
if(typeof flashvarsString !== 'undefined'){
	flashvarsString = flashvarsString.replace('playerDiv_', '');
}
else{
	var videoShow = window.wrappedJSObject['VIDEO_SHOW'];
	if(typeof videoShow.video_id !== 'undefined'){
		flashvarsString = videoShow.video_id;
	}
	else{
		flashvarsString = false;
	}
}

video = searchVideo(flashvarsString);
video;
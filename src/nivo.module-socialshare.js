(function(){ "use strict";
	var SocialShare = (function($, undefined){

		var FACEBOOK_APP_ID = 259147337587901;

		function shareOnFacebook(url, headline, caption, description, picture){
			var uri = "https://www.facebook.com/dialog/feed?app_id=" + FACEBOOK_APP_ID + "&link=";
			uri += url;
			uri += '&display=popup&name=';
			uri += encodeURI(headline);
			uri += '&caption=';
			uri += encodeURI(caption);
			uri += '&description=';
			uri += encodeURI(description);
			uri += '&picture=';
			uri += encodeURI(picture);
			uri += '&ref=share&';
			uri += 'redirect_uri=http%3A//lehrlinge-fuer-bayern.de/facebook_redirect';

			_openPopup( uri, headline, 650, 340);
		}

		function shareOnTwitter( url, description ){
			var uri = "https://twitter.com/intent/tweet?url=";
			uri += encodeURI(url);
			uri += "&text=";
			uri += encodeURI(description);

			_openPopup( uri, 'auf Twitter teilen', 570, 260);
		}

		function shareOnGooglePlus(url){
			var uri = "https://plus.google.com/u/0/share?url=";
			uri += encodeURI(url);
			uri += "&hl=de";

			_openPopup( uri, 'auf Google+ teilen', 520, 565);
		}

		function shareOnPinterest(url, description, picture, isVideo){
			var uri = 'https://www.pinterest.com/join/?next=/pin/create/button/?url='; // %3Furl%3Dhttps%253A//www.youtube.com/attribution_link%253Fa%253D1wic8WJ3oKg%2526u%253D%25252Fwatch%25253Fv%25253DprbosWxkBtg%252526feature%25253Dshare%26description%3D5%2520Coolest%2520Inventions%2520For%2520Gamers%26is_video%3Dtrue%26media%3Dhttps%253A//i.ytimg.com/vi/prbosWxkBtg/hqdefault.jpg
			uri += encodeURI(url);
			uri += "&feature=share";
			uri += "&is_video=" + isVideo ? 'true' : 'false';
			uri += "&description=" + encodeURI(description);
			uri += "&media=" + media;

			_openPopup(uri, 'Auf Pinterest teilen', 750, 550);
		}

		function _openPopup(url, title, w, h, top, left) {
			// Fixes dual-screen position
			var dualScreenLeft = window.screenLeft !== undefined ? window.screenLeft : screen.left;
			var dualScreenTop = window.screenTop !== undefined ? window.screenTop : screen.top;

			var width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
			var height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;

			left = left ? left : ((width / 2) - (w / 2)) + dualScreenLeft;
			top = top ? top : ((height / 2) - (h / 2)) + dualScreenTop;
			var newWindow = window.open(url, '', 'scrollbars=yes, width=' + w + ', height=' + h + ', top=' + top + ', left=' + left);

			if (window.focus) {
				newWindow.focus();
			}
		}

		return {
			shareOnFacebook:    shareOnFacebook,
			shareOnTwitter:     shareOnTwitter,
			shareOnGooglePlus:  shareOnGooglePlus,
			shareOnPinterest:   shareOnPinterest
		};
	}());

	window.nivo = window.nivo || {};
	window.nivo.SocialShare = SocialShare;
}());
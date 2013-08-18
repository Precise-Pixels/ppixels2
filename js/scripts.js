// Font face feature detection
var isFontFaceSupported=function(){if(navigator.userAgent.match(/(Android (2.0|2.1))|Nokia/))return!1;var a,b=document,c=b.head||b.getElementsByTagName("head")[0]||docElement,d=b.createElement("style"),e=b.implementation||{hasFeature:function(){return!1}};d.type="text/css",c.insertBefore(d,c.firstChild),a=d.sheet||d.styleSheet;var f=e.hasFeature("CSS2","")?function(b){if(!a||!b)return!1;var c=!1;try{a.insertRule(b,0),c=!/unknown/i.test(a.cssRules[0].cssText),a.deleteRule(a.cssRules.length-1)}catch(d){}return c}:function(b){return a&&b?(a.cssText=b,0!==a.cssText.length&&!/unknown/i.test(a.cssText)&&0===a.cssText.replace(/\r+|\n+/g,"").indexOf(b.split(" ")[0])):!1};return f('@font-face { font-family: "font"; src: "font.ttf"; }')}();if(isFontFaceSupported){document.getElementsByTagName('html')[0].className+='ff';}

// Google Anaytics
var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-26844628-1']);
_gaq.push(['_trackPageview']);
(function() {
	var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
	ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
	var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();
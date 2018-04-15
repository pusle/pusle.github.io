/*
var header = document.getElementById("site-header");
var content = document.getElementById("site-content");

var divOffset = offset(content);


window.onscroll = function(e) {
	console.log(divOffset.left, divOffset.top);
}


function offset(el) {
    var rect = el.getBoundingClientRect(),
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
}
*/

document.onreadystatechange = function(){
    if (document.readyState === "complete") {
       showLogo();
    }
    else {
       window.onload = function () {
          showLogo();
       };
    }
};

function showLogo() {
	setTimeout(function(){
		let header = document.getElementById("about-header");
		header.className += " " + "show";
	},2000);
}

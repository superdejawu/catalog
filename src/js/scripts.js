
//var init
var body = document.body,
	header = body.getElementsByTagName("header")[0],
	video = body.getElementsByTagName("video")[0],
	sidebar = body.getElementsByClassName("sidebar")[0],
	buttonCatalog = body.getElementsByClassName("button-catalog")[0];

var category1 = document.getElementById("category1");

//Event Listeners init
body.onscroll = function(){scrollActions()};
buttonCatalog.onclick = function(){buttonCatalogActions()};

//SCROLL MAGIC init
	// init Scroll Magic controller
	var controller = new ScrollMagic.Controller();

	//init Scroll Magic scene 
	var scene = new ScrollMagic.Scene({ duration: videoHeight()
		})
		.setTween(".button-catalog>svg", {fill: "blue", rotation: 180, transformOrigin:"50% 50%"})
		// .addIndicators({name: "1 (duration: 0)"}) // add indicators (requires plugin)
		.addTo(controller);
	var scene = new ScrollMagic.Scene({offset:videoHeight()})
		.setPin(".sidebar")
		// .addIndicators({name: "1 (duration: 0)"}) // add indicators (requires plugin)
		.addTo(controller);



//FIRST ORDER FUNCTIONS
function scrollActions(){
	videoBlur(percentScrolled());	
	sidebarHighlighting(scrolled(), videoHeight());
}

function buttonCatalogActions(){
	var toggle = false;
	if (scrolled()< windowHeight()){
		TweenLite.to(window, .5, {scrollTo:{y:windowHeight()}, ease:Power1.easeInOut});

	}
	else{
		TweenLite.to(window, .5, {scrollTo:{y:0}, ease:Power1.easeInOut});

	}

}


function videoBlur(percentageScrolled){
	video.style.webkitFilter = "blur(" + percentageScrolled/2 + "px)";
}

function sidebarHighlighting(scrolled, videoHeight){

	if (scrolled > videoHeight){
		sidebar.style.fontWeight="bold";
	}
	else {
		sidebar.style.fontWeight="normal";
	};
}

//HELPER FUNCTIONS
function windowHeight(){
	return window.innerHeight
}
function videoHeight(){

	return parseInt(window.getComputedStyle(video).getPropertyValue('height'),10)
}

function scrollHeight(){
	return body.scrollHeight;
}

function scrolled(){
	return body.scrollTop;
}
	function amountScrolled(){
		return scrolled()/windowHeight();
	}
	function percentScrolled(){

		return scrolled()/windowHeight()*100;
	}

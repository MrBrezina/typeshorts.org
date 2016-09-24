var mygallery=new fadeSlideShow({
	wrapperid: "slideshow", //ID of blank DIV on page to house Slideshow
	dimensions: [735, 256], //width/height of gallery in pixels. Should reflect dimensions of largest image
	imagearray: [
		["/img/show_1.jpg", "", "", ""],
		["/img/show_2.jpg", "", "", ""],
		["/img/show_3.jpg", "", "", ""],
		["/img/show_4.jpg", "", "", ""] //<--no trailing comma after very last image element!
	],
	displaymode: {type:'auto', pause:2500, cycles:0, wraparound:true},
	persist: true, //remember last viewed slide and recall within same session?
	fadeduration: 1000, //transition duration (milliseconds)
	descreveal: "ondemand",
	togglerid: ""
})
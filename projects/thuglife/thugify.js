// create a wrapper around native canvas element (with id="c")
var canvas = new fabric.Canvas('mainCanvas');
var mainPhoto = undefined
var greyScale_active = false


$(document).ready(function(){
	$('[data-toggle="tooltip"]').tooltip();
})



function downloadCanvas(link, canvasId, filename) {
	link.href = document.getElementById(canvasId).toDataURL('image/jpeg', 0.7);
	link.download = filename;
}



document.getElementById('downloadImage').addEventListener('click', function() {

	// DO NOT DOWNLOAD EDITOR SELECTION BORDER
	canvas.deactivateAll().renderAll();

	downloadCanvas(this, 'mainCanvas', getImageName());
}, false);


console.log('wtf')

$('#button_accept_url_image').click(function() {
    console.log('bam bam')
    let element = document.querySelector('#url_image')
    let url = element.value


    fabric.Image.fromURL(url, function(oImg) {
			var l = Math.random()*10
			var t = Math.random()*10;
			oImg.scale(0.3);
			oImg.set({'left':l});
			oImg.set({'top':t});
			oImg.set("cornerColor", "#FFF300")
			canvas.add(oImg);
	});
})


$('.ref').click(function() {
	let source = $(this).attr("src")
	source = source.split('/')[1]
	fabric.Image.fromURL('./images/' + source, function(oImg) {
			var l = Math.random()*10
			var t = Math.random()*10;
			oImg.scale(0.3);
			oImg.set({'left':l});
			oImg.set({'top':t});
			oImg.set("cornerColor", "#FFF300")
			canvas.add(oImg);
	});
})




// SHOW IMAGE ON NEW BLANK TAB IF POSSIBLE
$('#showImage').click(function (e) {

	// DESELECT ALL -> we dont want rendered editor selection border
	canvas.deactivateAll().renderAll();

	window.open(
		document.getElementsByTagName('canvas')[0].toDataURL("image/jpeg", 0.7),
		 '_blank'
	 );
})



// SET PHOTO TO GREYSCALE (THUGLIFE STYLE)
$('#greyScale').click(function() {
	let objects = canvas.getObjects()
	let greyFilter = new fabric.Image.filters.Grayscale()

	objects.forEach(function(element){
		if (greyScale_active)
			element.filters = []
		else
			element.filters.push(greyFilter)

		element.applyFilters(canvas.renderAll.bind(canvas));
	})

	greyScale_active = !greyScale_active
})



function enableOptions() {
	$('#options').delay(400).show(400)
}




function getImageName() {
	let name = "picture_"

	// if browser doesnt support localstorage
	if (typeof localStorage === 'undefined')
		return name + (Date.now()/1000) + '.jpg'

	let count = localStorage.getItem("counter")

	if (localStorage.getItem("counter") == null)
		localStorage.setItem("counter", 0)

	localStorage.setItem("counter", parseInt(localStorage.getItem("counter")) + 1)
	return name + count + '.jpg'
}




function fileOnload(e) {
	$img = $('<img>', { src: e.target.result });

	// When image loaded
	$img.load(function(e) {
		$img_width = $img[0].width;
		$img_height = $img[0].height;

		// if height more than 600px, change ratio = height to 600px and width auto
		if( this.naturalWidth > 600 ) {
			$crop_ratio = 600 / this.naturalWidth
			$img_height = this.naturalHeight * $crop_ratio
			$img_width  = this.naturalWidth * $crop_ratio
		}

		// if height more than 600px, change ratio = height to 600px and width auto
		if( this.naturalHeight > 600 ) {
			$crop_ratio = 600 / this.naturalHeight
			$img_height = this.naturalHeight * $crop_ratio
			$img_width  = this.naturalWidth * $crop_ratio
		}

		console.log(e)
		canvas.setHeight($img_height)
		canvas.setWidth($img_width)

		let props = {
			"width": $img_width,
			"height": $img_height,
			"selectable": false,
			"hoverCursor": "arrow",
			"cornerColor" : "#FFF300"
		}

		mainPhoto = new fabric.Image(this, props)
		canvas.add(mainPhoto)

		// enable options under canvas (buttons)
		enableOptions()

		// change size of title, more vertical space
		$('#mainTitle').hide(400)
	})
}


/*
this function is event listener on change input of imageType
IMage is loaded into canvas (fabric)
*/
$('#chooseImage').change(function (e) {
	var file = e.target.files[0],
	imageType = /image.*/;

	if (!file.type.match(imageType))
		return;

	var reader = new FileReader();
	reader.onload = fileOnload;
	reader.readAsDataURL(file);
});




function loadImage(){
	console.log("loading image")
}

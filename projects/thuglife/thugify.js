// create a wrapper around native canvas element (with id="c")
var canvas = new fabric.Canvas('mainCanvas');
var mainPhoto = undefined
var greyScale_active = false


class Publisher {
    constructor() {
        this.fns = []
    }

    subscribe(fn) {
        if (typeof fn !== 'function')
            throw 'Type Error'
        this.fns.push(fn)
    }

    emit(e) {
        let self = this
        console.log(this)
        this.fns.forEach(function(f) {
            f(e)
        })
    }
}



$(document).ready(function(){
	$('[data-toggle="tooltip"]').tooltip();
})



const publisher = new Publisher()


const fnBeforeImgLoad = function () {
    $img = $('<img>', { src: url_image.value });

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

        button_accept_url_image.eventToOccur = fnAfterImgLoad

        // change size of title, more vertical space
        $('#mainTitle').hide(400)
    })
}


const fnAfterImgLoad = function () {
    let element = document.querySelector('#url_image')
    let url = element.value

    fabric.Image.fromURL(url, function(oImg) {
			var l = Math.random() * 10
			var t = Math.random() * 10;
			oImg.scale(0.3);
			oImg.set({'left':l});
			oImg.set({'top':t});
			oImg.set("cornerColor", "#FFF300")
			canvas.add(oImg);
	});
}


// set default event to occur if button is clicked
button_accept_url_image.eventToOccur = fnBeforeImgLoad


$('#button_accept_url_image').click(function() {
    this.eventToOccur()
})



$('.ref').click(function() {
	let source = $(this).attr("src")
	source = source.split('/')
    source = source[source.length - 1]
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

		let mainPhoto = new fabric.Image(this, props)
		canvas.add(mainPhoto)

		// enable options under canvas (buttons)
		enableOptions()

        //
        button_accept_url_image.eventToOccur = fnAfterImgLoad

		// change size of title, more vertical space
		$('#mainTitle').hide(400)
	})
}

publisher.subscribe(fileOnload)



/*
this function is event listener on change input of imageType
IMage is loaded into canvas (fabric)
*/
$('#chooseImage').change(function (e) {
	let file = e.target.files[0],
	imageType = /image.*/;

	if (!file.type.match(imageType))
		return;

	var reader = new FileReader();
	reader.onload = publisher.emit.bind(publisher);
	reader.readAsDataURL(file);
});




document.getElementById('downloadImage').addEventListener('click', function() {

	// DO NOT DOWNLOAD EDITOR SELECTION BORDER
	canvas.deactivateAll().renderAll();

	downloadCanvas(this, 'mainCanvas', getImageName());
}, false);



function downloadCanvas(link, canvasId, filename) {
	link.href = document.getElementById(canvasId).toDataURL('image/jpeg', 0.7);
	link.download = filename;
}



const clipBoard = new ClipBoard(function (img) {
    canvas.add(new fabric.Image(img))
})

/******************************************************************************/

// var CLIPBOARD = new ClipBoard("my_canvas", true);

/**
 * image pasting into canvas
 *
 * @param {string} canvas_id - canvas id
 * @param {boolean} autoresize - if canvas will be resized
 */
const ClipBoard = function(callback) {

    var _self = this;
	// var canvas = document.getElementById(canvas_id);
	// var ctx = document.getElementById(canvas_id).getContext("2d");

	//handlers
	document.querySelector('body').addEventListener('paste', function (e) {
        console.log('pasted')
         _self.paste_auto(e);
     }, true);
    _self.callback = callback

	//on paste
	this.paste_auto = function (e) {
		if (e.clipboardData) {
			var items = e.clipboardData.items;
			if (!items) return;

			//access data directly
			for (var i = 0; i < items.length; i++) {
				if (items[i].type.indexOf("image") !== -1) {
					//image
					var blob = items[i].getAsFile();
					var URLObj = window.URL || window.webkitURL;
					var source = URLObj.createObjectURL(blob);
					this.paste_createImage(source);
				}
			}
			// e.preventDefault();
		}
	};
	//draw pasted image to canvas
	this.paste_createImage = function (source) {
		var pastedImage = new Image();
		pastedImage.onload = function () {
			// if(autoresize == true){
			// 	//resize
			// 	canvas.width = pastedImage.width;
			// 	canvas.height = pastedImage.height;
			// }
			// else{
			// 	//clear canvas
			// 	ctx.clearRect(0, 0, canvas.width, canvas.height);
			// }
			// ctx.drawImage(pastedImage, 0, 0);
			_self.callback(pastedImage)
		};
		pastedImage.src = source;
	};
}

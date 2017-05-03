var ID = 0;
var MAN_TOTAL = 0
var WOMAN_TOTAL = 0
var LIST = []

document.addEventListener("DOMContentLoaded", function() {
  	console.log(document.querySelector('body'))

  	var w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
	var h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
	let squares = document.querySelectorAll('.square')

	if (w/h > 1) {
		let ratio = h/w
		w *= ratio
		h *=  ratio
		for (let i = 0; i < squares.length; i++) {
			squares[i].style.width = (w/2 - 20) + 'px' 
			squares[i].style.height = (w/2 - 20) + 'px' 
		}
	}
	else {
		
		for (let i = 0; i < squares.length; i++) {
			squares[i].style.width = (w/2 - 20) + 'px' 
			squares[i].style.height = (w/2 - 20) + 'px' 
		}
	}



	for (let i = 0; i < squares.length; i++) {
		squares[i].addEventListener("click", function() {
			let sex = this.getAttribute('sex')
			let time = new Date()
			let action = this.getAttribute('action')
			

			if (action == "open" && sex == "man") MAN_TOTAL++;
			if (action == "close" && sex == "man") MAN_TOTAL--;
			if (action == "open" && sex == "woman") WOMAN_TOTAL++;
			if (action == "open" && sex == "man") WOMAN_TOTAL--;


			LIST.push({
				"id": ID,
				"sex": sex,
				"action": action,
				"date": time
			})

			let new_element = document.createElement('div')
			new_element.className += "row"
			new_element.innerHTML = `
				<p>
					<span class="id">${++ID}</span>
					<span class="sex">${sex}</span>
					<span class="action">${action}</span>
					<span class="date">${time}</span>
				</p>
			`
			// parentNode.insertBefore(newChild, refChild)
			let mainTable = document.querySelector('.mainTable')
			mainTable.insertBefore(new_element, mainTable.children[0])
		})
	}


});


document.querySelector('.email').addEventListener("click", function () {
	window.open(`mailto:martin.schnurer@gmail.com?subject=data_from_jedalen&body=${JSON.stringify(LIST)}`);
})





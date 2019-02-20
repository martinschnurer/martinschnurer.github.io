
	+function(){
		$.ajax({
			'url' : '/panels/main',
			'type' : 'get',
			'dataType' : 'html'
		}).done(function(data) {

			let panel_container = $('#main')
			loadPosts(panel_container, function () {

				// // save somewhere to cache
				document.panels = document.panels || {};
				document.panels['main'] = $(panel_container).children()
			});

		})
	}()


	$('#main-photo img').hover(
		function() {
			$('#my_name').stop().animate({"font-size": "28px"}, 200)
		},
		function () {
			$('#my_name').stop().animate({"font-size": "24px"}, 200)
		}
	);


	function menuAnimation(obj) {
		$('.menu-item.active-item').removeClass('active-item')
		$(obj).addClass('active-item')
	}

	function swapPanels(new_panel) {
		$('#panel-container').empty()
		$('#panel-container').append(new_panel)
	}


	function switchPanel(obj) {
		let target_panel = $(obj).attr('target');

		if (document.panels && document.panels[target_panel]) {
			// swapPanels(window.panels[target_panel])
			$('#main, #projects, #photogallery').hide()
			$(`#${target_panel}`).show()
		} else {
			$.ajax({
				'url' : `/panels/${target_panel}`,
				'type' : 'get',
				'dataType' : 'html',
				'error' : function(e) {
					console.log(`${target_panel} not found, check in directory 'panels' if ${target_panel} is there`)
				}
			}).done(function(data) {
				document.panels[target_panel] = data;
				$(`#${target_panel}`).append(data)
				$(`#${target_panel}`).attr("loaded_before","true")
 				$('#main, #projects, #photogallery').hide()
				$(`#${target_panel}`).show()
			})
		}
	}


	$('.menu-item').click(function() {

		if ($(this).hasClass('active-item'))
			return;

		// animate when clicked
		menuAnimation(this)

		// switch Panel - get rid of old panel and set new panel to viewport
		switchPanel(this)
	})

	$('[data-target]').click(function () {
		let id = $(this).attr('data-target')
		let enabled = $(this).attr('enabled')

		$(`#${id}`).stop(true, true).fadeToggle(200)
	})

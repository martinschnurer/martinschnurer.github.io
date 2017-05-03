
function loadPosts(container, callback) {

	if (!container.length) {
		console.warn("Bad argument")
		return;
	}

	var title;
	var content;

	$.ajax({
		"url" : '../posts/list.json',
		"type" : "get",
		"dataType" : "json"
	}).done(function (data) {
		let count = data.count
		let posts = data.posts

		for (let i = 0; i < posts.length; i++) {

			if (posts[i].source.indexOf("http://") > -1 || posts[i].source.indexOf("https://") > -1)
			{
				// ITS VIDEO !!!!
				if (posts[i].source.indexOf("youtube") > -1)
				{
					title = posts[i].title || "Video"
					content = `
					<object data="${posts[i].source}">
					</object>
					`
				}
				// ITS PICTURE !!!
				else {
					title = posts[i].title || "Príspevok";
					content = `<img class="post-img" src="${posts[i].source}">`
				}

				let html = `<div class="row">
								<div class="post col-md-12 col-sm-12 col-xs-12">
									<div class="title col-md-12 col-sm-12 col-xs-12">
										<h2>${title}</h2>
									</div>
									<div class="post-content col-md-12 col-sm-12 col-xs-12">
										${content}
									</div>
								</div>
							</div>`

				$(container).append($.parseHTML(html))
			}

			// "THIS WILL BE file name of MY POSTS"
			else {

				title = posts[i].title || "Príspevok";

				$.ajax({
					"type" : "get",
					"url" : `/posts/${posts[i].source}`,
					"dataType" : "html"
				}).done(function (data) {

					content = data

					let html = `<div class="row">
									<div class="post col-md-12 col-sm-12 col-xs-12">
										<div class="title col-md-12 col-sm-12 col-xs-12">
											<h2>${title}</h2>
										</div>
										<div class="post-content col-md-12 col-sm-12 col-xs-12">
											${content}
										</div>
									</div>
								</div>`

					window.panels['main']
					$(container).append($.parseHTML(html))
				})

			}
		}

		callback()

	})
}

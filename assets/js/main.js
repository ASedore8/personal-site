;(function ($) {
	var $window = $(window),
		$body = $("body")

	// Breakpoints.
	breakpoints({
		wide: ["1281px", "1680px"],
		normal: ["1001px", "1280px"],
		narrow: ["737px", "1000px"],
		mobile: [null, "736px"],
	})

	// Play initial animations on page load.
	$window.on("load", function () {
		window.setTimeout(function () {
			$body.removeClass("is-preload")
		}, 100)
	})

	// Scrolly.
	$(".scrolly").scrolly()
})(jQuery)

let codeSnip = document.getElementById("popup")
var card = document.getElementsByClassName("card")
var code = document.getElementById("code")
var activeCode

for (var i = 0; i < card.length; i++) {
	card[i].addEventListener("click", function () {
		switch (this.id) {
			case "card-one":
				source = "./images/codeScreenshot.png"
				break
			case "card-two":
				source = "./images/sitecode.png"
				break
		}

		if (activeCode != source) {
			activeCode = source
			code.src = activeCode

			if (codeSnip.className === "closed") {
				codeSnip.className = "opened"
				codeSnip.style.height = "250px"
			} else if (codeSnip.className === "opened") {
				codeSnip.style.visibility = "hidden"
				codeSnip.style.height = "1px"
				codeSnip.style.opacity = "0"
				setTimeout(() => {
					codeSnip.style.height = "250px"
					codeSnip.style.opacity = "1"
					codeSnip.style.visibility = "visible"
				}, 600)
			}
		}
	})
}

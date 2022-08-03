let triangleBtn = document.querySelector(".first-btn");
let pyramidBtn = document.querySelector(".second-btn");
let reversePyramidBtn = document.querySelector(".third-btn");
let clearBtn = document.querySelector(".fourth-btn");
const output = document.getElementById("output");

triangleBtn.addEventListener("click", function () {
	let n = 6;
	let triangle = "";
	for (let i = 1; i <= n; i++) {
		for (let j = 0; j < i; j++) {
			triangle += "*";
		}
		triangle += "<br/>";
	}
	console.log(triangle);
	output.innerHTML = triangle;
});

pyramidBtn.addEventListener("click", function () {
	let n = 6;
	let pyramid = "<center>";
	for (let i = 1; i <= n; i++) {
		for (let k = 0; k <= 1 * i - 1; k++) {
			pyramid += "*";
		}
		pyramid += "<br/>";
	}
	pyramid += "</center>";
	console.log(pyramid);
	output.innerHTML = pyramid;
});

reversePyramidBtn.addEventListener("click", function () {
	let n = 6;
	let revPyramid = "<center>";

	for (let i = 0; i < n; i++) {
		for (let k = 0; k <= 1 * (n - i) - 1; k++) {
			revPyramid += "*";
		}
		revPyramid += "<br/>";
	}
	revPyramid += "</center>";
	console.log(revPyramid);
	output.innerHTML = revPyramid;
});

clearBtn.addEventListener("click", function () {
	clearContent = "";
	console.log(clearContent + "Clearing our output");
	output.innerHTML = clearContent;
});

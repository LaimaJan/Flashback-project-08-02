let triangleBtn = document.querySelector(".first-btn");
let pyramidBtn = document.querySelector(".second-btn");
let reversePyramidBtn = document.querySelector(".third-btn");
let rhombus = document.querySelector(".fourth-btn");
let clearBtn = document.querySelector(".fifth-btn");
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
	let pyramid = "";
	for (let i = 0; i <= n; i++) {
		for (let j = 1; j <= n - i; j++) {
			pyramid += "&nbsp";
		}
		for (let k = 0; k <= 1 * i - 1; k++) {
			pyramid += "* ";
		}
		pyramid += "<br/>";
	}
	// pyramid += "&nbsp";
	console.log(pyramid);
	output.innerHTML = pyramid;
});

reversePyramidBtn.addEventListener("click", function () {
	let n = 6;
	let revPyramid = "";

	for (let i = 0; i < n; i++) {
		for (let j = 0; j < i; j++) {
			revPyramid += "&nbsp";
		}
		for (let k = 0; k <= 1 * (n - i) - 1; k++) {
			revPyramid += "* ";
		}
		revPyramid += "<br/>";
	}
	console.log(revPyramid);
	output.innerHTML = revPyramid;
});

clearBtn.addEventListener("click", function () {
	clearContent = "";
	console.log(clearContent + "Clearing our output");
	output.innerHTML = clearContent;
});

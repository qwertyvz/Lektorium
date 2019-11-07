const input = document.getElementById("input");
const result = document.getElementById("result");

function debounce(func, wait, immediate) {
	var timeout;
	return function() {
		let context = this, args = arguments;
		let later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		let callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};

function searchArrEl(arr, search) {
  arr.find((item, index) => {if (item === +search) console.log(item + " | index: " + index)});
}


let arr = [1,2,3,4,5];
let myEfficientFn = debounce(function() {
	searchArrEl(arr, input.value);
}, 1000);

window.addEventListener("keypress", myEfficientFn);

//let arr = [-1,-8,-2];
//let arr = [3,0,-5,1,44,-12,3,0,0,1,2,-3,-3,2,1,4,-2-3-1];
//let arr = [1,7,3];
//let arr = [1,undefined,3,5,-3];
//let arr = [undefined,1,3,5,-3];
//let arr = [undefined,NaN,1,3,5,-3];
//let arr = [1,NaN,3,5,-3];
//let arr = [NaN,undefined,1,3,5,{a: 1, b: 2}, "fdffsf"];

console.log("Arr: " + arr);
console.log("Sum: " + arrSum(arr));
console.log("Min: " + arrMin(arr));
console.log("Max: " + arrMax(arr));

function parseArr(arr) {
	let onlyNumArr = [];
	for( i = 0; i < arr.length; i++) {
		if ((typeof(arr[i]) === "number") && (!Number.isNaN(arr[i])))
        onlyNumArr.push(arr[i]);
	}
	return onlyNumArr;
}
	

function arrSum(arr) {
  let sum = 0;
  let newArr = parseArr(arr);
  for( i = 0; i < newArr.length; i++) {    
        sum += newArr[i];
  }
  return sum;
}

function arrMin(arr) {  
  let min = 0;
  let newArr = parseArr(arr);
  min = newArr[0];
  for( i = 0; i < newArr.length; i++) {
    if (newArr[i] < min) {
       min = newArr[i]
    }   
  }
  return min;
}

function arrMax(arr) {
  let max = 0;
  let newArr = parseArr(arr);
  max = newArr[0];
  for( i = 0; i < newArr.length; i++) {
    if (newArr[i] > max) {
      max = newArr[i]
    }    
  }
  return max;
}

//let arr = [-1,-8,-2];
//let arr = [3,0,-5,1,44,-12,3,0,0,1,2,-3,-3,2,1,4,-2-3-1];
//let arr = [1,7,3];
//let arr = [1,undefined,3,5,-3];
//let arr = [undefined,1,3,5,-3];
//let arr = [undefined,NaN,1,3,5,-3];
//let arr = [1,NaN,3,5,-3];
let arr = [NaN,undefined,1,3,5,{a: 1, b: 2}, "fdffsf"];

console.log("Arr: " + arr);
console.log(objReturn(arr));

function arrFilter(arr) {
  return arr.filter(item => typeof(item) === "number" && !isNaN(item));
}

function arrMin(arr) {
  return arrFilter(arr).reduce((min, current) => {return (min < current ? min : current)});
}

function arrMax(arr) {
  return arrFilter(arr).reduce((max, current) => {return (max > current ? max : current)});
}

function arrSum(arr) {
  return arrFilter(arr).reduce((sum, current) => sum + current, 0);
}

function objReturn(arr) {
  let arrObj = {
    sum: arrSum(arr),
    min: arrMin(arr),
    max: arrMax(arr),
    newArr: []
  },
  minIndex = 0,
  maxIndex = 0;

  minIndex = arr.indexOf(arrObj.min);
  maxIndex = arr.indexOf(arrObj.max);
  arr.splice(minIndex,1,arrObj.max);
  arr.splice(maxIndex,1,arrObj.min);
  arrObj.newArr = arr;

  return arrObj;
}

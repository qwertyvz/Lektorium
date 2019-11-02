Array.prototype.myForEach = function(fn) {
  for (let i = 0; i < this.length; i++) {
    fn(this[i], i, this);
  }
}

Array.prototype.myMap = function (fn) {
  let newArr = [];
  for (let i = 0; i < this.length; i++) {
    newArr.push(fn(this[i] , i, this));
  }
  return newArr;
}

//?????????
Array.prototype.mySort = function (fn) {

  let quickSort = function(arr) {
    if (arr.length < 2) return arr;

    const pivot = arr[Math.floor(Math.random() * arr.length)];

    let left = [];
    let equal = [];
    let right = [];

    for (let element of arr) {
      fn(element, pivot);
      if (element > pivot) right.push(element);
      else if (element < pivot) left.push(element);
      else equal.push(element);
    }

    return quickSort(left)
      .concat(equal)
      .concat(quickSort(right));
  }
  return quickSort(this);
}

let arr3 = [2,5,3,6,1,4];
console.log(arr3.mySort((a,b)=>console.log(a + " <> " + b)));

//myForEach
let arr = [1,2,3,4,5];
let sum = 0;
arr.myForEach(cur => {sum+=cur});
console.log(sum);

//myMap
let lengths = ["Bilbo", "Gandalf", "Nazgul"].myMap(item => item.length);
console.log(lengths); // 5,7,6

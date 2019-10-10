function arrSum(arr) {
  let sum = 0;
  for( i = 0; i < arr.length; i++) {
    if ((typeof(arr[i]) !== "undefined") && (!Number.isNaN(arr[i])))
        sum += +arr[i];
  }
  return sum;
}

function arrMin(arr) {
  let i = 0;
  let min = 0;
  while ((typeof arr[i] === "undefined") || (Number.isNaN(arr[i]))) {
    i++;
  }
  min = arr[i];
  for( i = 0; i < arr.length; i++) {
    if ((typeof arr[i] !== "undefined") && (!Number.isNaN(arr[i]))) {
      if (arr[i] < min) {
        min = arr[i]
      }
    }
  }
  return min;
}

function arrMax(arr) {
  let i = 0;
  let max = 0;
  while ((typeof arr[i] === "undefined") || (Number.isNaN(arr[i]))) {
    i++;
  }
  max = arr[i];
  for( i = 0; i < arr.length; i++) {
    if ((typeof arr[i] !== "undefined") && (!Number.isNaN(arr[i]))) {
      if (arr[i] > max) {
        max = arr[i]
      }
    }
  }
  return max;
}

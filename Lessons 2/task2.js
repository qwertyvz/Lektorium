//let arr =  [2, 5, 1, 3, 1, 2, 1, 7, 7, 6]; // 17
//let arr =  [2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 0]; // 10
//let arr =  [7, 0, 1, 3, 4, 1, 2, 1] // 9
let arr =  [2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 0] // 10
//let arr =  [2, 2, 1, 2, 2, 3, 0, 1, 2] // 4
//let arr =  [2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 8] // 24
//let arr =  [2, 2, 2, 2, 2] // 0

console.log("Arr: " + arr);
console.log(countWaterVolume(arr));

function countWaterVolume(arr) {
    let vol1 = 0,
        vol2 = 0,
        totalVolume = 0,
        maxLeft = 0,
        maxRight = 0;

    let max = arr.reduce((max, current) => {return (max > current ? max : current)});
    let indexMax = arr.indexOf(max);
    let arr1 = arr.slice(0, indexMax);
    let arr2 = arr.slice(indexMax+1, arr.length);

    if (arr1.length > 0) {
      vol1 =  arr1.reduce((vol, item) =>
        {
          if (item > maxLeft) maxLeft = item;
          if (item <= maxLeft) {
            vol += maxLeft - item;
          }
          return vol
        }, 0
      );
    }

    if (arr2.length > 0) {
      vol2 = arr2.reduceRight((vol, item) =>
        {
          if (item > maxRight) maxRight = item;
          if (item <= maxRight) {
            vol += maxRight - item;
          }
          return vol;
        }, 0
      );
    }

  totalVolume = vol1 + vol2;
  console.log("Volume: " + totalVolume);


}

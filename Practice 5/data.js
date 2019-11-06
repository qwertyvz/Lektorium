function randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

function fillDataArray(lengh) {
  let dataArr = [],
      randomData;

  for (let i = 0; i < lengh; i++) {
    randomData = randomDate(new Date(2012, 0, 1), new Date());
    if (!dataArr.includes(randomData))
      dataArr.push(randomData);
  }

  return dataArr;
}

function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

function sortDataArr(arr) {
  return arr.sort((a,b) => {
    var dateA=new Date(a), dateB=new Date(b)
    return dateA-dateB
  })
}

let arr =  fillDataArray(10);
localStorage.setItem('dataArr', JSON.stringify(arr));
console.log(sortDataArr(shuffle(JSON.parse(localStorage.getItem('dataArr')))));

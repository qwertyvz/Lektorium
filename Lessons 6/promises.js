function perform(param, f) {
  let p1 = new Promise(resolve => resolve(f(param)));
  return p1.then(param => {
    console.log(++param);
    return param;
  });
}

perform(20, function(value) {
  console.log(value) // 20
  var param = 1;
  console.log(param); // 1
  return param;
})
.then('a', 'b', function(param) {
  console.log(++param); // 2
  return param;
})
.then(function(param) { // param === 2
  console.log(++param); // 3
  return param;
});
/*
let isTestPassed = true;

let willIContinueStuding = new Promise((resolve, reject) => {
      if (isTestPassed) {
        let decision = "You can continue your studing, you passed the test.";
        resolve(decision);
      } else {
        let reason = new Error("You did not pass the test.");
        reject(reason);
      }
    }
);

let tellMyFriend = function(decision) {
  return new Promise((resolve, reject) => {
    let message = "You won’t believe me, but I passed the test and can continue my studing at Lektorium. Here is what my mentor said: " + decision;
    resolve(message);
  })
}

function askMentor() {
  willIContinueStuding
  .then(tellMyFriend)
  .then((decision) => {console.log(decision);})
  .catch((error) => {console.log(error.message);})
}



askMentor();*/

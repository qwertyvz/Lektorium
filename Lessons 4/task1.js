var makeDog = function() {
  var _sound = "",
      _breed = "",
      _callNumber = 0;
  function callPerformed() {
    _callNumber++;
  }

  return {
    setSound: function(val) {
      this._sound = val;
    },
    getSound: function () {
      return this._sound;
    },
    setBreed: function(val) {
      this._breed = val;
    },
    getBreed: function () {
      return this._breed;
    },
    getCallNumber: function() {
      return _callNumber;
    },
    callDog: function () {
      callPerformed();
      console.log("Dog breed " + this._breed + " make '" + this._sound + "' sound.")
    }
  }
};

var dog1 = makeDog(),
    dog2 = makeDog();

dog1.setSound("woof_dog1");
dog2.setSound("woof_dog2");
dog1.setBreed("Akita");
dog2.setBreed("Afador");
dog1.callDog();
dog1.callDog();
dog1.callDog();
dog2.callDog();
console.log("Dog1 called " + dog1.getCallNumber() + " Dog2 called " + dog2.getCallNumber());

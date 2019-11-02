class Tamagotchi {

  constructor(name) {
    this._name = name;
    this._foodLevel = 100;
    this._waterLevel = 100;
    this._sleepLevel = 100;
    this._happinessLevel = 100;
    this._isDead = false;
    this._isRanAway = false;
    this._difficulty = 1000;
  }

  setDifficulty(value) {
    if (value < 1000) throw new Error("Wrong difficulty, min is 1000.");
      this._difficulty = value;
  }

  getDifficulty() {
    return this._difficulty;
  }

  getName() {
    return this._name;
  }

  getFoodLevel() {
    return this._foodLevel;
  }

  getWaterLevel() {
    return this._waterLevel;
  }

  getSleepLevel() {
    return this._sleepLevel;
  }

  getHappinessLevel() {
    return this._happinessLevel;
  }

  getIsDead() {
    return this._isDead;
  }

  //actions methods

  feed() {
    if(this._isDead || this._isRanAway) {
      console.log("Game over, your pet is no longer here.");
      return;
    }
    if (this._foodLevel < 100) {
      this._foodLevel += 20;
      console.log("Omn, omn... food +20");
    }
    else
      console.log("I am not hungry.");
  }

  drink() {
    if(this._isDead || this._isRanAway) {
      console.log("Game over, your pet is no longer here.");
      return;
    }
    if (this._waterLevel < 100) {
      this._waterLevel += 20;
      console.log("Omn, omn... water +20");
    }
    else
      console.log("I don't want to drink.");
  }

  sleep() {
    if(this._isDead || this._isRanAway) {
      console.log("Game over, your pet is no longer here.");
      return;
    }
    this._sleepLevel = 100;
    console.log("I had a good rest.");
  }

  play() {
    if(this._isDead || this._isRanAway) {
      console.log("Game over, your pet is no longer here.");
      return;
    }
    if (this._happinessLevel < 100) {
      this._happinessLevel += 20;
      console.log("Wow, wow... happiness +20");
    }
    else
      console.log("I am happy.");
  }

  //check state methods

  showStats() {
    return "Food: " + this._foodLevel + " Water: " + this._waterLevel + " Rest: " + this._sleepLevel + " Happiness: " + this._happinessLevel;
  }

  isDead() {
    if (this._foodLevel <= 0 || this._waterLevel <= 0 || this._sleepLevel <= 0)
      this._isDead = true;
    return this._isDead;
  }

  isRanAway() {
    if (this._happinessLevel <= 0)
      this._isRanAway = true;
    return this._isRanAway;
  }

  //warnings methods

  foodLevelWarning() {
    let needWarning = false;
    if (this._foodLevel < 25)
      needWarning = true;
    return needWarning;
  }

  waterLevelWarning() {
    let needWarning = false;
    if (this._waterLevel < 25)
      needWarning = true;
    return needWarning;
  }

  sleepLevelWarning() {
    let needWarning = false;
    if (this._sleepLevel < 25)
      needWarning = true;
    return needWarning;
  }

  happinessLevelWarning() {
    let needWarning = false;
    if (this._happinessLevel < 25)
      needWarning = true;
    return needWarning;
  }

  //drain methods

  hungerDrain()
  {
    this._foodLevel-=4;
  }

  waterDrain()
  {
    this._waterLevel-=3;
  }

  sleepDrain()
  {
	this._sleepLevel-=2;
  }

  playDrain()
  {
	this._happinessLevel-=3;
  }
}

let tamagotchi = new Tamagotchi("Desti");
let intervalID;
let statHolder = document.getElementById("stats"),
	infoHolder = document.getElementById("info"),
	warningHolder = document.getElementById("warn");

infoHolder.innerHTML = "Our new baby " + tamagotchi.getName() + " was born!";
statHolder.innerHTML = tamagotchi.showStats();
tamagotchi.setDifficulty(1500);


intervalID = setInterval(function () {
  if(!tamagotchi.isDead() && !tamagotchi.isRanAway()) {
	statHolder.innerHTML = tamagotchi.showStats();
    tamagotchi.hungerDrain();
	tamagotchi.waterDrain();
	tamagotchi.sleepDrain();
	tamagotchi.playDrain();
    if (tamagotchi.foodLevelWarning())
      warningHolder.innerHTML = "Feed me!";
    else if (tamagotchi.waterLevelWarning())
      warningHolder.innerHTML = "I want to drink!";
    else if (tamagotchi.sleepLevelWarning())
      warningHolder.innerHTML = "I need rest!";
    else if (tamagotchi.happinessLevelWarning())
      warningHolder.innerHTML = "I want to play!";
	else
		warningHolder.innerHTML = "";
  } else {
	statHolder.innerHTML = tamagotchi.showStats();
    if (tamagotchi.getIsDead())
      warningHolder.innerHTML = tamagotchi.getName() + " has died.";
    else
warningHolder.innerHTML = tamagotchi.getName() + " ran away.";
    clearInterval(intervalID);
  }
}, tamagotchi.getDifficulty());

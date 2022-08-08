import Controls from "./controls.js";
import Timer from "./timer.js";
import Sounds from "./sounds.js";
import {
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonPlus,
  buttonMinus,
  buttonForest,
  buttonRain,
  buttonCoffeeShop,
  buttonFireplace,
  minutesDisplay,
  secondsDisplay,
  forestFirstColor,
  forestSecondColor,
  rainFirstColor,
  rainSecondColor,
  coffeeFirstColor,
  coffeeSecondColor,
  fireplaceFirstColor,
  fireplaceSecondColor,
} from "./elements.js";

const controls = Controls({
  buttonPlay,
  buttonPause,
});

const sound = Sounds();

const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  controls,
  sound,
});

buttonPlay.addEventListener("click", function () {
  sound.pressButton();
  controls.play();
  timer.countdown();
});

buttonStop.addEventListener("click", function () {
  sound.pressButton();
  controls.pause();
  timer.reset();
});

buttonPause.addEventListener("click", function () {
  sound.pressButton();
  controls.pause();
  timer.hold();
});

buttonPlus.addEventListener("click", function () {
  sound.pressButton();
  timer.plusFive();
});

buttonMinus.addEventListener("click", function () {
  sound.pressButton();
  timer.minusFive();
});

let flag1 = true;
let flag2 = true;
let flag3 = true;
let flag4 = true;

buttonForest.addEventListener("click", function () {
  if (flag1) {
    sound.pressButtonForestOn();
  } else {
    sound.pressButtonForestOff();
  }

  forestFirstColor.style.fill = flag1 ? "#02799d" : "";
  forestSecondColor.style.fill = flag1 ? "white" : "";
  flag1 = !flag1;
});

buttonRain.addEventListener("click", function () {
  if (flag2) {
    sound.pressButtonRainOn();
  } else {
    sound.pressButtonRainOff();
  }

  rainFirstColor.style.fill = flag2 ? "#02799d" : "";
  rainSecondColor.style.fill = flag2 ? "white" : "";
  flag2 = !flag2;
});

buttonCoffeeShop.addEventListener("click", function () {
  if (flag3) {
    sound.pressButtonCoffeeOn();
  } else {
    sound.pressButtonCoffeeOff();
  }

  coffeeFirstColor.style.fill = flag3 ? "#02799d" : "";
  coffeeSecondColor.style.fill = flag3 ? "white" : "";
  flag3 = !flag3;
});

buttonFireplace.addEventListener("click", function () {
  if (flag4) {
    sound.pressButtonFireplaceOn();
  } else {
    sound.pressButtonFireplaceOff();
  }

  fireplaceFirstColor.style.fill = flag4 ? "#02799d" : "";
  fireplaceSecondColor.style.fill = flag4 ? "white" : "";
  flag4 = !flag4;
});

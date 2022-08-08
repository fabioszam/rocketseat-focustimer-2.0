export default function () {
  const buttonPressForest = new Audio(
    "https://github.com/fabioszam/MyFiles/blob/master/Floresta.wav?raw=true"
  );

  const buttonPressRain = new Audio(
    "https://drive.google.com/uc?id=1Ip8xBqAUJ-bty51Wz8JBtX_bWXCgA0P2&export=download"
  );

  const buttonPressCoffee = new Audio(
    "https://drive.google.com/uc?id=1OxLKpCwg2wrxXFNUHgZxJ51QEt0ac5RA&export=download"
  );

  const buttonPressFireplace = new Audio(
    "https://drive.google.com/uc?id=1MakaBPxJvTa_whaSM3kEbRcxiVd1GRCB&export=download"
  );

  const endedTimer = new Audio(
    "https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true"
  );

  const buttonPressAudio = new Audio(
    "https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true"
  );

  buttonPressForest.loop = true;
  buttonPressRain.loop = true;
  buttonPressCoffee.loop = true;
  buttonPressFireplace.loop = true;

  function pressButton() {
    buttonPressAudio.play();
  }

  function timeEnd() {
    endedTimer.play();
  }

  function pressButtonForestOn() {
    buttonPressForest.play();
  }

  function pressButtonForestOff() {
    buttonPressForest.pause();
  }

  function pressButtonRainOn() {
    buttonPressRain.play();
  }

  function pressButtonRainOff() {
    buttonPressRain.pause();
  }

  function pressButtonCoffeeOn() {
    buttonPressCoffee.play();
  }

  function pressButtonCoffeeOff() {
    buttonPressCoffee.pause();
  }

  function pressButtonFireplaceOn() {
    buttonPressFireplace.play();
  }

  function pressButtonFireplaceOff() {
    buttonPressFireplace.pause();
  }

  return {
    pressButtonForestOn,
    pressButtonForestOff,
    pressButtonRainOn,
    pressButtonRainOff,
    pressButtonCoffeeOn,
    pressButtonCoffeeOff,
    pressButtonFireplaceOn,
    pressButtonFireplaceOff,
    pressButton,
    timeEnd,
  };
}

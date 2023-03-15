"use strict";

const btnStart = document.getElementById("start");
const touchArea = document.querySelector(".touchArea");
const yourResultText = document.querySelector(".yourResultText");
const yourResultScore = document.querySelector(".yourResultScore");
const description = document.querySelector(".description");

const greenLights = document.querySelectorAll(".bc-green");
const orangeLights = document.querySelectorAll(".bc-orange");
const redLightsSection1 = document.getElementById("section-1");
const redLightsSection2 = document.getElementById("section-2");
const redLightsSection3 = document.getElementById("section-3");
const redLightsSection4 = document.getElementById("section-4");
const redLightsSection5 = document.getElementById("section-5");

const TIME_COUNT = 1;
let delayAfterStart, timerStart ,timerStop ,timer1, timer2, timer3, timer4, timer5, timerLightsOff;

function lightsOn(section) {
  section.classList.remove("opacity-30");
}

function lightsOff() {
  timerStart = performance.now();
  redLightsSection1.classList.add("opacity-30");
  redLightsSection2.classList.add("opacity-30");
  redLightsSection3.classList.add("opacity-30");
  redLightsSection4.classList.add("opacity-30");
  redLightsSection5.classList.add("opacity-30");
}

function stop() {
  timerStop = performance.now();
  touchArea.classList.add("display-none");
  description.classList.add("display-none");
  btnStart.classList.remove("display-none");
  yourResultText.classList.remove("hidden");
  yourResultText.classList.remove("falstart");
  yourResultScore.classList.remove("hidden");

  greenLights.forEach(light => light.classList.remove("opacity-30"));
  orangeLights.forEach(light => light.classList.remove("opacity-30"));
  redLightsSection1.classList.remove("opacity-30");
  redLightsSection2.classList.remove("opacity-30");
  redLightsSection3.classList.remove("opacity-30");
  redLightsSection4.classList.remove("opacity-30");
  redLightsSection5.classList.remove("opacity-30");

  if (timerStart) {
    let result = (timerStop - timerStart) / 1000;
    yourResultText.innerText = `Your result`;
    yourResultScore.innerText = `${result.toFixed(4)}s`;
  } else {
    yourResultText.classList.add("falstart");
    yourResultText.innerText = `FALSTART`;
    yourResultScore.innerText = ``;
    clearTimeout(timer1);
    clearTimeout(timer2);
    clearTimeout(timer3);
    clearTimeout(timer4);
    clearTimeout(timer5);
    clearTimeout(timerLightsOff);
  }
}


function startGame() {
  timerStart = null;
  timerStop = null;
  delayAfterStart = Math.random() * 1500;
  yourResultText.classList.add("hidden");
  yourResultScore.classList.add("hidden");
  description.classList.remove("display-none");

  // dimming lights
  greenLights.forEach(light => light.classList.add("opacity-30"));
  orangeLights.forEach(light => light.classList.add("opacity-30"));
  redLightsSection1.classList.add("opacity-30");
  redLightsSection2.classList.add("opacity-30");
  redLightsSection3.classList.add("opacity-30");
  redLightsSection4.classList.add("opacity-30");
  redLightsSection5.classList.add("opacity-30");
  touchArea.classList.remove("display-none");
  btnStart.classList.add("display-none");

  // start counting
  timer1 = setTimeout(lightsOn, 1000 * TIME_COUNT, redLightsSection1);
  timer2 = setTimeout(lightsOn, 2000 * TIME_COUNT, redLightsSection2);
  timer3 = setTimeout(lightsOn, 3000 * TIME_COUNT, redLightsSection3);
  timer4 = setTimeout(lightsOn, 4000 * TIME_COUNT, redLightsSection4);
  timer5 = setTimeout(lightsOn, 5000 * TIME_COUNT, redLightsSection5);
  timerLightsOff = setTimeout(lightsOff, 6000 + delayAfterStart);
}

btnStart.addEventListener("click", startGame);
touchArea.addEventListener("click", stop);

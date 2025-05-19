const getMilliseconds = document.querySelector("#milliseconds");
const getSeconds = document.querySelector("#seconds");
const getMinutes = document.querySelector("#minutes");
const getHours = document.querySelector("#hours");
const getStart = document.querySelector("#start");

let i = 0;
let sec = 0;
let min = 0;
let hour = 0;
let interval;

const start = () => {
  interval = setInterval(() => {
    getMilliseconds.innerHTML = i;

    if (i === 100) {
      getSeconds.innerHTML = sec + 1;
      i = 0;
      sec++;

      if (sec === 59) {
        getMinutes.innerHTML = min + 1;
        i = 0;
        sec = 0;
        min++;

        if (min === 59) {
          getHours.innerHTML = hour + 1;
          min = 0;
          sec = 0;
          i = 0;
          hour++;
        }
      }
    }

    i++;
  }, 10);

  getStart.setAttribute("disabled", "true");
};

const pause = () => {
  clearInterval(interval);
  getStart.removeAttribute("disabled");
  getStart.innerHTML = "Resume";
};

const reset = () => {
  i = 0;
  sec = 0;
  min = 0;
  hour = 0;

  getMilliseconds.innerHTML = "00";
  getSeconds.innerHTML = "00";
  getMinutes.innerHTML = "00";
  getHours.innerHTML = "00";

  clearInterval(interval);
  getStart.innerHTML = "Start";
  getStart.removeAttribute("disabled");
};

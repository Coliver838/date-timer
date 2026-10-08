const input = document.querySelector("#datetime-picker");
const startBtn = document.querySelector("button[data-start]");
const daysSpan = document.querySelector("span.value[data-days]");
const hoursSpan = document.querySelector("span.value[data-hours]");
const minutesSpan = document.querySelector("span.value[data-minutes]");
const secondsSpan = document.querySelector("span.value[data-seconds]");
let userSelectedDate;
function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  const days = pad(Math.floor(ms / day));
  const hours = pad(Math.floor((ms % day) / hour));
  const minutes = pad(Math.floor(((ms % day) % hour) / minute));
  const seconds = pad(Math.floor((((ms % day) % hour) % minute) / second));
  return { days, hours, minutes, seconds };
}
function pad(value) {
  return String(value).padStart(2, "0");
}
const options = {
  enableTime: true,
  time_24hr: true,
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    userSelectedDate = selectedDates[0];
  },
};
flatpickr(input, options);
const { days, hours, minutes, seconds } = convertMs(delta);
daysSpan.textContent = days;
hoursSpan.textContent = hours;
minutesSpan.textContent = minutes;
secondsSpan.textContent = seconds;
``;

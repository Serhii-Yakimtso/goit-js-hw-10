import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

let userSelectedDate;

const btnStart = document.querySelector('button[data-start]');
// const inputData = document.querySelector('#datetime-picker');
// console.log(inputData);
// inputData.classList.add('disable');
// inputData.classList.remove('disable');
// inputData.classList.toggle('disable');
const timerDays = document.querySelector('.value[data-days]');
const timerHours = document.querySelector('.value[data-hours]');
const timerMinutes = document.querySelector('.value[data-minutes]');
const timerSeconds = document.querySelector('.value[data-seconds]');

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] <= Date.now()) {
      window.alert('Please choose a date in the future');

      btnStart.classList.add('disabled');
      btnStart.setAttribute('disabled', '');
    } else {
      btnStart.classList.remove('disabled');
      btnStart.removeAttribute('disabled', '');

      userSelectedDate = selectedDates[0].getTime();
    }
  },
};

onBtnDisabled();
flatpickr('#datetime-picker', options);
btnStart.addEventListener('click', onCountdownTime);

function onBtnDisabled() {
  btnStart.classList.add('disabled');
  btnStart.setAttribute('disabled', '');
}

function onCountdownTime() {
  setInterval(() => {
    const countdownTime = userSelectedDate - Date.now();
    onTimerInterface(convertMs(countdownTime));
  }, 1000);
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function onTimerInterface({ days, hours, minutes, seconds }) {
  timerDays.innerHTML = addLeadingZero(days);
  timerHours.innerHTML = addLeadingZero(hours);
  timerMinutes.innerHTML = addLeadingZero(minutes);
  timerSeconds.innerHTML = addLeadingZero(seconds);
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

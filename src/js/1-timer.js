import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import errorIcon from '../img/error.svg';

const inputData = document.querySelector('#datetime-picker');
const btnStart = document.querySelector('button[data-start]');
const timerDays = document.querySelector('.value[data-days]');
const timerHours = document.querySelector('.value[data-hours]');
const timerMinutes = document.querySelector('.value[data-minutes]');
const timerSeconds = document.querySelector('.value[data-seconds]');

let userSelectedDate;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] <= Date.now()) {
      iziToast.error({
        title: 'Error',
        titleColor: '#fff',
        titleSize: '16px',

        message: 'Please choose a date in the future',
        messageColor: '#fff',
        messageSize: '16px',

        iconUrl: errorIcon,

        position: 'topRight',
        backgroundColor: '#ef4040',
      });

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

function onCountdownTime() {
  onBtnDisabled();
  onInputDisabled();

  const interval = setInterval(() => {
    const countdownTime = userSelectedDate - Date.now();

    if (countdownTime <= 0) {
      return clearInterval(interval);
    }

    onTimerInterface(convertMs(countdownTime));
  }, 1000);
}

function onBtnDisabled() {
  btnStart.classList.add('disabled');
  btnStart.setAttribute('disabled', '');
}

function onInputDisabled() {
  inputData.classList.add('disabled');
  inputData.setAttribute('disabled', '');
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

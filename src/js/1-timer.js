import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

let userSelectedDate;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    userSelectedDate = selectedDates[0].getTime();
    console.log(userSelectedDate);
  },
};

flatpickr('#datetime-picker', options);

// const inputDateTime = document.querySelector('#datetime-picker');

let dateTimeNow;
function onDateTimeNow() {
  return (dateTimeNow = Date.now());
}
console.log(onDateTimeNow());

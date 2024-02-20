import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import errorIcon from '../img/error.svg';
import cautionIcon from '../img/caution.svg';
import okIcon from '../img/ok.svg';

// iziToast.show({
//       title: 'Error',
//       titleColor: '#fff',
//       titleSize: '16px',

//       message: ` Rejected promise in ${delay}ms`,
//       messageColor: '#fff',
//       messageSize: '16px',

//       iconUrl: errorIcon,

//       position: 'topRight',
//       backgroundColor: '#ef4040',
// });

// iziToast.show({
//       title: 'OK',
//       titleColor: '#fff',
//       titleSize: '16px',

//       message: ` Fulfilled promise in ${delay}ms`,
//       messageColor: '#fff',
//       messageSize: '16px',

//       iconUrl: errorIcon,

//       position: 'topRight',
//       backgroundColor: '#59a10d',
// });

const inputDelay = document.querySelector('input[name="delay"]');
const inputFulfilled = document.querySelector('input[value="fulfilled"]');
const inputRejected = document.querySelector('input[value="rejected"]');
const btnSubmit = document.querySelector('button');

let state;
let delay;

inputFulfilled.addEventListener('click', addInputFulfilledChecked);
inputRejected.addEventListener('click', addInputRejectedChecked);
btnSubmit.addEventListener('click', onPromiseGenerator);

function addInputFulfilledChecked() {
  inputFulfilled.setAttribute('checked', '');
  inputRejected.removeAttribute('checked');
}

function addInputRejectedChecked() {
  inputRejected.setAttribute('checked', '');
  inputFulfilled.removeAttribute('checked');
}

function onPromiseGenerator(e) {
  e.preventDefault();
  getDelay();
  getPromiseState();
}

function getDelay() {
  if (!inputDelay.value) {
    iziToast.show({
      title: 'Caution',
      titleColor: '#fff',
      titleSize: '16px',

      message: 'Enter the delay',
      messageColor: '#fff',
      messageSize: '16px',

      iconUrl: cautionIcon,

      position: 'topRight',
      backgroundColor: '#ffa000',
    });
    return;
  }

  delay = inputDelay.value;
}

function getPromiseState() {
  if (document.querySelector('[checked]') === null) {
    iziToast.show({
      title: 'Caution',
      titleColor: '#fff',
      titleSize: '16px',

      message: 'Choose a state',
      messageColor: '#fff',
      messageSize: '16px',

      iconUrl: cautionIcon,

      position: 'topRight',
      backgroundColor: '#ffa000',
    });
    return;
  }

  state = document.querySelector('[checked]').getAttribute('value');
}

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import errorIcon from '../img/error.svg';
import cautionIcon from '../img/caution.svg';
import okIcon from '../img/ok.svg';

const form = document.querySelector('.form');
const inputDelay = document.querySelector('input[name="delay"]');
const inputFulfilled = document.querySelector('input[value="fulfilled"]');
const inputRejected = document.querySelector('input[value="rejected"]');
const btnSubmit = document.querySelector('button');

inputFulfilled.addEventListener('click', addInputFulfilledChecked);
inputRejected.addEventListener('click', addInputRejectedChecked);
btnSubmit.addEventListener('click', handlePromiseGenerator);

// функції зміни статусу checked на радіо-кнопках
function addInputFulfilledChecked() {
  inputFulfilled.setAttribute('checked', '');
  inputRejected.removeAttribute('checked');
}

function addInputRejectedChecked() {
  inputRejected.setAttribute('checked', '');
  inputFulfilled.removeAttribute('checked');
}

// функція прийняття delay із форми
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

  return inputDelay.value;
}

// функція визначення стану із форми
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

  return document.querySelector('[checked]').getAttribute('value');
}

// функція виклику промісу

function handlePromiseGenerator(e) {
  e.preventDefault();

  const delay = getDelay();
  const state = getPromiseState();

  const makePromise = (delayValue, stateValue) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (stateValue === 'fulfilled') {
          resolve(delayValue);
        } else {
          reject(delayValue);
        }
      }, delay);
      form.reset();
    });
  };

  makePromise(delay, state)
    .than(succecs => {
      iziToast.show({
        title: 'OK',
        titleColor: '#fff',
        titleSize: '16px',

        message: ` Fulfilled promise in ${delay}ms`,
        messageColor: '#fff',
        messageSize: '16px',

        iconUrl: okIcon,

        position: 'topRight',
        backgroundColor: '#59a10d',
      });
    })
    .catch(error => {
      iziToast.show({
        title: 'Error',
        titleColor: '#fff',
        titleSize: '16px',

        message: ` Rejected promise in ${delay}ms`,
        messageColor: '#fff',
        messageSize: '16px',

        iconUrl: errorIcon,

        position: 'topRight',
        backgroundColor: '#ef4040',
      });
    });
}

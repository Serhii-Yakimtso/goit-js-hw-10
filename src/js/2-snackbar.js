import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import errorIcon from '../img/error.svg';
import okIcon from '../img/ok.svg';

const form = document.querySelector('.form');

form.addEventListener('submit', handlePromiseGenerator);

function handlePromiseGenerator(e) {
  e.preventDefault();

  const delay = form.elements.delay.value;
  const state = form.elements.state.value;

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
    .then(succecs => {
      iziToast.show({
        title: 'OK',
        titleColor: '#fff',
        titleSize: '16px',

        message: `Fulfilled promise in ${delay}ms`,
        messageColor: '#fff',
        messageSize: '16px',

        iconUrl: okIcon,

        position: 'topRight',
        backgroundColor: '#59a10d',
      });
      console.log(`Fulfilled promise in ${delay}ms`);
    })
    .catch(error => {
      iziToast.show({
        title: 'Error',
        titleColor: '#fff',
        titleSize: '16px',

        message: `Rejected promise in ${delay}ms`,
        messageColor: '#fff',
        messageSize: '16px',

        iconUrl: errorIcon,

        position: 'topRight',
        backgroundColor: '#ef4040',
      });
      console.log(`Rejected promise in ${delay}ms`);
    });
}

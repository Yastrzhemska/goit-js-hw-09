import Notiflix from 'notiflix';

const selectors = {
  form: document.querySelector('form'),
  delay: document.querySelector('[name="delay"]'),
  step: document.querySelector('[name="step"]'),
  amount: document.querySelector('[name="amount"]'),
  
}
// console.log(selectors);

selectors.form.addEventListener("submit", handleSubmit);

function createPromise(position, delay) {
    return new Promise((resolve, reject) => {
      const shouldResolve = Math.random() > 0.3;
      setTimeout(() => {
        if (shouldResolve) {
          resolve({ position, delay });
        } else {
          reject({ position, delay })
        }
      }, delay);
    })
  }


function handleSubmit(evt) {
  evt.preventDefault();
  for (let i = 1; i <= Number(selectors.amount.value); i += 1) {
  let position = i + 1;
  let delays = Number(selectors.delay.value) + Number(selectors.step.value) * i;

  createPromise(position, delays)
  .then(({ position, delay }) => {
    Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`)
  })
  .catch(({ position, delay }) => {
    Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
  });
}
}




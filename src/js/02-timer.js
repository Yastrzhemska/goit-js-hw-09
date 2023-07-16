import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';


const selectors = {
    inputDate: document.querySelector('#datetime-picker'),
    btnStart: document.querySelector('button[data-start]'),
    days: document.querySelector('[data-days]'),
    hours: document.querySelector('[data-hours]'),
    minutes: document.querySelector('[data-minutes]'),
    seconds: document.querySelector('[data-seconds]'),
};
// console.log(selectors);

let timerId = null;


flatpickr(selectors.inputDate,  {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        if (selectedDates[0] <= Date.now()) {
            Notiflix.Notify.failure('Please choose a date in the future');
            selectors.btnStart.disabled = true;
        } else {
            // selectors.btnStart.disabled = false;
        }
    }
});

selectors.btnStart.addEventListener('click', hendlerStartTimer);



    function hendlerStartTimer() {
  timerId = setInterval(() => {
    const choosenDate = new Date(selectors.inputDate.value);
    const timeToFinish = choosenDate - Date.now();
    const { days, hours, minutes, seconds } = convertMs(timeToFinish);

    selectors.days.textContent = addLeadingZero(days);
    selectors.hours.textContent = addLeadingZero(hours);
    selectors.minutes.textContent = addLeadingZero(minutes);
    selectors.seconds.textContent = addLeadingZero(seconds);

    if (timeToFinish < 1000) {
      clearInterval(timerId);
    }
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

function addLeadingZero(value) {
    return String(value).padStart(2, '0');
}
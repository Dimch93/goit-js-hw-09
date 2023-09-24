import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
  },
};

flatpickr('#datetime-picker', options);

const startBtn = document.querySelector('[data-start]');
startBtn.addEventListener('click', handleClickStart);

startBtn.disabled = true;

// function handleClickStart(event) {
//   if (NamberselectedDates < Namber.defaultDate) {
//     return alert('Please choose a date in the future');
//   } else {
//   }
// }

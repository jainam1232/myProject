// email validation 
const inputEl = document.querySelector('#email');
const btn = document.querySelector('#submit');
const RegEmail = /^\w+@[a-zA-Z_#]+?\.[a-zA-Z]{2,3}$/;
const iconErrorEl = document.querySelector('.main-content-block__icon-error');
const textErrorEl = document.querySelector('.main-content-block__text-error');
const fromGroupEl = document.querySelector('.main-content-block__form-group');
let errors = [];

btn.addEventListener('click', e => {
  errors = [];
  e.preventDefault();
  // validate email address
  const email = inputEl.value;

  if (email == '' || email === undefined) {
    errors.push('Please provide us your email');
    // show error
    iconErrorEl.style.display = 'block';
    textErrorEl.innerText = errors[0];
  } else if (!email.match(RegEmail)) {
    errors.push('Please provide us your valid email');
    // show error icon
    iconErrorEl.style.display = 'block';
    textErrorEl.innerText = errors[0];
  }
  if (!errors.length > 0) {
    // hide error icon
    iconErrorEl.style.display = 'none';
     }
});
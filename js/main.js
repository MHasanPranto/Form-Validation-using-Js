const form = document.getElementById('form');
const name = document.getElementById('name');
const email = document.getElementById('email');
const number = document.getElementById('number');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  const nameValue = name.value.trim();
  const emailValue = email.value.trim();
  const numberValue = number.value.trim();
  const passwordValue = password.value.trim();
  const password2Value = password2.value.trim();

  if (nameValue === '') {
    setErrorFor(name, 'name cannot be blank');
  } else if (!isName(nameValue)) {
    setErrorFor(name, 'Not a valid Name. Name can not contain number');
  } else {
    setSuccessFor(name);
  }

  if (emailValue === '') {
    setErrorFor(email, 'Email cannot be blank');
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, 'Not a valid email');
  } else {
    setSuccessFor(email);
  }

  if (numberValue === '') {
    setErrorFor(number, 'Number cannot be blank');
  } else if (!isNumber(numberValue)) {
    setErrorFor(
      number,
      'Not a valid Number. It must be contain 11 degit & letters'
    );
  } else if (!numberValue.startsWith('01')) {
    setErrorFor(number, 'It must be start with 01');
  } else {
    setSuccessFor(number);
  }

  if (passwordValue === '') {
    setErrorFor(password, 'Password cannot be blank');
  } else if (!isPasswordSecure(passwordValue)) {
    setErrorFor(
      password,
      'Password must has at least 8 characters & include min 1 lowercase, 1 UPPERCASE, 1 number and 1 special character in (!@#$%^&*)'
    );
  } else {
    setSuccessFor(password);
  }

  if (password2Value === '') {
    setErrorFor(password2, 'Password2 cannot be blank');
  } else if (passwordValue !== password2Value) {
    setErrorFor(password2, 'Passwords does not match');
  } else {
    setSuccessFor(password2);
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector('small');
  formControl.className = 'form-control error';
  small.innerText = message;
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
function isName(name) {
  return /^[A-Za-z' ']+$/.test(name);
}
function isNumber(number) {
  if (number.length === 11) {
    return /^[0-9]+$/.test(number);
  }
}

function isPasswordSecure(password) {
  const re = new RegExp(
    '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})'
  );
  return re.test(password);
}

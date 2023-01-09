// Email
let emailInput = document.querySelector('#email');
let emailFailed = document.querySelector('.email-failed');

// Password
let passwordInput = document.querySelector('#password');
let passwordFailed = document.querySelector('.password-message');
let passwordReInput = document.querySelector('#password-retype');
let passwordReFailed = document.querySelector('.password-remessage');

// Name
let nameInput = document.querySelector('#name');
let nameFailed = document.querySelector('.name-message');

// Date of Bir
let dateInput = document.querySelector('#date');
let dateFailed = document.querySelector('.date-message');



// 이메일 확인
emailInput.onkeyup = function () {
  // 이메일 형식: 알파벳+숫자@알파벳+숫자.알파벳+숫자
  let exptext = /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;  
  if (exptext.test(emailInput.value) === true) {
    emailFailed.classList.add('hide');
  } else {
    emailFailed.classList.remove('hide');
    icon.classList.remove('hide');
  }
}

// 비밀번호 확인
passwordInput.onkeyup = function () {
  // 비밀번호 형식: 최소 8자 이상, 알파벳과 숫자 및 특수문자(@$!%*#?&)는 하나 이상 포함
  let exptext = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
  if (exptext.test(passwordInput.value) === true) {
    passwordFailed.classList.add('hide');
  } else {
    passwordFailed.classList.remove('hide');
  }
}

// 비밀번호 재확인
passwordReInput.onkeyup = function () {
  if (passwordInput.value === passwordReInput.value) {
    passwordReFailed.classList.add('hide');
  } else {
    passwordReFailed.classList.remove('hide');
  }
}

// 이름 확인
nameInput.onkeyup = function () {
  let exptext = /^[가-힣]{2,4}|[a-zA-Z]{2,10}\s[a-zA-Z]{2,10}$/;;
  if (exptext.test(nameInput.value) === true) {
    nameFailed.classList.add('hide');
  } else {
    nameFailed.classList.remove('hide');
  }
}

// 생년월일(6자리) 입력 확인
dateInput.onkeyup = function () {
  let exptext = /([0-9]{2}(0[1-9]|1[0-2])(0[1-9]|[1,2][0-9]|3[0,1]))/;
  if (exptext.test(dateInput.value) === true) {
    dateFailed.classList.add('hide');
  } else {
    dateFailed.classList.remove('hide');
  }
}
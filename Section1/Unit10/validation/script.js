// ID
let elInputUsername = document.querySelector('#username');
let elFailureMessage = document.querySelector('.failure-message');
let elSuccessMessage = document.querySelector('.success-message');

// PASSWORD
let elPassword = document.querySelector('#password');
let elPasswordRetype = document.querySelector('#password-retype');
let elMissmatchMessage = document.querySelector('.mismatch-message');

/* ID 관련 function */
elInputUsername.onkeyup = function () {
  if (isMoreThan4Length(elInputUsername.value)) {
    // 아이디 4글자 이상 메시지를 숨기고, 사용할 수 있는 아이디 메시지 출력
    elFailureMessage.classList.add('hide');
    elSuccessMessage.classList.remove('hide');
  } else {
    // 사용할 수 있는 아이디 메시지를 숨기고, 아이디 4글자 이상 메시지 출력
    elSuccessMessage.classList.add('hide');
    elFailureMessage.classList.remove('hide');
  }
}

function isMoreThan4Length(value) {
  return value.length >= 4;
}


/* Password 관련 function */
elPasswordRetype.onkeyup = function () {
  if (isMatch(elPassword.value, elPasswordRetype.value)) {
    elMissmatchMessage.classList.add('hide');
  } else {
    elMissmatchMessage.classList.remove('hide');
  }
}

// 첫 번째 입력했던 비밀번호와 두 번째 입력했던 비밀번호가 같은지 확인
function isMatch (password1, password2) {
  return password1 === password2;
}
let btn = document.querySelector('#btn');
let emailEl = document.querySelector('[name=email]');
let passwordEl = document.querySelector('[name=password]');



btn.addEventListener('click', function () {
  let email = emailEl.value;
  let password = passwordEl.value;
  console.log(email, password);

  if (email === '' || validateEmail(email)) {
    conseole.log('이메일이 유효하지 않습니다.');
  } else if (!password) {
    console.log('비밀번호를 입력해주세요.');
  } else if ((password.length >= 8 && password.length <= 16) === false) {
    console.log('비밀번호를 8에서 16자 이내 입니다.');
  } else {
    conseole.log('로그인 성공.');
  }
});

function validateEmail(email) {
  return true;
}

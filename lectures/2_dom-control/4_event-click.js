let btn1 = document.querySelector('.btn1');
let btn2 = document.querySelector('.btn2');

btn1.onclick = function () {
  alert('Hello 프로퍼티 리스너!');
}

btn2.addEventListener('click', helloEvent1);

function helloEvent1() {
  alert('Hello addEventListener1');
}

btn2.addEventListener('click', function () {
  alert('Hello addEventListener2');
});

btn2.removeEventListener('click', helloEvent1);


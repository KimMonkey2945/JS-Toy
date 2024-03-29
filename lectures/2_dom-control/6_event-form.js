let inputBox = document.querySelector('#inputBox');
let img = document.querySelector('img');

// inputBox.addEventListener('keydown', function (event) {
//   console.log('keydown');
// });

// inputBox.addEventListener('keyup', function (event) {
//   console.log('keyup');
// });

// inputBox.addEventListener('keyup', function (event) {
//   console.log('event.key', event.key);
//   console.log('event.keyCode', event.keyCode);
// });

// inputBox.addEventListener('focus', function (event) {
//   alert('focus');
// });

// inputBox.addEventListener('blur', function (event) {
//   alert('blur');
// });

inputBox.addEventListener('change', function (event) {
  alert('change');
});

img.addEventListener('error', function () {
  console.log('error!!');
  event.target.src = '../img/blueberries.jpg'
});



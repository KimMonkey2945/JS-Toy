// let h2 = document.querySelector('h2');
// h2.dataset.test = 'hello javascript...'
// console.log('h2.dataset.test : ', h2.dataset.test);

let liList = document.querySelectorAll('li');
let img = document.querySelector('img');
let selectedItem = document.querySelector('.selectedItem');

// liList[0].addEventListener('click', function () {
//   img.setAttribute('src', liList[0].dataset.img);
// });

liList[0].addEventListener('click', selectItem)

liList[1].addEventListener('click', selectItem);

liList[2].addEventListener('click', selectItem);

function selectItem(event) {
  selectedItem.textContent = event.target.textContent;
  img.setAttribute('src', event.target.dataset.img);
};
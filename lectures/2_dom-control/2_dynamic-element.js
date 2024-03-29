let addBtn = document.getElementById('button');
let addBeforeBtn = document.getElementById('before');
let inputBox = document.querySelector('input');
let removeTargetBtn = document.querySelector('#targetRemove');

let removeBtn = document.querySelector('.removeBtn');

console.log(inputBox.value);

addBtn.addEventListener('click', function () {
  let li = document.createElement('li');
  let ul = document.querySelector('ul');
  li.textContent = inputBox.value;

  let button = document.createElement('button');
  button.textContent = 'X';
  // button.setAttribute('class', 'removeBtn');
  button.classList.add('removeBtn');
  button.addEventListener('click', removeParentNode);

  li.appendChild(button);
  ul.appendChild(li);
  inputBox.value = '';
  inputBox.focus();
});

addBeforeBtn.addEventListener('click', function () {
  let li = document.createElement('li');
  let ul = document.querySelector('ul');
  let targetLi = document.querySelector('li#target');
  li.textContent = inputBox.value;

  let button = document.createElement('button');
  button.textContent = 'X';
  button.classList.add('removeBtn');
  button.addEventListener('click', removeParentNode);

  li.appendChild(button);
  ul.insertBefore(li, targetLi);
  inputBox.value = '';
  inputBox.focus();
});

removeTargetBtn.addEventListener('click', function () {
  let targetLi = document.querySelector('li#target');
  targetLi.remove();
});

// removeBtn.addEventListener('click', function (event) {
//   // console.log(event.target.parentNode);
//   event.target.parentNode.remove();
// });

removeBtn.addEventListener('click', removeParentNode)

function removeParentNode(event) {
  event.target.parentNode.remove();
}









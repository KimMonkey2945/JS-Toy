/**
 * 1. 추가하기
 * 2. 삭제하기
 * 3. 전체삭제하기
 * 4. 리스트 보여주기
 */
const $inputBox = document.querySelector('#inputBox');
const $addBtn = document.querySelector('#addBtn');
// $ -> 일반객체와 html dom 객체를 구분하기 위해
const $todoList = document.querySelector('#todoList');
const $todoCount = document.querySelector('#todoCount');
const $clearAll = document.querySelector('#clearAll');

$inputBox.addEventListener('keyup', function (e) {
  console.log('e.target.value : ', e.target.value);
  if (e.target.value) {
    $addBtn.classList.add('active');
  } else {
    $addBtn.classList.remove('active');
  }
});

$addBtn.addEventListener('click', function () {
  const $li = document.createElement('li');
  const $span = document.createElement('span');
  const $i = document.createElement('i');
  $i.classList.add('fas', 'fa-trash');
  $span.classList.add('icon');
  $span.appendChild($i);
  $span.addEventListener('click', deleteTask);
  $li.textContent = $inputBox.value;
  $li.appendChild($span);
  $todoList.appendChild($li);

  // 카운트 변경
  const $itemList = $todoList.querySelectorAll('li');
  $todoCount.textContent = $itemList.length;
  // inputBox clear
  $inputBox.value = '';

  // 전체삭제버튼 활성화
  $clearAll.classList.add('active');

});

function deleteTask(e) {
  e.currentTarget.parentNode.remove();
  let value = $todoCount.textContent;
  let count = parseInt(value);
  count--;
  $todoCount.textContent = count;

  // 전체삭제 버튼 비활성화
  const $itemList = $todoList.querySelectorAll('li');
  if ($itemList.length === 0) {
    $clearAll.classList.remove('active');
  }
};

$clearAll.addEventListener('click', function () {
  $todoList.innerHTML = '';
  $todoCount.textContent = 0;
});
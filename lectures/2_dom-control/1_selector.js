// get 메서드

let title = document.getElementById('title');
console.log(title);

title.textContent = '회한사바리에 소주한잔.'

let items = document.getElementsByClassName('item');
console.log(items);
console.log(items[0]);
console.log(items[1]);
console.log(items[2]);

let liList = document.getElementsByTagName('li');
console.log(liList);

// HTML 요소 쿼리

let h2 = document.querySelector('#title');

console.log('h2 : ', h2);

let item = document.querySelector('.item');
console.log('query item : ', item);

let itemAll = document.querySelectorAll('.item');
console.log('itemAll : ', itemAll)
console.log('itemAll : ', itemAll[0])
console.log('itemAll : ', itemAll[1])
console.log('itemAll : ', itemAll[2])

// h2.textContent = '<span>남산 라이딩!</span>';
// h2.innerHTML = '<span>남산 라이딩!</span>';

// document.querySelector('body').innerHTML = '<strong>라이딩을 즐기자!</strong>'

let input = document.querySelector('input');
input.setAttribute('placeholder', '헬스 운동을 입력해주세요.');
input.setAttribute('required', '')
input.removeAttribute('placeholder');
input.removeAttribute('required');

let helloItem = document.querySelector('.hello');
console.log('helloItem', helloItem);
// 실무에서 잘 사용하지 x 방법
// helloItem.style.color = 'blue';
// helloItem.style.backgroundColor = 'black';

helloItem.classList.add('dark');
// helloItem.classList.add('light');
// helloItem.classList.add('light', 'dark');
helloItem.classList.remove('dark');
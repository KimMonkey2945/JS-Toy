// let person = {

//   fullname: '짐코딩',
//   age: 20,
//   printThis: function () {
//     console.log(this);
//     console.log('this === person', this === person);
//     console.log('this === window', this === window);
//   },
// };
// person.printThis();
// let printThis = person.printThis;
// printThis();

// function printThis() {
//   console.log(this); // default this => window
// };

// printThis();

// let person1 = {
//   name: '홍길동',
//   printThis: printThis,
// };

// person1.printThis();

//window
let btn = document.querySelector('button');
btn.addEventListener('click', function () {
  console.log(this);
  console.log(this === btn);
});

// ES5 bind - this 설정
// function printThis() {
//   console.log(this);
// };

// let person1 = {
//   name: '홍길동',
// };

// let person2 = {
//   name: '임꺽정',
// };

// let printThis1 = printThis.bind(person1);
// let printThis2 = printThis.bind(person2);
// printThis1();
// printThis2();

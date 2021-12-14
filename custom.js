let button1 = document.getElementById('button1');
let button2 = document.getElementById('button2');
let button3 = document.getElementById('button3');
let para6 = document.querySelector('.para6');
let para3 = document.querySelector('.para3');
let para4 = document.querySelector('.para4');

button1.addEventListener('click',function () {
    para6.classList.add('xyz');
    para3.classList.remove('xyz');
    para4.classList.remove('xyz');
})

button2.addEventListener('click',function () {
     para6.classList.add('abc');
     para3.classList.add('xyz');
     para4.classList.add('abc');
    
})
button3.addEventListener('click',function () {
    para4.classList.add('xyz');
    para3.classList.add('abc');
    para6.classList.add('abc');
})
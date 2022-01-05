/* 🍀js12. menu-bar& navbar click , hide & active */

/*🍄
 1. font awesome change 
 2. active toggle
*/

let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

menu.onclick =()=>{
    menu.classList.toggle('fa-times'); /* font awesome change */
    navbar.classList.toggle('active');
}


// 🍀js22. slide-show

/* 
<🦄% operator>

1) 낮은 숫자를, 더 높은 숫자로 % 했을 때,  낮은 숫자 그대로를 return함

1%3 = 1
2%3 = 2
3%3 = 0

1%5 = 1
2%5 = 2
3%5 = 3
4%5 = 4

2) 낮은 숫자를, 더 높은 숫자로 % 했을 때, .... 나눈 후의 나머지 숫자 return

4%3 = 1
5%3 = 2
6%3 = 0
7%3 = 1
*/

/* 🦄  slide-show 공식
index = (index + 1) % slides.length;
index = (index - 1 + slides.length) % slides.length;

🍄
20. click, 현재 slide remove , 다음 slide active

30. slides.length = 3 (slide 3개 있어서..)
 
40. 다음페이지로 이동 : 
index = (index + 1) % slides.length;  
👉
1 % 3 = 1
2 % 3 = 2
3 % 3 = 0

50. 이전페이지로 이동 : 
index = (index - 1 + slides.length) % slides.length;
👉
0-1+3 = 2  % 3 = 2  (첫페이지 0)
2-1+3 = 4  % 3 = 1  (마지막페이지 2)
1-1+3 = 3  % 3 = 0
*/

let slides = document.querySelectorAll('.slide-container');
let index = 0;

console.log(slides);
console.log(slides.length); //3

function next() {
    slides[index].classList.remove('active');
     //🍉js22-40
    index = (index+1) % slides.length; // 1 2 0 
    console.log(index)
    slides[index].classList.add('active');
}

function prev() {
    slides[index].classList.remove('active');
     //🍉js22-50
    index = (index -1 + slides.length) % slides.length; //2 1 0 
    console.log(index)
    slides[index].classList.add('active');    
}
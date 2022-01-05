/* 🍚next
calculate price ,  subTotal, tax, Total

cart function

wish list

star function
*/


/* 🍀js12. menu-bar& navbar click , hide & active */

/*🍄
 1. font awesome change 
 2. active toggle
*/

const menu = document.querySelector('#menu-bar');
const navbar = document.querySelector('.navbar');

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

const slides = document.querySelectorAll('.slide-container');
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


// 🍀js39, featured images 선택 (옆의 다른 사진들, 메인화면에 보이게하기)

/*🦄 class이름으로 src찾아내기
document.querySelector('.~').src

~.getAttribute('src');
*/

/* 🍄
10 forEach : class "featured-image-1"가져옴

20 getAttribute('src') : 🦄

30 클릭한곳의 src...👉 class"big-imgae-1"의 src에 삽입 
*/

let featuredImage1 = document.querySelectorAll('.featured-image-1')
let featuredImage2 = document.querySelectorAll('.featured-image-2')
let featuredImage3 = document.querySelectorAll('.featured-image-3')

featuredImage1.forEach(
    image_1=>{
        image_1.addEventListener('click',()=>{
            let getSrc = image_1.getAttribute('src');

            document.querySelector('.big-image-1').src = getSrc;
        });
    }
);
featuredImage2.forEach(
    image_2=>{
        image_2.addEventListener('click',()=>{
            let getSrc = image_2.getAttribute('src');

            document.querySelector('.big-image-2').src = getSrc;
        });
    }
);
featuredImage3.forEach(
    image_3=>{
        image_3.addEventListener('click',()=>{
            let getSrc = image_3.getAttribute('src');

            document.querySelector('.big-image-3').src = getSrc;
        });
    }
);



//🍀 js100. rendering latest products

const boxContainer = document.querySelector('.products .box-container');

console.log(productsData)

renderProducts();
function renderProducts() {
    productsData.forEach((p_product)=>{        
        boxContainer.innerHTML += `    
            <div class="box">
                <div class="icons">
                    <button href="#" class="fas fa-heart"></button>             
                    <button href="#" class="fas fa-shopping-cart"></button>
                </div>
                <img src="${p_product.imgSrc}" alt="">
                <div class="content">
                    <h3>${p_product.name}</h3>
                    <div class="price">$${p_product.price} <span>$60</span></div>
                    <div class="stars">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="far fa-star"></i>
                    </div>
                    <div class="price">inventory: ${p_product.instock}</div>
                    <button class="btn" onclick="addToCart(${p_product.id})">add to cart</button>
                </div>
            </div>
        `  
    });  
}


let cart = [];

function addToCart(p_id) {
    
}

updateCart();
function updateCart() {
    
}
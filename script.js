/* 🍚next
cart page
wish list page
star function
*/

// const
const boxContainer = document.querySelector('.products .box-container');
const cartItemsEl = document.querySelector('.cart-items');
console.log(cartItemsEl)
const subtotalEl = document.querySelector('.subtotal')

console.log(productsData)

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

featuredImage1.forEach(p_image_1=>{p_image_1.addEventListener('click',()=>{
            let getSrc = p_image_1.getAttribute('src');

            document.querySelector('.big-image-1').src = getSrc;
        });
    });
    
featuredImage2.forEach(p_image_2=>{p_image_2.addEventListener('click',()=>{
            let getSrc = p_image_2.getAttribute('src');

            document.querySelector('.big-image-2').src = getSrc;
        });
    });

featuredImage3.forEach(p_image_3=>{p_image_3.addEventListener('click',()=>{
            let getSrc = p_image_3.getAttribute('src');

            document.querySelector('.big-image-3').src = getSrc;
        });
    });



//🍀 js100. rendering latest products

/* 
   🦄설명:
   https://github.com/IG-Kim2511/me_2021-1109-cloth-Shopping_Cart-ig-js
*/





console.log(productsData)

renderProducts();
function renderProducts() {
    productsData.forEach((p_product)=>{        
        boxContainer.innerHTML += `    
            <div class="box">
                <div class="icons">
                    <button href="#" class="fas fa-heart"></button>             
                    <button href="#" class="fas fa-shopping-cart"  onclick="addToCart(${p_product.id})"></button>
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
                    <a class="btn" onclick="addToCart(${p_product.id})">add to cart</a>
                </div>
            </div>
        `  
    });  
}

// 🍀js13. addToCart, 새로운 항목 numberOfUnit...object에 추가하기

// let cart =[];
let cart = JSON.parse(localStorage.getItem("CART")) || [];

/* 
   🦄설명:
   https://github.com/IG-Kim2511/me_2021-1109-cloth-Shopping_Cart-ig-js
*/


const notificationText = document.querySelector('.notification-text');

function addToCart(p_id) {    
        // 🍉js13-30
        if (cart.some((pp_item) => pp_item.id === p_id)) {      
      
            // alert(`This item is already on the cart`);

            changeNumberOfUnits('plus',p_id)                    
        } 
        // 🍉js13-20
        else {
            const item = productsData.find((pp_product) => pp_product.id === p_id);
    
            // cart.push(item);
            cart.push(
                {
                    ...item,
                    numberOfUnits: 1,
                }
            );
        }
        console.log(cart)
        updateCart(); 
}


// 🍀js13-40.update Cart
// 🍀js45. localStorage. save cart to local  storage
/* 
   🦄설명:
   https://github.com/IG-Kim2511/me_2021-1109-cloth-Shopping_Cart-ig-js
*/



function updateCart() {
    renderCartItems();
    renderSubtotal();
    
    // js 45-10, js45-20
    // localStorage.setItem('CART',cart);
    localStorage.setItem('CART',JSON.stringify(cart));    
}
updateCart();


// 🍀js13-40. renderCartItems :  cart에 아이템 render

/* 🍄
    onclick "changeNumberOfUnits" - 🥒js28
    onclick "removeItemFromCart" - 🥒js41
*/


function renderCartItems() {
     /* 클릭할때마다 초기화 (초기화안하면, + - 할때,  이전목록도 같이 render됨)*/
   cartItemsEl.innerHTML=""; 

    cart.forEach((pp_item)=>{
        cartItemsEl.innerHTML += `
            <div class="cart-item">
            <div class="item-info" onclick="removeItemFromCart(${pp_item.id})">
                <img src="${pp_item.imgSrc}" alt="${pp_item.name}">
                <h4>${pp_item.name}</h4>
            </div>
            <div class="unit-price">
                <small>$</small>${pp_item.price}
                <img src="./images/icons8-delete-128.png" alt="" class="delete"  onclick="removeItemFromCart(${pp_item.id})">
            </div>
            <div class="units">
                <div class="mybtn plus" onclick="changeNumberOfUnits('plus', ${pp_item.id})"><i class="fa-solid fa-plus"></i></div>           
                <div class="number">${pp_item.numberOfUnits}</div>
                <div class="mybtn minus" onclick="changeNumberOfUnits('minus', ${pp_item.id})"><i class="fa-solid fa-minus"></i></div>
            </div>
        </div>
        `
    });
}


// 🍀js28. + - 버튼 클릭한때, change Number Of Units, 
/* 
   🦄설명:
   https://github.com/IG-Kim2511/me_2021-1109-cloth-Shopping_Cart-ig-js
*/


function changeNumberOfUnits(action, id) {
    cart = cart.map((item) => {
      let numberOfUnits = item.numberOfUnits;
  
      if (item.id === id) {
        if (action === "minus" && numberOfUnits > 1) {
          numberOfUnits--;
        } else if (action === "plus" && numberOfUnits < item.instock) {
          numberOfUnits++;     
          
          showToast('added to cart','blue');
        }         
        else if (action === "plus" && numberOfUnits === item.instock) {
            // alert('out of stock');            
            showToast('out of stock','red');   
          }  
      }
  
      return {
        ...item,
  
        numberOfUnits: numberOfUnits, /* 🥒js3510. */
      // numberOfUnits,
      };
    });
  
    updateCart();
  }

  
  
//🦄 🍀js35. calculate, renderSubtotal 
/* 
   🦄설명:
   https://github.com/IG-Kim2511/me_2021-1109-cloth-Shopping_Cart-ig-js
*/


function renderSubtotal() {
    let totalPrice = 0;
    let totalItems = 0;

    cart.forEach((pp_item)=>{
        totalPrice += pp_item.price * pp_item.numberOfUnits;
        totalItems += pp_item.numberOfUnits;
    });

    // subtotalEl.innerHTML =  `Subtotal (0 items): $0`;
    subtotalEl.innerHTML =  `Subtotal (${totalItems} items): $ ${totalPrice.toFixed(2)}`;
}


// 🍀js41. remove item from cart
/* 
   🦄설명:
   https://github.com/IG-Kim2511/me_2021-1109-cloth-Shopping_Cart-ig-js
*/


function removeItemFromCart(p_id) {
    cart = cart.filter (pp_item => pp_item.id !== p_id);

    updateCart();    
}


//🍀  localStorage.clear(); /  location.reload();    
// 🥒js13-10,

const deleteAllBtn = document.querySelector('.delete-all-btn');
const checkoutBtn = document.querySelector('.checkoutBtn');

deleteAllBtn.addEventListener('click',()=>{
    localStorage.clear();
    location.reload();    
});

checkoutBtn.addEventListener('click',()=>{
    localStorage.clear();
    location.reload();    
   
    alert(`Thank you`);

});


//🍀 js110 toast (notification_ballon)

// 1)
/* 
const container = document.querySelector('.notification_ballon .container');

const notification_ballon = ()=>{
    container.setAttribute('style', 'display: flex;');    
    
    setTimeout(function(){
        container.setAttribute('style', 'display: none;');              
    }, 2000);
}; 
*/

// 2)
// function showToast(message) {
//     // Get the snackbar DIV
//     let x = document.getElementById("snackbar");
  
//     // Add the "show" class to DIV
//     x.className = "show";
  
//     // Update the message text
//     x.innerHTML = message;
  
//     // After 3 seconds, remove the show class from DIV
//     setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
//   }
  
// get the buttons
const toastBox = document.getElementById("toast-box");
const toast = document.createElement("div");

// create the toast element
toast.classList.add("toast");
toastBox.appendChild(toast);

function showToast(message,color) {
    toast.innerHTML = message;
    toast.style.backgroundColor = color;
    toast.classList.add("show");
    setTimeout(function(){ toast.classList.remove("show"); }, 3000);
}






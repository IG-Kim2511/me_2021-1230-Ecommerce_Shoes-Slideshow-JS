/* ๐next
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

/* ๐js12. menu-bar& navbar click , hide & active */

/*๐
 1. font awesome change 
 2. active toggle
*/

const menu = document.querySelector('#menu-bar');
const navbar = document.querySelector('.navbar');

menu.onclick =()=>{
    menu.classList.toggle('fa-times'); /* font awesome change */
    navbar.classList.toggle('active');
}


// ๐js22. slide-show

/* 
<๐ฆ% operator>

1) ๋ฎ์ ์ซ์๋ฅผ, ๋ ๋์ ์ซ์๋ก % ํ์ ๋,  ๋ฎ์ ์ซ์ ๊ทธ๋๋ก๋ฅผ returnํจ

1%3 = 1
2%3 = 2
3%3 = 0

1%5 = 1
2%5 = 2
3%5 = 3
4%5 = 4

2) ๋ฎ์ ์ซ์๋ฅผ, ๋ ๋์ ์ซ์๋ก % ํ์ ๋, .... ๋๋ ํ์ ๋๋จธ์ง ์ซ์ return

4%3 = 1
5%3 = 2
6%3 = 0
7%3 = 1
*/

/* ๐ฆ  slide-show ๊ณต์
index = (index + 1) % slides.length;
index = (index - 1 + slides.length) % slides.length;

๐
20. click, ํ์ฌ slide remove , ๋ค์ slide active

30. slides.length = 3 (slide 3๊ฐ ์์ด์..)
 
40. ๋ค์ํ์ด์ง๋ก ์ด๋ : 
index = (index + 1) % slides.length;  
๐
1 % 3 = 1
2 % 3 = 2
3 % 3 = 0

50. ์ด์ ํ์ด์ง๋ก ์ด๋ : 
index = (index - 1 + slides.length) % slides.length;
๐
0-1+3 = 2  % 3 = 2  (์ฒซํ์ด์ง 0)
2-1+3 = 4  % 3 = 1  (๋ง์ง๋งํ์ด์ง 2)
1-1+3 = 3  % 3 = 0
*/

const slides = document.querySelectorAll('.slide-container');
let index = 0;

console.log(slides);
console.log(slides.length); //3

function next() {
    slides[index].classList.remove('active');
     //๐js22-40
    index = (index+1) % slides.length; // 1 2 0 
    console.log(index)
    slides[index].classList.add('active');
}

function prev() {
    slides[index].classList.remove('active');
     //๐js22-50
    index = (index -1 + slides.length) % slides.length; //2 1 0 
    console.log(index)
    slides[index].classList.add('active');    
}


// ๐js39, featured images ์ ํ (์์ ๋ค๋ฅธ ์ฌ์ง๋ค, ๋ฉ์ธํ๋ฉด์ ๋ณด์ด๊ฒํ๊ธฐ)

/*๐ฆ class์ด๋ฆ์ผ๋ก src์ฐพ์๋ด๊ธฐ
document.querySelector('.~').src

~.getAttribute('src');
*/

/* ๐
10 forEach : class "featured-image-1"๊ฐ์ ธ์ด

20 getAttribute('src') : ๐ฆ

30 ํด๋ฆญํ๊ณณ์ src...๐ class"big-imgae-1"์ src์ ์ฝ์ 
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



//๐ js100. rendering latest products

/* 
   ๐ฆ์ค๋ช:
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

// ๐js13. addToCart, ์๋ก์ด ํญ๋ชฉ numberOfUnit...object์ ์ถ๊ฐํ๊ธฐ

// let cart =[];
let cart = JSON.parse(localStorage.getItem("CART")) || [];

/* 
   ๐ฆ์ค๋ช:
   https://github.com/IG-Kim2511/me_2021-1109-cloth-Shopping_Cart-ig-js
*/


const notificationText = document.querySelector('.notification-text');

function addToCart(p_id) {    
        // ๐js13-30
        if (cart.some((pp_item) => pp_item.id === p_id)) {      
      
            // alert(`This item is already on the cart`);

            changeNumberOfUnits('plus',p_id)                    
        } 
        // ๐js13-20
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
        notification_ballon();
}


// ๐js13-40.update Cart
// ๐js45. localStorage. save cart to local  storage
/* 
   ๐ฆ์ค๋ช:
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


// ๐js13-40. renderCartItems :  cart์ ์์ดํ render

/* ๐
    onclick "changeNumberOfUnits" - ๐ฅjs28
    onclick "removeItemFromCart" - ๐ฅjs41
*/


function renderCartItems() {
     /* ํด๋ฆญํ ๋๋ง๋ค ์ด๊ธฐํ (์ด๊ธฐํ์ํ๋ฉด, + - ํ ๋,  ์ด์ ๋ชฉ๋ก๋ ๊ฐ์ด render๋จ)*/
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


// ๐js28. + - ๋ฒํผ ํด๋ฆญํ๋, change Number Of Units, 
/* 
   ๐ฆ์ค๋ช:
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
        }         
        else if (action === "plus" && numberOfUnits === item.instock) {
            alert('out of stock');            
          }  
      }
  
      return {
        ...item,
  
        numberOfUnits: numberOfUnits, /* ๐ฅjs3510. */
      //   numberOfUnits,
      };
    });
  
    updateCart();
  }

  
  
//๐ฆ ๐js35. calculate, renderSubtotal 
/* 
   ๐ฆ์ค๋ช:
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


// ๐js41. remove item from cart
/* 
   ๐ฆ์ค๋ช:
   https://github.com/IG-Kim2511/me_2021-1109-cloth-Shopping_Cart-ig-js
*/


function removeItemFromCart(p_id) {
    cart = cart.filter (pp_item => pp_item.id !== p_id);

    updateCart();    
}


//๐  localStorage.clear(); /  location.reload();    
// ๐ฅjs13-10,

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


// js110 notification_ballon

const container = document.querySelector('.notification_ballon .container');

const notification_ballon = ()=>{
    container.setAttribute('style', 'display: flex;');    
    
    setTimeout(function(){
        container.setAttribute('style', 'display: none;');              
    }, 2000);
};
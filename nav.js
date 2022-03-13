// 🍀js10. navbar2 for the other pages
let navElem = document.querySelector(".nav");

navElem.innerHTML = `
        <header>
        <!-- 🍖js12 -->
        <div id="menu-bar" class="fas fa-bars"></div>

        <a href="./index.html" class="logo">nike</a>

        <!-- 🍖js12 -->
        <nav class="navbar">
            <a href="./index.html">home</a>            
            <a href="./cart.html">cart</a>        
            
        </nav>

        <div class="icons">
            <a href="./cart.html" class="fas fa-shopping-cart"></a>
            
            <a href="./mypage.html" class="fas fa-user"></a>
        </div>
        </header>                      
 `;

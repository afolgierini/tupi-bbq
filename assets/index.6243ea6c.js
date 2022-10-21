(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function d(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=d(e);fetch(e.href,t)}})();let l=new Date().getFullYear();const m=()=>`
        <div class="default">
            <div class="header">
                <div class="logo">
                    <p class="logoName">Tupi BBQ</p>
                </div>

                <div class="navOptions">
                <div class="options home">Home</div>
                <div class="options menu">Menu</div>
                <div class="options contact">Contact</div>
                </div>
            </div>

            <div class="main">
                
            </div>

            <div class="footer">
                <p>\xA9 Tupi BBQ <p class="year">${l}</p></p>
            </div>
        </div>
   `,p="/tupi-bbq/assets/img-home.545bd9d8.jpg",o=()=>`
    <div class="main-home">
        <p class="main-title">Brazilian barbecue as it's best!</p>
        <img class="main-img" src="${p}" alt="">
        <p class="main-description">Try now the incredible taste of the traditional Brazilian barbecue without a flight to Brazil.</p>
        <button class="main-btn">ORDER NOW</button>
    </div>
`,u="/tupi-bbq/assets/picanha.877a0d7b.jpg",v="/tupi-bbq/assets/chicken.12afcbb9.jpg",g="/tupi-bbq/assets/sausage.0ae53c7a.jpg",b="/tupi-bbq/assets/ribs.a8cbc9e5.jpg",f="/tupi-bbq/assets/chicken-heart.a66e3e0b.jpg",h="/tupi-bbq/assets/kafta.23d534de.jpg",y="/tupi-bbq/assets/garlic-bread.acc73ae0.jpg",q="/tupi-bbq/assets/vinagrete.8be1918b.jpg",i="/tupi-bbq/assets/add-to-cart-icon.8d12f6e7.svg",c=()=>`
        <p class="menu-title">Menu</p>
        <div class="main-menu">
            <div class="card">
                <div class="card-content">
                    <img src="${u}" alt="">
                </div>
                <div class="card-content-right">
                    <p class="card-title">Rump Cap</p>
                    <p class="card-description">Lorem ipsum dolor, sit amet consectetur adipisicing elit</p>
                    <div class="card-bottom">
                        <img src="${i}" alt="">
                    </div>
                </div>            
            </div>
            <div class="card">
                <div class="card-content">
                <img src="${v}" alt="">
                </div>
                <div class="card-content-right">
                <p class="card-title">Chicken</p>
                <p class="card-description">Lorem ipsum dolor, sit amet consectetur adipisicing elit</p>
                <div class="card-bottom">
                    <img src="${i}" alt="">
                </div>
                </div> 
            </div>
            <div class="card">
                <div class="card-content">
                <img src="${g}" alt="">
                </div>
                <div class="card-content-right">
                <p class="card-title">Sausage</p>
                <p class="card-description">Lorem ipsum dolor, sit amet consectetur adipisicing elit</p>
                <div class="card-bottom">
                    <img src="${i}" alt="">
                </div>
                </div> 
            </div>
            <div class="card">
                <div class="card-content">
                <img src="${b}" alt="">
                </div>
                <div class="card-content-right">
                <p class="card-title">Ribs</p>
                <p class="card-description">Lorem ipsum dolor, sit amet consectetur adipisicing elit</p>
                <div class="card-bottom">
                    <img src="${i}" alt="">
                </div>
                </div> 
            </div>
            <div class="card">
                <div class="card-content">
                <img src="${f}" alt="">
                </div>
                <div class="card-content-right">
                <p class="card-title">Chicken Heart</p>
                <p class="card-description">Lorem ipsum dolor, sit amet consectetur adipisicing elit</p>
                <div class="card-bottom">
                    <img src="${i}" alt="">
                </div>
                </div> 
            </div>
            <div class="card">
                <div class="card-content">
                <img src="${h}" alt="">
                </div>
                <div class="card-content-right">
                <p class="card-title">Kafta</p>
                <p class="card-description">Lorem ipsum dolor, sit amet consectetur adipisicing elit</p>
                <div class="card-bottom">
                    <img src="${i}" alt="">
                </div>
                </div> 
            </div>
            <div class="card">
                <div class="card-content">
                <img src="${y}" alt="">
                </div>
                <div class="card-content-right">
                <p class="card-title">Garlic Bread</p>
                <p class="card-description">Lorem ipsum dolor, sit amet consectetur adipisicing elit</p>
                <div class="card-bottom">
                    <img src="${i}" alt="">
                </div>
                </div> 
            </div>
            <div class="card">
                <div class="card-content">
                <img src="${q}" alt="">
                </div>
                <div class="card-content-right">
                <p class="card-title">Vinagrete</p>
                <p class="card-description">Lorem ipsum dolor, sit amet consectetur adipisicing elit</p>
                <div class="card-bottom">
                    <img src="${i}" alt="">
                </div>
                </div> 
            </div> 
        </div>
    `,L="/tupi-bbq/assets/location.345926d8.svg",$="/tupi-bbq/assets/phone.6d718f1f.svg",S=()=>`
      <p class="contact-title">Contact</p>
      <div class="main-contact">
         <div class="info">
            <div class="location">
               <img class="svg" src="${L}" alt="">  
               <p>You can find us almost everywhere in the world!</p>                     
            </div>
            <div class="email">
               <img src="${$}" alt="">
               <p>Check now in your local food delivery apps.</p>
            </div>
         </div>

         <div class="form">
            <form action="">
            <p>Leave us a message</p>         
            <div class="form-item">
                  <label for="name">Name</label>
                  <input type="text" name="name" required>
            </div>
            <div class="form-item">
                  <label for="email">Email</label>
                  <input type="email" name="email" required>
            </div>
            <div class="form-item">
                  <label for="message">Message</label>
                  <input type="text" name="message" required>
            </div>
            <div class="form-item">
                  <input class="form-btn" value="SEND" type="button" required>
            </div>
            </form>
         </div>
      </div> 
   `,H=()=>{const r=()=>{document.querySelector(".home").addEventListener("mouseup",s=>{document.querySelector(".main").innerHTML=o(),document.querySelector(".main-btn").addEventListener("mouseup",d=>{document.querySelector(".main").innerHTML=c()})}),document.querySelector(".menu").addEventListener("mouseup",s=>{document.querySelector(".main").innerHTML=c()}),document.querySelector(".main-btn").addEventListener("mouseup",s=>{document.querySelector(".main").innerHTML=c()}),document.querySelector(".contact").addEventListener("mouseup",s=>{document.querySelector(".main").innerHTML=S()})};document.querySelector("#app").innerHTML=m(),document.querySelector(".main").innerHTML=o(),r()};H();

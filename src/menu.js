import picanha from '../public/picanha.jpg'
import chicken from '../public/chicken.jpg'
import sausage from '../public/sausage.jpg'
import ribs from '../public/ribs.jpg'
import chickenHeart from '../public/chicken-heart.jpg'
import kafta from '../public/kafta.jpg'
import garlicBread from '../public/garlic-bread.jpg'
import vinagrete from '../public/vinagrete.jpg'
import addToCartSvg from '../public/add-to-cart-icon.svg'

export const renderMenu = () => {
    return `
        <p class="menu-title">Menu</p>
        <div class="main-menu">
            <div class="card">
                <div class="card-content">
                    <img src="${picanha}" alt="">
                </div>
                <div class="card-content-right">
                    <p class="card-title">Rump Cap</p>
                    <p class="card-description">Lorem ipsum dolor, sit amet consectetur adipisicing elit</p>
                    <div class="card-bottom">
                        <img src="${addToCartSvg}" alt="">
                    </div>
                </div>            
            </div>
            <div class="card">
                <div class="card-content">
                <img src="${chicken}" alt="">
                </div>
                <div class="card-content-right">
                <p class="card-title">Chicken</p>
                <p class="card-description">Lorem ipsum dolor, sit amet consectetur adipisicing elit</p>
                <div class="card-bottom">
                    <img src="${addToCartSvg}" alt="">
                </div>
                </div> 
            </div>
            <div class="card">
                <div class="card-content">
                <img src="${sausage}" alt="">
                </div>
                <div class="card-content-right">
                <p class="card-title">Sausage</p>
                <p class="card-description">Lorem ipsum dolor, sit amet consectetur adipisicing elit</p>
                <div class="card-bottom">
                    <img src="${addToCartSvg}" alt="">
                </div>
                </div> 
            </div>
            <div class="card">
                <div class="card-content">
                <img src="${ribs}" alt="">
                </div>
                <div class="card-content-right">
                <p class="card-title">Ribs</p>
                <p class="card-description">Lorem ipsum dolor, sit amet consectetur adipisicing elit</p>
                <div class="card-bottom">
                    <img src="${addToCartSvg}" alt="">
                </div>
                </div> 
            </div>
            <div class="card">
                <div class="card-content">
                <img src="${chickenHeart}" alt="">
                </div>
                <div class="card-content-right">
                <p class="card-title">Chicken Heart</p>
                <p class="card-description">Lorem ipsum dolor, sit amet consectetur adipisicing elit</p>
                <div class="card-bottom">
                    <img src="${addToCartSvg}" alt="">
                </div>
                </div> 
            </div>
            <div class="card">
                <div class="card-content">
                <img src="${kafta}" alt="">
                </div>
                <div class="card-content-right">
                <p class="card-title">Kafta</p>
                <p class="card-description">Lorem ipsum dolor, sit amet consectetur adipisicing elit</p>
                <div class="card-bottom">
                    <img src="${addToCartSvg}" alt="">
                </div>
                </div> 
            </div>
            <div class="card">
                <div class="card-content">
                <img src="${garlicBread}" alt="">
                </div>
                <div class="card-content-right">
                <p class="card-title">Garlic Bread</p>
                <p class="card-description">Lorem ipsum dolor, sit amet consectetur adipisicing elit</p>
                <div class="card-bottom">
                    <img src="${addToCartSvg}" alt="">
                </div>
                </div> 
            </div>
            <div class="card">
                <div class="card-content">
                <img src="${vinagrete}" alt="">
                </div>
                <div class="card-content-right">
                <p class="card-title">Vinagrete</p>
                <p class="card-description">Lorem ipsum dolor, sit amet consectetur adipisicing elit</p>
                <div class="card-bottom">
                    <img src="${addToCartSvg}" alt="">
                </div>
                </div> 
            </div> 
        </div>
    `
}
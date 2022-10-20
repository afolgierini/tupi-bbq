import { renderDefault } from './default'
import { renderHome } from './home'
import { renderMenu } from './menu'
import { renderContact } from './contact'

export const render = () => {    
    const addEvents = () => {
        document.querySelector('.home').addEventListener('mouseup', e => {
            document.querySelector('.main').innerHTML = renderHome();
            document.querySelector('.main-btn').addEventListener('mouseup', e => {
                document.querySelector('.main').innerHTML = renderMenu();

            })
        })
    
        document.querySelector('.menu').addEventListener('mouseup', e => {
            document.querySelector('.main').innerHTML = renderMenu();
        })
    
        document.querySelector('.main-btn').addEventListener('mouseup', e => {
            document.querySelector('.main').innerHTML = renderMenu();
        })
    
        document.querySelector('.contact').addEventListener('mouseup', e => {
            document.querySelector('.main').innerHTML = renderContact();
        })
    }


    document.querySelector('#app').innerHTML = renderDefault();
    document.querySelector('.main').innerHTML = renderHome();
    addEvents()
}

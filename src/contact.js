import locationSvg from '../public/location.svg';
import phoneSvg from '../public/phone.svg';

export const renderContact = () => {
   return `
      <p class="contact-title">Contact</p>
      <div class="main-contact">
         <div class="info">
            <div class="location">
               <img class="svg" src="${locationSvg}" alt="">  
               <p>You can find us almost everywhere in the world!</p>                     
            </div>
            <div class="email">
               <img src="${phoneSvg}" alt="">
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
   `
}
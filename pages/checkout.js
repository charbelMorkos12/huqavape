import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useStateContext } from '@/context/StateContext';
import { useRouter } from 'next/router';

function checkout() {
    const { totalPrice, totalQuantities, cartItems, setShowCart, toggleCartItemQuantity, onRemove } = useStateContext();

    const form = useRef();
    const router = useRouter();


    const sendEmail = (e) => {

      router.push("/success");

    e.preventDefault();

    emailjs.sendForm('service_f35kvws', 'template_79dvehd', form.current, 'FeBlGM0HsN5px34-0')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset();
      showResult(true);

   };
 
    return (
      <div className='checkout'>
      <div class="row">
      <div class="col-75">
        <div class="container form">
          <form ref={form} onSubmit={sendEmail}>
          
            <div class="row">
              <div class="col-50">
                <h2>Billing Details</h2>
                <label for="fname"><i class="fa fa-user"></i> Full Name</label>
                <input type="text" id="fname" name="firstname" placeholder="John M. Doe" required/>
                <label for="email"><i class="fa fa-envelope"></i> Email</label>
                <input type="text" id="email" name="email" placeholder="john@example.com" required/>
                <label for="adr"><i class="fa fa-address-card-o"></i> Address</label>
                <input type="text" id="adr" name="address" placeholder="Beirut" required/>
                <label for="adr"><i class="fa fa-address-card-o"></i> Street</label>
                <input type="text" id="adr" name="street" placeholder="Street name" required/>
                <label for="adr"><i class="fa fa-address-card-o"></i> Building</label>
                <input type="text" id="adr" name="building" placeholder="Building name" required/>
                <label for="adr"><i class="fa fa-address-card-o"></i> Floor</label>
                <input type="text" id="adr" name="floor" placeholder="Floor" required/>
                <label for="fnumber"><i class="fa fa-user"></i> Phone Number</label>
                <input type="number" id="fnumber" name="phonenumber" placeholder="+961 01 234 567" required/>
                <label for="fmessage"><i class="fa fa-user"></i>Additional Notes</label>
                <input type="text" id="fmessage" name="message" placeholder="Message..." />
                <h4>Currency I want to pay in:</h4>
                <label class="check-container">USD
                  <input type="checkbox" value="usd" name='usd'/>
                  <span class="checkmark"></span>
                </label>
                <label class="check-container">LBP
                  <input type="checkbox" value="lbp" name='lbp'/>
                  <span class="checkmark"></span>
                </label>
                {cartItems?.length >= 1 && cartItems.map((item) => (
                  <div>
                  <input name='items' className='hidden-input' type="text" value={item.name}/>
                  <input name='qty' className='hidden-input' type="text" value={item.quantity}/>
                  <br />
                  </div>
                ))}
                <input type="text" name="total" className='hidden-input' value={totalPrice} />
              </div>
            </div>
            <input type="submit" value="Place Order" class="bn632-hover bn26" />
          </form>
        </div>
      </div>
      <div class="col-25">
      <div class="container cart-box">
      <h4>Total Qty. <span class="price"><i class="fa fa-shopping-cart"></i> <b>{totalQuantities}</b></span></h4>
      {cartItems?.length >= 1 && cartItems.map((item) => (
        <div>
          <p>{item.name} <span class="price">${item.price}</span></p>
          <hr />
        </div>
      ))}
      <p>Total <span class="price"><b>${totalPrice}</b></span></p>
      </div>
      </div>
    </div>

    
      </div>
  )
}

export default checkout

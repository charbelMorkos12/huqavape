import React from 'react';
import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai';

function Footer() {
  return (
    <div className='footer-container'>
      <p>2023 <a href="https://wa.me/+96181627526 ">Charbel Morkos</a>. All rights reserved</p>
      <p className='icons'>
        <AiFillInstagram />
        <AiOutlineTwitter />
      </p>
    </div>
  )
}

export default Footer

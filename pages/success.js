import React, {useState, useEffect} from 'react';
import Link from 'next/link';
import {BsBagCheckFill} from 'react-icons/bs';
import { useStateContext } from '@/context/StateContext';
import { runFireworks } from '@/lib/utils';

const success = () => {

    const { setCartItems, setTotalPrice, setTotalQuantities  } = useStateContext();

    useEffect(() => {
        localStorage.clear();
        setCartItems([]);
        setTotalPrice(0);
        setTotalQuantities(0);
        runFireworks();
    }, []);

  return (
    <div className='success-wrapper'>
      <div className='success'>
        <p className='icon'>
            <BsBagCheckFill />
        </p>
        <h2>Thank you for your order !</h2>
        <p className='email-msg'>Your email is received and will be ready soon !</p>
        <p className='description'>
            If you have any questions. Contact Us:
            <a href="https://wa.me/+96171392434" className='email'>
                +961 71 392 434
            </a>
        </p>
        <Link href="/">
            <button type='button' width="300px" className='btn'>
                Continue Shopping
            </button>
        </Link>
      </div>
    </div>
  );
}

export default success;

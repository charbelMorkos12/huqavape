import React from 'react';
import Link from 'next/link';
import { AiOutlineShopping } from 'react-icons/ai';
import Image from 'next/image';
import { useRef } from "react";
import { FaBars, FaTimes, FaSearch } from "react-icons/fa";
import {Cart} from './';
import { useStateContext } from '@/context/StateContext';

function Navbar() {

	const {showCart, setShowCart, totalQuantities} = useStateContext();

  const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};


  return (
    <header>

	

      <div className="logo-img">
      <Link href='/'>
			<Image src="/logo.png" width={150} height={50} className="logo"/>
      </Link>
      </div>
			<nav ref={navRef}>
				<a href="/devices">Devices</a>
				<a href="/disposables">Disposable Vapes</a>
				<a href="/juices">Juices</a>
				<a href="/accessories">Accessories</a>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>

				<button type="button" className="cart-icon" onClick={() => setShowCart(true)}>
				<AiOutlineShopping />
				<span className="cart-item-qty">{totalQuantities}</span>
			  </button>

			  <Link href="/search">
			  <FaSearch  className='search-ic'/>
			  </Link>

			  {showCart && <Cart />}
			
			</nav>
			<button
				className="nav-btn nav-open"
				onClick={showNavbar}>
				<FaBars />
			</button>

    

		</header>
  )
}

export default Navbar

import React from 'react';
import Link from 'next/Link';
import { urlFor } from '@/lib/client';

function HeroBanner({heroBanner}) {
  return (
    <div className='hero-banner-container'>
      <p className='beats-solo'>{heroBanner.smallText}</p>
      <h3>{heroBanner.midText}</h3>
      <h1>{heroBanner.largeText1}</h1>
      <img src={urlFor(heroBanner.image)} alt="offer"  className='hero-banner-image'/>

      <div>
        <Link href="#home">
            <button type='button'>{heroBanner.buttonText}</button>
        </Link>

        <div className="desc">
            <p>{heroBanner.desc}</p>
        </div>

      </div>

    </div>
  )
}

export default HeroBanner

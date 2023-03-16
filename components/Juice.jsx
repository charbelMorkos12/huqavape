import React from 'react';
import Link from 'next/link';

import { urlFor } from '@/lib/client';

function Juice({ juice: { image, name, slug, price, availability } }) {
  return (
    <div>
      <Link href={`/juice/${slug.current}`}>
        <div className='product-card'>
          <img src={urlFor(image && image[0])} alt="product-image"  width={250} height={250} className="product-image"/>
          <p className="product-name">{name}</p>
          <p className='product-price'>${price}</p>
          <p className={`product-p ${availability ? "product-av" : "product-out"}`}>{availability ? 'Available' : 'Out Of Stock'}</p>
        </div>
      </Link>
    </div>
  )
}

export default Juice

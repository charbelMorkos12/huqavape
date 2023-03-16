import React from 'react';
import Link from 'next/link';

import { urlFor } from '@/lib/client';

function Product({ product: { image, name, slug, price, availability, device } }) {
  return (
    <div>
      <Link href={`/product/${slug.current}`}>
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

export default Product

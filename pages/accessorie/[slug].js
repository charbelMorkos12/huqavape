import React, { useState } from 'react';
import { urlFor, client } from '@/lib/client';
import { AiOutlineMinus, AiOutlinePlus, AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { Accessorie } from '@/components';
import { useStateContext } from '@/context/StateContext';
import Link from 'next/link';

const AccessorieDetails = ({ accessorie, accessories }) => {

    const { image, name, details, price, availability } = accessorie;
    const {decQty, incQty, qty, onAddAccessorie, setShowCart} = useStateContext();

    const [index, setIndex] = useState(0);

    const handleBuyNow = () => {
      onAddAccessorie(accessorie, qty);

      setShowCart(true);
    }

  return (
    <div>
    <div className="product-detail-container">
      <div>
        <div className="image-container">
          <img src={urlFor(image && image[index])} className="product-detail-image" />
        </div>
        <div className="small-images-container">
          {image?.map((item, i) => (
            <img 
              key={i}
              src={urlFor(item)}
              className={i === index ? 'small-image selected-image' : 'small-image'}
              onMouseEnter={() => setIndex(i)}
            />
          ))}
        </div>
      </div>

      <div className="product-detail-desc">
        <h1>{name}</h1>
        <p className={`product-p ${availability ? "product-av" : "product-out"}`}>{availability ? 'Available' : 'Out Of Stock'}</p>
        <div className="reviews">
          <div>
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
          </div>
          <p>
            (20)
          </p>
        </div>
        <h4>Details: </h4>
        <p>{details}</p>
        <p className="price">${price}</p>
        <div className="quantity">
          <h3>Quantity:</h3>
          <p className="quantity-desc">
          <span className="minus" onClick={decQty}><AiOutlineMinus /></span>
          <span className="num">{qty}</span>
          <span className="plus" onClick={incQty}><AiOutlinePlus /></span>
        </p>
        </div>
        <div className="buttons">
          <button type="button" className="add-to-cart" onClick={() => onAddAccessorie(accessorie, qty)}>Add to Cart</button>
          <Link href="/checkout">
          <button type="button" className={`product-p ${availability ? "product-av buy-now" : "product-out-btn buy-now"}`} onClick={handleBuyNow}>Buy Now</button>
          </Link>
        </div>
      </div>
    </div>

    <div className="maylike-products-wrapper">
        <h2>You may also like</h2>
        <div className="marquee">
          <div className="maylike-products-container track">
            {accessories.map((item) => (
              <Accessorie key={item._id} accessorie={item} />
            ))}
          </div>
        </div>
    </div>
  </div>
  );
}

export const getStaticPaths = async () => {
    const query = `*[_type == "accessorie"] {
      slug {
        current
      }
    }
    `;
  
    const accessories = await client.fetch(query);
  
    const paths = accessories.map((accessorie) => ({
      params: { 
        slug: accessorie.slug.current
      }
    }));
  
    return {
      paths,
      fallback: 'blocking'
    }
  }

export const getStaticProps = async ({ params: { slug } }) => {
    const query = `*[_type == "accessorie" && slug.current == '${slug}'][0]`;
    const accessoriesQuery = '*[_type == "accessorie"]';

    const accessorie = await client.fetch(query);
    const accessories = await client.fetch(accessoriesQuery);

    return {
      props: { accessories, accessorie }
    }
  }

export default AccessorieDetails;

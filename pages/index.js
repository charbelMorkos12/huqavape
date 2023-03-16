import React, {useState} from 'react';
import Image from 'next/image';
import { client } from '../lib/client';
import { Product, FooterBanner, HeroBanner, Device } from '../components';



const index = ({ products, bannerData, newData, devices }) => {
  return (
    <div>

      <HeroBanner heroBanner={bannerData.length && bannerData[1]}/>

      <div id='home' className='products-heading'>
        <h2>Best Selling Products</h2>
        <p>Choose of many variations</p>
      </div>

      
    <div className="products-container">
    {products?.map((product) => <Product key={product._id} product={product} />)}
  </div>

      <br />
      <br />
      <br />
      
      <div className='products-heading'>
        <h2>Categories</h2>
      </div>

      <div class='app-layout'>

        <a href="/devices">
        <div class='box tweets'>
        <Image src="/dev.png" width={30} height={30}/>
        <br />
        <p>Devices</p>
        </div>
        </a>

        <a href="/disposables">
        <div class='box replies'>
        <Image src="/dis.png" width={30} height={30}/>
        <br />
        <p>Disposable Vapes</p>
        </div>
        </a>

        <a href="/juices">
        <div class='box search'>
        <Image src="/juice.png" width={30} height={30}/>
        <br />
        <p>Juices</p>
        </div>
        </a>

        <a href="/accessories">
        <div class='box messages'>
        <Image src="/acc.png" width={30} height={30}/>
        <br />
        <p>Accessories</p>
        </div>
        </a>

      </div>
      

      <FooterBanner footerBanner={bannerData && bannerData[0]}/>

      <br />
      <br />
      <br />
      <br />

      <div class='app-layout'>

      <a href="/">
      <div class='box tweets'>
      <Image src="/del.png" width={30} height={30}/>
      <br />
      <p>Delivery <br /> Across All Lebanese Regions</p>
      </div>
      </a>

      <a href="/">
      <div class='box replies'>
      <Image src="/high.png" width={30} height={30}/>
      <br />
      <p>High Quality Products <br /> With Best Prices</p>
      </div>
      </a>

      <a href="#juices">
      <div class='box search'>
      <Image src="/supp.png" width={30} height={30}/>
      <br />
      <p>24/7 Support <br /> Contact Us On Whatsapp</p>
      </div>
      </a>

      <a href="/">
      <div class='box messages'>
      <Image src="/sec.png" width={30} height={30}/>
      <br />
      <p>Secure Payment <br /> Cash On Delivery</p>
      </div>
      </a>

    </div>

    <div id='home' className='products-heading'>
        <h2>New Collection</h2>
        <p>Shop Now</p>
    </div>

    <div className="products-container">
      {newData?.map((product) => <Product key={product._id} product={product} />)}
    </div>

    <br />
    <br />

    </div>
  );

}

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  const newQuery = '*[_type == "new"]';
  const newData = await client.fetch(newQuery);

  const deviceQuery = '*[_type == "device"]';
  const devices = await client.fetch(deviceQuery);

  return {
    props: { products, bannerData, newData, devices }
  }
}

export default index;

import React from 'react';
import Image from 'next/image';
import { client } from '../lib/client';
import { Accessorie } from '../components';


const accessories = ({ accessories }) => {

  return (
    <div>

      <div id='home' className='products-heading'>
        <h2>Accessories</h2>
        <p>Choose of many variations</p>
      </div>

      <div className="products-container">
      {accessories?.map((accessorie) => <Accessorie key={accessorie._id} accessorie={accessorie} />)}
      </div>


    </div>
  );

}

export const getServerSideProps = async () => {

  const accessorieQuery = '*[_type == "accessorie"]';
  const accessories = await client.fetch(accessorieQuery);

  return {
    props: { accessories }
  }
}

export default accessories;

import React from 'react';
import Image from 'next/image';
import { client } from '../lib/client';
import { Juice } from '../components';


const juices = ({ juices }) => {

  return (
    <div>

      <div id='home' className='products-heading'>
        <h2>Juices</h2>
        <p>Choose of many variations</p>
      </div>

      <div className="products-container">
      {juices?.map((juice) => <Juice key={juice._id} juice={juice} />)}
      </div>


    </div>
  );

}

export const getServerSideProps = async () => {

  const juiceQuery = '*[_type == "juice"]';
  const juices = await client.fetch(juiceQuery);

  return {
    props: { juices }
  }
}

export default juices;

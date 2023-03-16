import React from 'react';
import Image from 'next/image';
import { client } from '../lib/client';
import { Disposable } from '../components';


const disposables = ({ disposables }) => {

  return (
    <div>

      <div id='home' className='products-heading'>
        <h2>Disposables</h2>
        <p>Choose of many variations</p>
      </div>

      <div className="products-container">
      {disposables?.map((disposable) => <Disposable key={disposable._id} disposable={disposable} />)}
      </div>


    </div>
  );

}

export const getServerSideProps = async () => {

  const disposableQuery = '*[_type == "disposable"]';
  const disposables = await client.fetch(disposableQuery);

  return {
    props: { disposables }
  }
}

export default disposables;

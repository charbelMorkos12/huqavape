import React from 'react';
import Image from 'next/image';
import { client } from '../lib/client';
import { Device } from '../components';


const devices = ({ devices }) => {

  return (
    <div>

      <div id='home' className='products-heading'>
        <h2>Devices</h2>
        <p>Choose of many variations</p>
      </div>

      <div className="products-container">
      {devices?.map((device) => <Device key={device._id} device={device} />)}
      </div>


    </div>
  );

}

export const getServerSideProps = async () => {

  const deviceQuery = '*[_type == "device"]';
  const devices = await client.fetch(deviceQuery);

  return {
    props: { devices }
  }
}

export default devices;

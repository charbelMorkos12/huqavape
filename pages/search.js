import React, {useState} from 'react';
import Image from 'next/image';
import { urlFor, client } from '@/lib/client';
import { Product, FooterBanner, HeroBanner, Device, Accessorie, Disposable, Juice } from '../components';



const search = ({ products, bannerData, newData, devices,  newAccessorie, juices, disposables }) => {

  const [index, setIndex] = useState(0);
  const [search, setSearch] = useState('');
  return (
    <div>

    <input type="text" placeholder='Search Products' onChange={(e) => setSearch(e.target.value)}/>
    <div className="products-container">
      {products?.filter((product) => {
        return search.toLowerCase() === '' ? product : product.name.toLowerCase().includes(search);
      }).map((product) => (
        <Product key={product._id} product={product} />
      ))}
      {devices?.filter((device) => {
        return search.toLowerCase() === '' ? device : device.name.toLowerCase().includes(search);
      }).map((device) => (
        <Device key={device._id} device={device} />
      ))}
      {devices?.filter((device) => {
        return search.toLowerCase() === '' ? device : device.name.toLowerCase().includes(search);
      }).map((device) => (
        <Device key={device._id} device={device} />
      ))}
      {juices?.filter((juice) => {
        return search.toLowerCase() === '' ? juice : juice.name.toLowerCase().includes(search);
      }).map((juice) => (
        <Juice key={juice._id} juice={juice} />
      ))}
      {newAccessorie?.filter((accessorie) => {
        return search.toLowerCase() === '' ? accessorie : accessorie.name.toLowerCase().includes(search);
      }).map((accessorie) => (
        <Accessorie key={accessorie._id} accessorie={accessorie} />
      ))}
      {disposables?.filter((disposable) => {
        return search.toLowerCase() === '' ? disposable : disposable.name.toLowerCase().includes(search);
      }).map((disposable) => (
        <Disposable key={disposable._id} disposable={disposable} />
      ))}
  </div>
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

  const accessoriesQuery = '*[_type == "accessorie"]';
  const newAccessorie = await client.fetch(accessoriesQuery);

  const juiceQuery = '*[_type == "juice"]';
  const juices = await client.fetch(juiceQuery);

  const disposableQuery = '*[_type == "disposable"]';
  const disposables = await client.fetch(disposableQuery);

  return {
    props: { products, bannerData, newData, devices, newAccessorie, juices, disposables }
  }
}

export default search;

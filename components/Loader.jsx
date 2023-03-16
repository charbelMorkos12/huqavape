import React from 'react';
import Image from 'next/image';

function Loader() {
  return (
    <div>
      <Image src="/loader.gif" width={250} height={250}/>
      <h1>Loading....</h1>
    </div>
  )
}

export default Loader

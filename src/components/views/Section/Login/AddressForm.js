import React from 'react';

function ShopAdd({ address }) {
  return (
    <div>
      <div>
        <b>{address.username}</b>
        <p>{address.Pnumber}</p>
        <p>{address.ZipCode}</p>
        <p>{address.Address}</p>
        <p>{address.AddDetail}</p>
      </div>
    </div>
  );
}

export default ShopAdd;

import React from 'react';
import Assets from '../Assets';

const Report = ({ mintingAuth, freezingAuth, metadataStatus, transferFeeStatus }) => {
  return (
    <div className='space-y-1 lg:space-y-2 text-[6px] lg:text-sm'>
      <p className='flex items-center gap-2'>
        <img className='h-3 lg:h-4' src={Assets.ThumbUp} alt="" />
        Token Minting Authority is {mintingAuth ? 'Enabled' : 'Disabled'}
      </p>
      <p className='flex items-center gap-2'>
        <img className='h-3 lg:h-4' src={Assets.ThumbUp} alt="" />
        Token Freezing Authority is {freezingAuth ? 'Enabled' : 'Disabled'}
      </p>
      <p className='flex items-center gap-2'>
        <img className='h-3 lg:h-4' src={Assets.ThumbUp} alt="" />
        Token Metadata is {metadataStatus ? 'Mutable' : 'Immutable'}
      </p>
      <p className='flex items-center gap-2'>
        <img className='h-3 lg:h-4' src={Assets.ThumbUp} alt="" />
        Transfer Fee is {transferFeeStatus ? 'Modifiable' : 'Not Modifiable'}
      </p>
    </div>
  );
};

export default Report;

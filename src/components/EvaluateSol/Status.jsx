import React from 'react'
import Assets from '../Assets'

const Status = ({ holdersCount, currentLiquidity, lockedLiquidity, pairs }) => {
  return (
    <div className='space-y-2 lg:space-y-2'>
        <div className="text-[8px] lg:text-sm">
            <p>Holders</p>
            <p className=' lg:text-lg font-bold flex items-center gap-1'><img className='h-3 lg:h-4' src={Assets.Exclamatory} ></img> {holdersCount}</p>
        </div>
        <div className="text-[8px] lg:text-sm">
            <p>Current Liquidity</p>
            <p className=' lg:text-lg font-bold flex items-center gap-1'><img className='h-3 lg:h-4' src={Assets.Shield} ></img> ${currentLiquidity}</p>
        </div>
        <div className="text-[8px] lg:text-sm">
            <p>Locked Liquidity</p>
            <p className=' lg:text-lg font-bold flex items-center gap-1'><img className='h-3 lg:h-4' src={Assets.Shield} ></img> {lockedLiquidity}</p>
        </div>
        <div className="text-[8px] lg:text-sm">
            <p>Trading Pairs</p>
            <p className=' lg:text-lg font-bold flex items-center gap-1'><img className='h-3 lg:h-4' src={Assets.Caution} ></img> {pairs}</p>
        </div>
    </div>
  )
}

export default Status
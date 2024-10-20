import React from 'react'
import Assets from '../Assets'

// Define a function to return the correct icon based on risk value
const getRiskIcon = (risk) => {
    switch (risk) {
        case 0:
            return Assets.XVoilet;
        case 1:
            return Assets.Caution;
        case 2:
            return Assets.Exclamatory;
        case 3:
            return Assets.Dot;
        case 4:
            return Assets.ThumbUp;
        case 5:
            return Assets.Tick;
        case 6:
            return Assets.Star;
        case 7:
            return Assets.DotOutline;
        default:
            return Assets.XVoilet; // fallback icon if risk value is out of range
    }
};

const Info = ({ 
    holdersCount, 
    currentLiquidity, 
    lpHolders, 
    buyTax, 
    sellTax, 
    transferTax, 
    pairs, 
    holdersCountRisk, 
    currentLiquidityRisk, 
    lpHoldersRisk, 
    buyTaxRisk, 
    sellTaxRisk, 
    transferTaxRisk, 
    pairsRisk 
}) => {

    return (
        <div className="text-sm space-y-4">
            <div className="flex justify-between">
                <div className="text-center">
                    <p>Holders</p>
                    <div className="flex justify-center gap-1 items-center">
                        <img className='h-4' src={getRiskIcon(holdersCountRisk)} alt="" />
                        <p className='font-semibold text-xs'>{holdersCount}</p>
                    </div>
                </div>
                <div className="border-l-2 border-white/10 mx-3 self-stretch"></div>
                <div>
                    <p>Current Liquidity</p>
                    <div className="flex justify-center gap-1 items-center">
                        <img className='h-4' src={getRiskIcon(currentLiquidityRisk)} alt="" />
                        <p className='font-semibold text-xs'>${currentLiquidity}</p>
                    </div>
                </div>
                <div className="border-l-2 border-white/10 mx-3 self-stretch"></div>
                <div>
                    <p>LP Holders</p>
                    <div className="flex justify-center gap-1 items-center">
                        <img className='h-4' src={getRiskIcon(lpHoldersRisk)} alt="" />
                        <p className='font-semibold text-md'>{lpHolders}</p>
                    </div>
                </div>
                <div className="border-l-2 border-white/10 mx-3 self-stretch"></div>
                <div>
                    <p>Trading Pairs</p>
                    <div className="flex justify-center gap-1 items-center">
                        <img className='h-4' src={getRiskIcon(pairsRisk)} alt="" />
                        <p className='font-semibold text-md'>{pairs}</p>
                    </div>
                </div>
            </div>

            <div className="flex justify-center">
                <div>
                    <p>Buy Tax</p>
                    <div className="flex justify-center gap-1 items-center">
                        <img className='h-4' src={getRiskIcon(buyTaxRisk)} alt="" />
                        <p className='font-semibold text-md'>{buyTax}%</p>
                    </div>
                </div>
                <div className="border-l-2 border-white/10 mx-10 self-stretch"></div>
                <div>
                    <p>Sell Tax</p>
                    <div className="flex justify-center gap-1 items-center">
                        <img className='h-4' src={getRiskIcon(sellTaxRisk)} alt="" />
                        <p className='font-semibold text-md'>{sellTax}%</p>
                    </div>
                </div>
                <div className="border-l-2 border-white/10 mx-10 self-stretch"></div>
                <div>
                    <p>Transfer Tax</p>
                    <div className="flex justify-center gap-1 items-center">
                        <img className='h-4' src={getRiskIcon(transferTaxRisk)} alt="" />
                        <p className='font-semibold text-md'>{transferTax}%</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Info;

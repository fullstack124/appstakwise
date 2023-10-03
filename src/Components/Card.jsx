import React from 'react'

const Card = ({img,title,price,subprice,subtitle}) => {
    return (
            <div className="bg-[#27293d] py-4 rounded-lg shadow-lg  px-5">
                <div className="flex items-start justify-between ">
                    <div className='p-3 rounded-full' style={{ backgroundImage: "linear-gradient(90deg,#344675,#263148)" }}>
                        <img className='w-10' src="https://app.stakewise.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fseth2.bd96b075.png&w=256&q=75" alt="" />
                    </div>
                    <div>
                        <h1 className='font-medium text-right text-lg text-[#9a9a9a]'>Staking</h1>
                        <h1 className='font-medium text-right text-2xl text-white'>0.00 sETH2</h1>
                        <h1 className='font-medium text-right text-md text-blue-500'>$0.00</h1>
                    </div>
                </div>
                <div className='h-[2px] mt-5' style={{     backgroundImage: 'radial-gradient(circle,#579250 0,transparent 100%)' }}></div>
                <h1 className='font-medium text-md text-[#9a9a9a] my-2'>Your staked ETH balance</h1>
            </div>
    )
}

export default Card
import React from 'react'

const Stake = () => {
    return (
        <>
            <div className='flex items-center justify-center space-x-4 my-5'>
                <div className='p-3 rounded-full' style={{ backgroundImage: "linear-gradient(90deg,#344675,#263148)" }}>
                    <img className='w-10' src="https://app.stakewise.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Feth.6523b7cd.png&w=256&q=75" alt="" />
                </div>
                <div className='p-2 rounded-full' style={{ backgroundImage: "linear-gradient(135deg,#1d8cf8,#3358f4)" }}>
                    <svg class="w-4 h-4 fill-white" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="white   " d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"></path></svg>
                </div>
                <div className='p-3 rounded-full' style={{ backgroundImage: "linear-gradient(90deg,#344675,#263148)" }}>
                    <img className='w-10' src="https://app.stakewise.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fseth2.bd96b075.png&w=256&q=75" alt="" />
                </div>
            </div>
            <div className=''>
                <div className='flex items-center border border-[#2b3553] space-x-7   rounded-lg mx-4'>
                    <div className='flex items-center px-4 space-x-2'>
                        <img src="https://app.stakewise.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Feth.6523b7cd.png&w=256&q=75" alt="" className='w-5' />
                        <span className='font-semibold text-white text-xl'>ETH</span>
                    </div>
                    <input type="text" name="" placeholder='Enter Amount' className=' placeholder:text-[#d9d9d9] w-full outline-none border-none bg-transparent' id="" />
                    <button className='bg-blue-600 py-4 rounded-tr-lg rounded-br-lg px-4 font-medium text-lg text-white'>Max</button>
                </div>
            </div>
            <div className='mt-10 text-center space-y-3'>
                <h1 className='space-x-3'><span className='text-blue-500 text-lg'>Recipient </span> <span className='text-white font-medium text-xl'>-</span></h1>
                <h1 className='space-x-3'><span className='text-blue-500 text-lg'>Received Tokens </span> <span className='text-white font-medium text-md'>0.00 sETH2</span></h1>
                <h1 className='space-x-3'><span className='text-blue-500 text-lg'>Activation time </span> <span className='text-white font-medium text-md'>Immediate</span></h1>
            </div>

            <div className="mt-4 text-center">
                <span className='font-medium text-red-500 text-lg'>Wallet must be connected</span>
            </div>
            <div className="my-5 text-center">
                <button className="py-3 px-8 rounded-lg text-lg font-semibold text-white" style={{ background:'linear-gradient(to bottom left,#ff8d72,#ff6491,#ff8d72)' }}>Confirm</button>
            </div>
        </>
    )
}

export default Stake
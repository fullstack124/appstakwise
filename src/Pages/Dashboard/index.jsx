import React, { useState } from 'react'
import Card from '../../Components/Card'
import Map from '../../Components/Map'
import ReStack from '../../Components/ReStack'
import Graph from '../../Components/Graph'
import Footer from '../../Components/Footer'

const Dashboard = () => {

    const [sidebar, setSidebar] = useState(false)

    const showSidebar = () => {
        setSidebar(true);
    }
    const closedSidebar = () => {
        setSidebar(false);
    }
    return (
        <>
            <div className='flex'>
                <div className={`lg:w-[250px] lg:block  ${sidebar ? 'block' : 'hidden'} h-screen fixed`} style={{ background: 'linear-gradient(0deg,#3358f4,#1d8cf8)', zIndex: '999' }}>
                    <svg onClick={closedSidebar} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 ml-auto my-4 mx-6 lg:hidden block">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <div className="py-10 px-5 flex items-center justify-center space-x-3" >
                        <img src="https://app.stakewise.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fswise.475817f4.png&w=32&q=75" alt="" />
                        <span className='text-2xl font-bold'>StakeWise</span>
                    </div>
                    <div className="mt-10">
                        <ul>
                            <li>
                                <a href="" className='flex items-center space-x-3 bg-blue-700 py-2 px-4'>
                                    <svg class="text-white w-8" aria-hidden="true" focusable="false" data-prefix="fal" data-icon="rocket" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M188.9 372l-50.4-50.4c18.6-42.6 61.7-137.7 95.1-187C304.6 30.1 409 24.6 475.7 36.3c11.7 66.7 6.2 171.1-98.4 242c-49.4 33.5-145.5 75.6-188.4 93.7zm-79.9-62.8c-5.2 11.9-2.5 25.7 6.7 34.9l50.7 50.7c9.1 9.1 22.7 11.9 34.5 6.9c6.5-2.7 14.3-6 23-9.8L224 496c0 5.5 2.9 10.7 7.6 13.6s10.6 3.2 15.6 .7l101.5-50.7c21.7-10.8 35.4-33 35.4-57.2V312.1c4-2.5 7.7-4.9 11.3-7.3C516.1 222.9 520.1 100.9 506.7 28.1c-2.1-11.6-11.2-20.6-22.8-22.8C411.1-8.1 289.1-4.1 207.2 116.7c-2.4 3.6-4.9 7.3-7.3 11.3l-90.2 0c-24.2 0-46.4 13.7-57.2 35.4L1.7 264.8c-2.5 5-2.2 10.8 .7 15.6s8.1 7.6 13.6 7.6H118.5c-3.6 8-6.8 15.2-9.4 21.2zM256 470.1l0-92.5c30.3-13.7 65.4-30.3 96-47v71.7c0 12.1-6.8 23.2-17.7 28.6L256 470.1zM109.7 160h71.5c-16.9 30.7-34 65.8-48.1 96H41.9L81 177.7c5.4-10.8 16.5-17.7 28.6-17.7zM392 144a24 24 0 1 1 -48 0 24 24 0 1 1 48 0zM368 88a56 56 0 1 0 0 112 56 56 0 1 0 0-112z"></path></svg>
                                    <span className='text-xl text-white font-semibold'>Dashboard</span>
                                </a>
                            </li>
                            <li className='mt-4'>
                                <a href="" className='flex items-center space-x-3 hover:bg-blue-700 py-2 px-4'>
                                    <svg class="text-white w-8" aria-hidden="true" focusable="false" data-prefix="fal" data-icon="rocket" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M188.9 372l-50.4-50.4c18.6-42.6 61.7-137.7 95.1-187C304.6 30.1 409 24.6 475.7 36.3c11.7 66.7 6.2 171.1-98.4 242c-49.4 33.5-145.5 75.6-188.4 93.7zm-79.9-62.8c-5.2 11.9-2.5 25.7 6.7 34.9l50.7 50.7c9.1 9.1 22.7 11.9 34.5 6.9c6.5-2.7 14.3-6 23-9.8L224 496c0 5.5 2.9 10.7 7.6 13.6s10.6 3.2 15.6 .7l101.5-50.7c21.7-10.8 35.4-33 35.4-57.2V312.1c4-2.5 7.7-4.9 11.3-7.3C516.1 222.9 520.1 100.9 506.7 28.1c-2.1-11.6-11.2-20.6-22.8-22.8C411.1-8.1 289.1-4.1 207.2 116.7c-2.4 3.6-4.9 7.3-7.3 11.3l-90.2 0c-24.2 0-46.4 13.7-57.2 35.4L1.7 264.8c-2.5 5-2.2 10.8 .7 15.6s8.1 7.6 13.6 7.6H118.5c-3.6 8-6.8 15.2-9.4 21.2zM256 470.1l0-92.5c30.3-13.7 65.4-30.3 96-47v71.7c0 12.1-6.8 23.2-17.7 28.6L256 470.1zM109.7 160h71.5c-16.9 30.7-34 65.8-48.1 96H41.9L81 177.7c5.4-10.8 16.5-17.7 28.6-17.7zM392 144a24 24 0 1 1 -48 0 24 24 0 1 1 48 0zM368 88a56 56 0 1 0 0 112 56 56 0 1 0 0-112z"></path></svg>
                                    <span className='text-xl text-white font-semibold'>Form</span>
                                </a>
                            </li>
                            <li className='mt-4'>
                                <a href="" className='flex items-center space-x-3 hover:bg-blue-700 py-2 px-4'>
                                    <svg class="text-white w-8" aria-hidden="true" focusable="false" data-prefix="fal" data-icon="rocket" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M188.9 372l-50.4-50.4c18.6-42.6 61.7-137.7 95.1-187C304.6 30.1 409 24.6 475.7 36.3c11.7 66.7 6.2 171.1-98.4 242c-49.4 33.5-145.5 75.6-188.4 93.7zm-79.9-62.8c-5.2 11.9-2.5 25.7 6.7 34.9l50.7 50.7c9.1 9.1 22.7 11.9 34.5 6.9c6.5-2.7 14.3-6 23-9.8L224 496c0 5.5 2.9 10.7 7.6 13.6s10.6 3.2 15.6 .7l101.5-50.7c21.7-10.8 35.4-33 35.4-57.2V312.1c4-2.5 7.7-4.9 11.3-7.3C516.1 222.9 520.1 100.9 506.7 28.1c-2.1-11.6-11.2-20.6-22.8-22.8C411.1-8.1 289.1-4.1 207.2 116.7c-2.4 3.6-4.9 7.3-7.3 11.3l-90.2 0c-24.2 0-46.4 13.7-57.2 35.4L1.7 264.8c-2.5 5-2.2 10.8 .7 15.6s8.1 7.6 13.6 7.6H118.5c-3.6 8-6.8 15.2-9.4 21.2zM256 470.1l0-92.5c30.3-13.7 65.4-30.3 96-47v71.7c0 12.1-6.8 23.2-17.7 28.6L256 470.1zM109.7 160h71.5c-16.9 30.7-34 65.8-48.1 96H41.9L81 177.7c5.4-10.8 16.5-17.7 28.6-17.7zM392 144a24 24 0 1 1 -48 0 24 24 0 1 1 48 0zM368 88a56 56 0 1 0 0 112 56 56 0 1 0 0-112z"></path></svg>
                                    <span className='text-xl text-white font-semibold'>Contact</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='lg:ml-[250px] w-full container mx-auto md:px-6 px-6'>
                    <div className='flex items-center justify-between my-4 '>
                        <svg onClick={showSidebar} xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6 lg:hidden block cursor-pointer">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
                        </svg>
                        <div></div>
                        <div className='space-x-5'>
                            <button className='px-6 py-2 text-white font-semibold rounded-lg' style={{ background: 'linear-gradient(-45deg,#8f87eb,#453abd)' }}>Ethereum</button>
                            <button className='px-6 py-3 text-white font-semibold rounded-lg' style={{ background: 'linear-gradient(-45deg,#3358f4,#1d8cf8,#fd5d93,#ff8d72)  ' }}>Connect Wallet</button>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        <Card
                            img={'https://app.stakewise.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fseth2.bd96b075.png&w=256&q=75'}
                            price={'0.00 sETH2'}
                            subprice={'$0.00'}
                            subtitle={'Your reward ETH balance'}
                            title={'Staking'}
                        />
                        <Card
                            img={'https://app.stakewise.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fseth2.bd96b075.png&w=256&q=75'}
                            price={'0.00 sETH2'}
                            subprice={'$0.00'}
                            subtitle={'Your reward ETH balance'}
                            title={'Staking'}
                        />
                        <Card
                            img={'https://app.stakewise.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fseth2.bd96b075.png&w=256&q=75'}
                            price={'0.00 sETH2'}
                            subprice={'$0.00'}
                            subtitle={'Your reward ETH balance'}
                            title={'Staking'}
                        />
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2  gap-5 my-7'>
                        <div className='bg-[#27293d]'>
                            <h1 className='text-2xl text-white text-center py-3'>ETH Validators Map</h1>
                            <Map />
                            <div className="flex items-center justify-between container mx-auto px-10 bg-[#2d2f46] py-6">
                                <div>
                                    <div className='flex items-center'>
                                        <img src="https://app.stakewise.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Feth.6523b7cd.png&w=32&q=75" alt="" />
                                        <span className='text-xl font-semibold text-white'>85,199.03</span>
                                    </div>
                                    <h1 className='font-medium text-md text-[#9a9a9a] my-2'>Total ETH in Pool</h1>
                                </div>
                                <div className='text-center'>
                                    <div className='flex items-center justify-center'>
                                        <span className='text-xl font-semibold text-white'>10%</span>
                                    </div>
                                    <h1 className='font-medium text-md text-[#9a9a9a] my-2'>Staking Fee</h1>
                                </div>
                            </div>
                        </div>
                        <ReStack />
                    </div>
                    <Graph />
                    <Footer />
                </div>
            </div>
        </>
    )
}

export default Dashboard

import React from 'react'

const Map = () => {
  return (
    <div className='relative'>
        <img className='w-full h-[400px]' src="https://app.stakewise.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmap.cee7e42d.png&w=640&q=75" alt="" />
        <div className='absolute top-[20%] left-[20%]'>
            <div className='h-3 w-3 bg-blue-600 rounded-full'></div>
        </div>
        <div className='absolute top-[35%] left-[60%]'>
            <div className='h-3 w-3 bg-blue-600 rounded-full'></div>
        </div>
        <div className='absolute top-[35%] left-[40%]'>
            <div className='h-3 w-3 bg-blue-600 rounded-full'></div>
        </div>
        <div className='absolute top-[55%] left-[40%]'>
            <div className='h-3 w-3 bg-blue-600 rounded-full'></div>
        </div>
    </div>
  )
}

export default Map
import React, { useState } from 'react'
import Stake from './Stake'
import ReInvest from './ReInvest'

const ReStack = () => {

    const [reinvest, setReinvest] = useState(false);
    const [stake, setStake] = useState(true);

    const changeStake = () => {
        setReinvest(false)
        setStake(true)
    }
    const changeReinvest = () => {
        setReinvest(true)
        setStake(false)
    }
    return (
        <div className='bg-[#27293d]'>
            <div className=' grid grid-cols-1 md:grid-cols-2 gap-4 py-4 px-4'>
                <button onClick={changeStake} className="py-3 px-8 rounded-lg text-lg font-semibold text-white" style={{ background: stake ? 'linear-gradient(291deg, #3b3bdb, #1e1ed4, #ffffff00)' : '' }}>Stake</button>
                <button onClick={changeReinvest} className="py-3 px-8 rounded-lg text-lg font-semibold text-white" style={{ background: reinvest ? 'linear-gradient(291deg, #3b3bdb, #1e1ed4, #ffffff00)' : '' }}>Reinvest</button>
            </div>
            {stake && <Stake />}
            {reinvest && <ReInvest />}
        </div>
    )
}

export default ReStack
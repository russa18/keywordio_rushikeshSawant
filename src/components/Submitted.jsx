import React from 'react'

import Backdrop from '@mui/material/Backdrop';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const Submitted = () => {

    return (
        <Backdrop
            style={{ backgroundColor: 'rgba(255,255,255,.7)' }}
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={true}
        >
            <div className='w-[300px] h-[150px]  bg-white flex flex-col justify-center items-center shadow-slate-300 shadow-md  rounded-lg'>
                <CheckCircleIcon color='primary' />

                <p className='text-black font-bold'>Submitted</p>
            </div>
        </Backdrop>
    )
}

export default Submitted
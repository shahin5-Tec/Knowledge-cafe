import React from 'react';
import './Header.css'
import logo from '../../images/messi.avif'

const Header = () => {
    return (
        <div className='flex justify-between navbar lg:px-10 lg:py-3 rounded items-center bg-slate-200'>
           <div>
           <h2 className='text-3xl font-semibold ps-2'>Knowledge Cafe</h2>
           </div>
           <div >
            <img className='w-20 rounded-full' src={logo} alt="" />
           </div>
        </div>
    );
};

export default Header;
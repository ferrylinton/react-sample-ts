import { clsx } from 'clsx';
import React from 'react';
import { Link } from 'react-router-dom';
import CloseIcon from '../icons/CloseIcon';
import MenuIcon from '../icons/MenuIcon';


export default function Navbar() {

    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <>
            <nav className='flex-none fixed top-0 left-0 w-full h-[50px] bg-white border-b border-slate-300 flex items-center px-2 z-50 shadow-md shadow-gray-200 '>
                <div className='text-2xl font-bold uppercase'>logo</div>
                <div className='ml-auto flex items-center gap-2'>
                    <div className={`nav-menu ${isOpen ? 'open' : 'close'}`}>
                        <Link onClick={() => setIsOpen(false)} to='/'>Home</Link>
                        <Link onClick={() => setIsOpen(false)} to='/post'>Post</Link>
                        <Link onClick={() => setIsOpen(false)} to='/tag'>Tag</Link>
                        <Link onClick={() => setIsOpen(false)} to='/about'>About</Link>
                    </div>
                    <div onClick={() => setIsOpen(false)} className={clsx('bg-transparent fixed inset-0 z-[51] md:hidden', !isOpen && 'hidden')} />
                    <button type='button' onClick={() => setIsOpen(!isOpen)} className='md:hidden'>
                        {!isOpen && <MenuIcon className=' w-[35px] h-[35px]' />}
                        {isOpen && <CloseIcon className=' w-[35px] h-[35px]' />}
                    </button>
                </div>
            </nav>
        </>
    )
}
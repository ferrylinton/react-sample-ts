import { clsx } from 'clsx';
import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import CloseIcon from '../icons/CloseIcon';
import MenuIcon from '../icons/MenuIcon';
import LocaleMenu from './LocaleMenu';
import ProfileMenu from './ProfileMenu';


export default function Navbar() {

    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <nav className='flex-none fixed top-0 left-0 w-full h-[50px] bg-white border-b border-slate-300 flex items-center justify-center px-2 z-50 shadow-md shadow-gray-200 '>
            <div className='w-full md:max-w-2xl lg:max-w-4xl xl:max-w-6xl flex items-center justify-center'>
                <div className='text-2xl font-bold uppercase'>
                    <FormattedMessage id="app.name" defaultMessage={'Todo'} />
                </div>
                <div className='ml-auto flex items-center gap-2'>
                    <div className={`nav-menu ${isOpen ? 'open' : 'close'}`}>
                        <Link onClick={() => setIsOpen(false)} to='/'>
                            <FormattedMessage id="menu.home" defaultMessage={'Home'} />
                        </Link>
                        <Link onClick={() => setIsOpen(false)} to='/about'>
                            <FormattedMessage id="menu.about" defaultMessage={'About'} />
                        </Link>
                        <Link onClick={() => setIsOpen(false)} to='/author'>
                            <FormattedMessage id="menu.author" defaultMessage={'Author'} />
                        </Link>
                    </div>
                    <div onClick={() => setIsOpen(false)} className={clsx('bg-transparent fixed inset-0 z-[51] md:hidden', !isOpen && 'hidden')} />
                    <LocaleMenu />
                    <ProfileMenu/>
                    <button type='button' onClick={() => setIsOpen(!isOpen)} className='md:hidden'>
                        {!isOpen && <MenuIcon className=' w-[35px] h-[35px]' />}
                        {isOpen && <CloseIcon className=' w-[35px] h-[35px]' />}
                    </button>
                </div>
            </div>
        </nav>
    )
}
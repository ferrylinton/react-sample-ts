import { PropsWithChildren } from 'react';
import Navbar from './Navbar';


export default function Layout({ children }: PropsWithChildren) {
    return (
        <div className='flex flex-col w-full h-screen min-w-[350px] pt-[60px]'>
            <Navbar />
            <div className='w-full grow'>
                {children}
            </div>
            <footer className="w-full flex-none">
                <div className="w-full bg-white border-t border-slate-300">
                    <div className="text-center p-3">&copy; Copyright 2023 marmeam.com</div>
                </div>
            </footer>
        </div>
    )
}
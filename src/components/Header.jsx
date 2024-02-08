import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header className='bg-slate-200 shadow-lg'>
            <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
                <Link to='/'>
                <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
                    <span className='text-slate-500'>Toby</span>
                    <span className='text-slate-900'>Estate</span>
                </h1>
                </Link>
                <form className='bg-slate-100 p-3 rounded-lg flex items-center'>
                    <input type="text" 
                    placeholder='Search...' 
                    className='bg-transparent focus:outline-none w-24 sm:w-64'  />
                    <FaSearch className='text-black'/>
                </form>
                <ul className='flex gap-4'>
                    <Link to='/'>
                    <li className='hidden sm:inline text-slate-700 hover:underline hover:cursor-pointer hover:text-blue-400'>Home</li>
                    </Link>
                    <Link to='/about'>
                    <li className='hidden sm:inline text-slate-700 hover:underline hover:cursor-pointer hover:text-blue-400'>About</li>
                    </Link>
                    <Link to='/sign-in'>
                    <li className= 'text-slate-700 hover:underline hover:cursor-pointer hover:text-blue-400'>Sign-In</li>
                    </Link>
                </ul>
            </div>
            
        </header>
    )
}

import { FaSearch, FaBars } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import logo from '../images/slebg.png';

export default function Header() {
  const { currentUser } = useSelector((state) => state.user);
  const [searchTerm, setSearchTerm] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set('searchTerm', searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get('searchTerm');
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  }, [location.search]);

  return (
    <header className='bg-slate-200 shadow-md'>
      <div className='max-w-6xl mx-auto px-4 flex justify-between items-center h-16'>
        <div className='flex items-center'>
          <Link to='/'>
            <img src={logo} alt="logo" className="h-12 sm:h-16" />
          </Link>
        </div>

        <form onSubmit={handleSubmit} className='flex-grow max-w-xs sm:max-w-sm mx-4'>
          <div className='relative'>
            <input
              type='text'
              placeholder='Search...'
              className='bg-transparent focus:outline-none w-full px-3 py-1.5 pr-10 rounded-lg border border-slate-300'
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button type='submit' className='absolute right-2 top-1.5'>
              <FaSearch className='text-slate-600' />
            </button>
          </div>
        </form>

        <div className='flex items-center space-x-4'>
          <button className='sm:hidden' onClick={() => setMenuOpen(!menuOpen)}>
            <FaBars className='text-slate-600' />
          </button>

          <nav className={`${menuOpen ? 'flex' : 'hidden'} flex-col sm:flex sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 absolute sm:static top-16 left-0 w-full sm:w-auto bg-slate-200 sm:bg-transparent shadow-md sm:shadow-none p-4 sm:p-0 z-10`}>
            <Link to='/' className='text-slate-700'>
              Home
            </Link>
            <Link to='/about' className='text-slate-700'>
              About
            </Link>
            {currentUser && (
              <Link to='/contacts' className='text-slate-700'>
                Contact
              </Link>
            )}
            {currentUser && (
              <Link to='/create-listing' className='text-slate-700'>
                Add Listing
              </Link>
            )}
          </nav>

          <Link to='/profile'>
            {currentUser ? (
              <img
                className="rounded-full h-7 w-7 object-cover"
                src={currentUser.avatar}
                alt='profile'
              />
            ) : (
              <span className='text-slate-700'>
                Sign in
              </span>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
}

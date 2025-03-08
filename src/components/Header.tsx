import { Link } from "react-router-dom";
import { useState } from "react";

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Header = ({ darkMode, toggleDarkMode }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className='sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-md'>
      <div className='container mx-auto px-4 py-4 flex justify-between items-center'>
        <Link
          to='/'
          className='text-2xl font-bold text-primary dark:text-white'
        >
          Xavier
        </Link>

        {/* Desktop Navigation */}
        <nav className='hidden md:flex space-x-8'>
          <Link
            to='/'
            className='text-gray-700 hover:text-primary dark:text-gray-300 dark:hover:text-white'
          >
            Home
          </Link>
          <Link
            to='/about'
            className='text-gray-700 hover:text-primary dark:text-gray-300 dark:hover:text-white'
          >
            About
          </Link>
          <Link
            to='/projects'
            className='text-gray-700 hover:text-primary dark:text-gray-300 dark:hover:text-white'
          >
            Projects
          </Link>
          <Link
            to='/blog'
            className='text-gray-700 hover:text-primary dark:text-gray-300 dark:hover:text-white'
          >
            Blog
          </Link>
          <Link
            to='/contact'
            className='text-gray-700 hover:text-primary dark:text-gray-300 dark:hover:text-white'
          >
            Contact
          </Link>
        </nav>

        <div className='flex items-center space-x-4'>
          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className='p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700'
            aria-label='Toggle dark mode'
          >
            {darkMode ? (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5 text-yellow-400'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z'
                />
              </svg>
            ) : (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5 text-gray-700'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z'
                />
              </svg>
            )}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className='md:hidden p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700'
            aria-label='Toggle menu'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6 text-gray-700 dark:text-gray-300'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M4 6h16M4 12h16M4 18h16'
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className='md:hidden bg-white dark:bg-gray-800 shadow-lg'>
          <div className='container mx-auto px-4 py-2 flex flex-col space-y-3'>
            <Link
              to='/'
              className='py-2 text-gray-700 hover:text-primary dark:text-gray-300 dark:hover:text-white'
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              to='/about'
              className='py-2 text-gray-700 hover:text-primary dark:text-gray-300 dark:hover:text-white'
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link
              to='/projects'
              className='py-2 text-gray-700 hover:text-primary dark:text-gray-300 dark:hover:text-white'
              onClick={toggleMenu}
            >
              Projects
            </Link>
            <Link
              to='/blog'
              className='py-2 text-gray-700 hover:text-primary dark:text-gray-300 dark:hover:text-white'
              onClick={toggleMenu}
            >
              Blog
            </Link>
            <Link
              to='/contact'
              className='py-2 text-gray-700 hover:text-primary dark:text-gray-300 dark:hover:text-white'
              onClick={toggleMenu}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

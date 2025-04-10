// src/components/Navbar.jsx
import { Link, NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-gray-900 p-4 sticky top-0 z-50">
      <Link 
        to="#main-content" 
        className="sr-only focus:not-sr-only absolute bg-blue-600 text-white px-4 py-2 rounded"
      >
        Skip to main content
      </Link>

      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link 
          to="/" 
          className="text-2xl font-bold text-white focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
          aria-label="Home"
        >
          Omega AI
        </Link>

        <div className="hidden md:flex space-x-6">
          <NavLink 
            to="/about" 
            className={({ isActive }) => 
              `text-gray-300 hover:text-white px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                isActive ? 'text-blue-400' : ''
              }`
            }
          >
            About
          </NavLink>
          <NavLink 
            to="/projects" 
            className={({ isActive }) => 
              `text-gray-300 hover:text-white px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                isActive ? 'text-blue-400' : ''
              }`
            }
          >
            Projects
          </NavLink>
          <NavLink 
            to="/download" 
            className={({ isActive }) => 
              `text-gray-300 hover:text-white px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                isActive ? 'text-blue-400' : ''
              }`
            }
          >
            Download
          </NavLink>
          <NavLink 
            to="/upgrade" 
            className={({ isActive }) => 
              `text-gray-300 hover:text-white px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                isActive ? 'text-blue-400' : ''
              }`
            }
          >
            Upgrade
          </NavLink>
          <NavLink 
            to="/contact" 
            className={({ isActive }) => 
              `text-gray-300 hover:text-white px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                isActive ? 'text-blue-400' : ''
              }`
            }
          >
            Contact
          </NavLink>
        </div>

        <button 
          className="md:hidden text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-expanded="false"
          aria-haspopup="true"
        >
          <svg 
            className="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M4 6h16M4 12h16M4 18h16" 
            />
          </svg>
        </button>
      </div>
    </nav>
  );
}


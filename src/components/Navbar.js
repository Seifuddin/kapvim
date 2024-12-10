'use client'; // Ensures interactivity in the navbar

import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-gray-800 sticky top-0 z-50 shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <h1 className="text-white font-bold text-xl">MyWebsite</h1>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-4">
                        <Link href="/" className="text-gray-300 hover:text-white">
                            Home
                        </Link>
                        <Link href="/about" className="text-gray-300 hover:text-white">
                            About Us
                        </Link>
                        <Link href="/services" className="text-gray-300 hover:text-white">
                            Services
                        </Link>
                        <Link href="/contact" className="text-gray-300 hover:text-white">
                            Contact Us
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="text-gray-300 hover:text-white focus:outline-none"
                        >
                            <svg
                                className="h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-gray-800">
                    <div className="px-2 pt-2 pb-3 space-y-1">
                        <Link href="/" className="block text-gray-300 hover:text-white">
                            Home
                        </Link>
                        <Link href="/about" className="block text-gray-300 hover:text-white">
                            About Us
                        </Link>
                        <Link href="/services" className="block text-gray-300 hover:text-white">
                            Services
                        </Link>
                        <Link href="/contact" className="block text-gray-300 hover:text-white">
                            Contact Us
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
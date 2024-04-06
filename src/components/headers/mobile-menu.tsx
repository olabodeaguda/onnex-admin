import { ChevronDownIcon } from '@heroicons/react/16/solid';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

export const MobileMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isManagedIdentityOpen, setisManagedIdentityOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const toggleManagedIdentityOpen = () => setisManagedIdentityOpen(!isManagedIdentityOpen);


    return (
        <div className="relative inline-block text-left">
            <button
                className="inline-flex justify-center w-full focus:outline-none focus:ring-2"
                onClick={toggleMenu}
            >
                <svg
                    className="fill-white h-5 w-5 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                >
                    <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
                </svg>
            </button>

            {isOpen && (
                <div className="origin-top-left absolute right-[-0.697rem] mt-2  rounded-md shadow-lg
                 bg-white ring-1 ring-black ring-opacity-5 w-[97vw]">
                    <div className="py-1">
                        <NavLink to="/" onClick={toggleMenu} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                            <div className='flex items-center  space-x-1'>
                                <svg className="menu-svg" xmlns="http://www.w3.org/2000/svg" width="24"
                                    height="24" viewBox="0 0 24 24">
                                    <path d="M3 3v8h8V3H3zm6 6H5V5h4v4zm-6 4v8h8v-8H3zm6 6H5v-4h4v4zm4-16v8h8V3h-8zm6 6h-4V5h4v4zm-6 4v8h8v-8h-8zm6 6h-4v-4h4v4z" />
                                </svg>
                                <span className="text-xs text-gra">Dashboard</span>
                            </div>
                        </NavLink>
                    </div>
                    <div>
                        <button onClick={toggleManagedIdentityOpen} className="flex items-center px-4  cursor-pointer space-x-1 text-black">
                            <svg className='menu-svg' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M4 18v-.65c0-.34.16-.66.41-.81C6.1 15.53 8.03 15 10 15c.03 0 .05 0 .08.01.1-.7.3-1.37.59-1.98-.22-.02-.44-.03-.67-.03-2.42 0-4.68.67-6.61 1.82-.88.52-1.39 1.5-1.39 2.53V20h9.26c-.42-.6-.75-1.28-.97-2H4zm6-6c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm10.75 10c0-.22-.03-.42-.06-.63l1.14-1.01-1-1.73-1.45.49c-.32-.27-.68-.48-1.08-.63L18 11h-2l-.3 1.49c-.4.15-.76.36-1.08.63l-1.45-.49-1 1.73 1.14 1.01c-.03.21-.06.41-.06.63s.03.42.06.63l-1.14 1.01 1 1.73 1.45-.49c.32.27.68.48 1.08.63L16 21h2l.3-1.49c.4-.15.76-.36 1.08-.63l1.45.49 1-1.73-1.14-1.01c.03-.21.06-.41.06-.63zM17 18c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" /></svg>
                            <span className="text-xs"> Manage Identity
                            </span>
                            <ChevronDownIcon
                                strokeWidth={2.5}
                                className={`h-3 w-3 transition-transform ${isManagedIdentityOpen ? "rotate-180" : ""}`}
                            />
                        </button>
                        {isManagedIdentityOpen && (<div className='flex flex-col ml-4'>
                            <NavLink to="identity/client" onClick={toggleMenu} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                                <div className='flex items-center space-x-1'>
                                    <svg className='menu-svg' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 7V3H2v18h20V7H12zm-2 12H4v-2h6v2zm0-4H4v-2h6v2zm0-4H4V9h6v2zm0-4H4V5h6v2zm10 12h-8V9h8v10zm-2-8h-4v2h4v-2zm0 4h-4v2h4v-2z" /></svg>
                                    <span className="text-xs"> Client</span>
                                </div>
                            </NavLink>
                            <NavLink to="identity/users" onClick={toggleMenu} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                                <div className='flex items-center space-x-1'>
                                    <svg className="menu-svg" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M9 13.75c-2.34 0-7 1.17-7 3.5V19h14v-1.75c0-2.33-4.66-3.5-7-3.5zM4.34 17c.84-.58 2.87-1.25 4.66-1.25s3.82.67 4.66 1.25H4.34zM9 12c1.93 0 3.5-1.57 3.5-3.5S10.93 5 9 5 5.5 6.57 5.5 8.5 7.07 12 9 12zm0-5c.83 0 1.5.67 1.5 1.5S9.83 10 9 10s-1.5-.67-1.5-1.5S8.17 7 9 7zm7.04 6.81c1.16.84 1.96 1.96 1.96 3.44V19h4v-1.75c0-2.02-3.5-3.17-5.96-3.44zM15 12c1.93 0 3.5-1.57 3.5-3.5S16.93 5 15 5c-.54 0-1.04.13-1.5.35.63.89 1 1.98 1 3.15s-.37 2.26-1 3.15c.46.22.96.35 1.5.35z" /></svg>
                                    <span className="text-xs"> Users</span>
                                </div>
                            </NavLink>
                        </div>)
                        }
                    </div>
                </div>
            )}
        </div>
    );
};

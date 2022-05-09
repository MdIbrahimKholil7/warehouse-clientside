import React, { useState } from 'react';
import logo from '../../../img/skcargo.png'
import CustomLink from './CustomLink';
import { signOut } from 'firebase/auth';
import './Header.css'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../_firebase.init';
import { MenuIcon, XIcon } from '@heroicons/react/solid';
import EmailBox from './EmailBox/EmailBox';
const Header = () => {
    const [user] = useAuthState(auth)
    const [open, setOpen] = useState(false)
    const menu = [
        { name: 'Home', path: '/', id: 1 },
        { name: 'About', path: '/about', id: 2 },
        { name: 'Blog', path: '/blog', id: 3 },

    ]
    const login = [
        { name: 'Login', path: '/login', id: 4 },
        { name: 'Register', path: '/register', id: 5 },
    ]
    const addItem = [
        { name: 'Manage Items', path: '/mangeItems', id: 1 },
        { name: 'My Items', path: '/myItems', id: 2 },
        { name: 'Add Items', path: '/addItem', id: 3 },
    ]
    return (
       <>
         <EmailBox/>
         <div className='sticky-top sticky-nav'>
            <div className='header text-white relative'>
                <div className='container static'>
                    <div className=' py-3 w-100'>
                        <div className='w-100 h-100 '>
                            <div className="navbar">
                                <div>
                                    <img className='logo' src={logo} alt="" />
                                </div>
                                <nav>
                                    <ul className={`menu  ${open ? 'menu' : 'close-menu'}`}>
                                        {
                                            menu.map(item => <li className='' key={item.id}>
                                                <CustomLink className='text-white text-decoration-none' to={item.path}>
                                                    {item.name}
                                                </CustomLink>
                                            </li>)
                                        }
                                        {
                                            user && addItem.map(item => <li key={item.id}>
                                                <CustomLink className='text-white text-decoration-none' to={item.path}>
                                                    {item.name}
                                                </CustomLink>
                                            </li>
                                            )

                                        }
                                        {
                                            user ? <><li className='signout' onClick={() => signOut(auth)}>Sign Out</li></> : login.map(login => <li key={login.id}>
                                                <CustomLink className='text-white text-decoration-none' to={login.path}> {login.name}</CustomLink>
                                            </li>)
                                        }
                                    </ul>
                                </nav>
                                <div className='d-lg-none d-block' onClick={() => setOpen(!open)}>
                                    {
                                        open ? <XIcon className='icon' /> : <MenuIcon className='icon' />
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

       </>
    );
};

export default Header;
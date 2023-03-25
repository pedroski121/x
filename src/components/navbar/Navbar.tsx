import React from 'react'
import Link from 'next/link'
import { HomeIcon } from '@components/HomeIcon'
import NavbarCss from './NavBar.module.css';

export const NavBar = () => {
   return (<>
      <nav className="py-1 bg-light border-bottom" data-testid="nav_bar">
         <div className="container d-flex flex-wrap justify-content-between">
            <HomeIcon iconColor='text-dark' />
            <ul className="nav">
               <li className="nav-item position-relative">
                  <Link href="/" className='nav-link link-dark px-2'>
                     Bag<sup className={`${NavbarCss.dot}`}>•</sup>
                  </Link>

               </li>
               <li className="nav-item dropdown">
                  <Link href="#" className="nav-link dropdown-toggle link-dark" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown"
                     aria-expanded="false" >
                     Hi <span className='fw-bold'>Pedro</span>
                  </Link>

                  <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                     <Link href="#" className="dropdown-item">
                        Profile
                     </Link>

                     <Link href="#" className="dropdown-item">
                        Wishlist
                     </Link>

                     <Link href="#" className="dropdown-item">
                        Settings
                     </Link>

                     <Link href="#" className="dropdown-item">
                        Sign Out
                     </Link>

                  </ul>
               </li>
            </ul>



         </div>
      </nav>

   </>)
}

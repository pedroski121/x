import React from 'react'
import Link from 'next/link'
import { HomeIcon } from '@components/HomeIcon'
import NavbarCss from './NavBar.module.css';
import { useDynamicPath } from '@hooks/useDynamicPath';

import { useBagCheck } from '@hooks/useBagCheck';
export const NavBar = () => {
   const { bagEmptyStatus } = useBagCheck()
   const {currentPagePath}:{currentPagePath:string} = useDynamicPath()
   return (<>
      <nav className="py-1 bg-light border-bottom" data-testid="nav_bar">
         <div className="container d-flex flex-wrap justify-content-between">
            <HomeIcon iconColor='text-dark' />
            <ul className="nav">
               <li className="nav-item position-relative">
                  <Link href="/bag" className='nav-link link-dark px-2'>
                     Bag {
                        bagEmptyStatus() ? <></> : <sup className={`${NavbarCss.dot}`}>•</sup>
                     }
                  </Link>

               </li>
               <li className="nav-item dropdown">
                  <Link href="#" className="nav-link dropdown-toggle link-dark" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown"
                     aria-expanded="false" >
                     Hi <span className='fw-bold'>John</span>
                  </Link>

                  <ul className="dropdown-menu dropdown-menu-dark text-center p-0" aria-labelledby="navbarDarkDropdownMenuLink">
                     <Link href="/account" className={`dropdown-item ${NavbarCss.dropdown_link} fw-bold rounded-1 ${currentPagePath === '/account' ? 'bg-black': ''}`}>
                        My Account
                     </Link>

                     <Link href="/account/orders" className={`dropdown-item fw-bold ${NavbarCss.dropdown_link} ${currentPagePath === '/account/orders' ? 'bg-black': ''}`}>
                        Orders
                     </Link>

                     <Link href="#" className={`dropdown-item fw-bold ${NavbarCss.dropdown_link}`}>
                        Wishlist
                     </Link>
                     <li><hr className="dropdown-divider"/></li>

                     <Link href="#" className={`dropdown-item fw-bolder ${NavbarCss.dropdown_link} rounded-1 pb-2`}>
                        Sign Out
                     </Link>

                  </ul>
               </li>
            </ul>



         </div>
      </nav>

   </>)
}

import React, { FC } from 'react'
import Link from 'next/link'
import { useBag } from '@hooks/bag/useBag';
import { useCurrentUser } from '@hooks/account/auth/useCurrentUser';
import { useDynamicPath } from '@hooks/general/useDynamicPath';
import { HomeIcon } from '@components/HomeIcon'
import NavbarCss from './NavBar.module.css';

export const NavBar: FC = () => {
   const { bagItems } = useBag()
   const { currentPagePath }: { currentPagePath: string } = useDynamicPath()
   const currentUser = useCurrentUser()


   return (<>
      <nav className="py-1 bg-light border-bottom fixed-top" data-testid="nav_bar">
         <div className="container d-flex flex-wrap justify-content-between">
            <div> <HomeIcon /></div>
            <ul className="nav">
               <li className="nav-item position-relative">
                  <Link href="/bag" className='nav-link link-dark px-2'>
                     Bag {bagItems && bagItems.length !== 0 ? <sup className={`${NavbarCss.dot}`}>•</sup> : <></>}
                  </Link>

               </li>
               <li className="nav-item dropdown"> {
                  currentUser
                     ?
                     <> <Link href="#" className="nav-link dropdown-toggle link-dark" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown"
                        aria-expanded="false" >
                        <>Hi <span className='fw-bold'>{currentUser.firstName}</span></>

                     </Link>
                        <ul className="dropdown-menu dropdown-menu-dark text-center p-0" aria-labelledby="navbarDarkDropdownMenuLink">
                           <Link href="/account" className={`dropdown-item ${NavbarCss.dropdown_link} fw-bold rounded-1 ${currentPagePath === '/account' ? 'bg-black' : ''}`}>
                              My Account
                           </Link>

                           <Link href="/account/orders" className={`dropdown-item fw-bold ${NavbarCss.dropdown_link} ${currentPagePath === '/account/orders' ? 'bg-black' : ''}`}>
                              Orders
                           </Link>

                           <Link href="/account/wish-list" className={`dropdown-item fw-bold ${NavbarCss.dropdown_link} ${currentPagePath === '/account/wish-list' ? 'bg-black' : ''}`}>
                              Wishlist
                           </Link>
                           <li><hr className="dropdown-divider" /></li>

                           <Link href="#" className={`dropdown-item fw-bolder ${NavbarCss.dropdown_link} rounded-1 pb-2`}>
                              Sign Out
                           </Link>

                        </ul></>

                     :
                     <Link href="/account/sign-in" className="nav-link link-dark"
                        aria-expanded="false" >
                        <span className='fw-bold'>Sign In</span>

                     </Link>
               }</li>

            </ul>
         </div>
      </nav>

   </>)
}

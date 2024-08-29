import React, { FC } from 'react'
import Link from 'next/link'
import { useBag } from '@hooks/bag/useBag';
import { useCurrentUser } from '@hooks/account/auth/useCurrentUser';
import { useDynamicPath } from '@hooks/general/useDynamicPath';
import { HomeIcon } from '@components/HomeIcon'
import NavbarCss from './NavBar.module.css';
import Image from 'next/image';

export const NavBar: FC = () => {

   const { bagItems } = useBag()
   const { currentPagePath }: { currentPagePath: string } = useDynamicPath()
   const currentUser = useCurrentUser()


   return (<>

      <nav className="navbar navbar-expand-md bg-light p-0 fixed-top ">
         <div className="container-fluid p-0 ms-2">
            <HomeIcon />
            <form className="d-flex " style={{ width: "60%" }}>
               <input className={`form-control d-none d-sm-block me-2 border border-secondary shadow-none rounded-5 ${NavbarCss.search}`} type="search" placeholder="Search product or brand" aria-label="Search" />
               <button className="btn btn-outline-dark d-none d-sm-block" type="submit">
                  <i className="bi bi-search"></i>
               </button>

            </form>

            <div className="" id="navbarNav">
               <ul className="navbar-nav d-flex flex-row">
                  <li className="nav-item">

                     <Link href="£" className={`nav-link`}>
                        <i className={`bi bi-search icon d-block d-sm-none fs-5  mx-md-0  `}></i>
                     </Link>

                  </li>

                  <li className="nav-item">
                     <Link href="/account" className={`nav-link`}>
                        <i className={`bi bi-person icon fs-5  mx-md-0 ${currentPagePath === '/account' ? 'text-dark' : 'text-secondary'}`}></i>
                     </Link>
                  </li>

                  <li className="nav-item">
                     <Link href="/account/wish-list" className={`nav-link`}>
                        <i className={`bi bi-heart icon fs-5 me-1 mx-md-0  ${currentPagePath === '/account/wish-list' ? 'text-dark' : 'text-secondary'}`}></i>
                     </Link>

                  </li>

                  <li className="nav-item">
                     <Link className="nav-link" href="#">
                        <div className="position-relative d-inline-block">
                           <i className="bi bi-bag fs-5  mx-md-0"></i>
                           <span className="position-absolute top-0 start-100 translate-middle p-1 bg-secondary border border-light rounded-circle">
                              <span className="visually-hidden">New alerts</span>
                           </span>
                        </div>
                     </Link>
                  </li>
                  <li className="nav-item d-none d-md-block">
                     <button className="btn btn-dark rounded-5 me-1 mx-md-1 disabled" type="button">Checkout</button>
                  </li>

               </ul>

            </div>
         </div>
      </nav>
   </>)
}

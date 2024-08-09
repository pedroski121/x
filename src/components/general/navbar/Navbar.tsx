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

      <nav className="navbar navbar-expand-md navbar-light bg-light p-0 fixed-top ">
         <div className="container-fluid p-0 ms-2">

            <Link style={{ height: '60px' }} href='/'>
               <div style={{ height: "100%", width: "60px", position: "relative", backgroundColor: 'white' }}>
                  <Image src="/icons/SlucentLogo.svg" style={{ objectFit: "cover" }} alt={`Brand Icon`} fill />
               </div>
            </Link>
            <form className="d-flex " style={{ width: "60%" }}>
               <input className={`form-control d-none d-sm-block me-2 border border-secondary shadow-none rounded-5 ${NavbarCss.search}`} type="search" placeholder="Search product or brand" aria-label="Search" />
               <button className="btn btn-outline-dark d-none d-sm-block" type="submit">
                  <i className="bi bi-search"></i>
               </button>

            </form>
            {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
               <span className="navbar-toggler-icon"></span>
            </button> */}
            <div className="" id="navbarNav">
               <ul className="navbar-nav ms-auto d-flex flex-row">
                  <li className="nav-item">
                     {/* <a className="nav-link" href="#"><i className="bi bi-heart icon fs-5"></i></a> */}
                     <Link href="£" className={`nav-link`}>
                        <i className={`bi bi-search icon d-block d-sm-none fs-5 me-2 mx-md-0  `}></i>
                     </Link>

                  </li>

                  <li className="nav-item">
                     {/* <a className="nav-link" href="#"><i className="bi bi-person icon fs-5"></i></a> */}
                     <Link href="/account" className={`nav-link`}>
                        <i className={`bi bi-person icon fs-5  me-2 mx-md-0 ${currentPagePath === '/account' ? 'text-dark' : 'text-secondary'}`}></i>
                     </Link>
                  </li>

                  <li className="nav-item">
                     {/* <a className="nav-link" href="#"><i className="bi bi-heart icon fs-5"></i></a> */}
                     <Link href="/account/wish-list" className={`nav-link`}>
                        <i className={`bi bi-heart icon fs-5 me-2 mx-md-0  ${currentPagePath === '/account/wish-list' ? 'text-dark' : 'text-secondary'}`}></i>
                     </Link>

                  </li>
                  <li className="nav-item">
                     <a className="nav-link" href="#"><i className="bi bi-bag icon  fs-5"></i></a>
                  </li>
                  <li className="nav-item d-none d-md-block">
                     <button className="btn btn-dark rounded-5 me-2 mx-md-1 disabled" type="button">Checkout</button>
                  </li>
               </ul>
               {/* USE TO ADD NOTIFICATION BADGE ON AN ICON */}
               {/* <div className="position-relative d-inline-block">
                  <i className="bi bi-person"></i>
                  <span className="position-absolute top-0 start-100 translate-middle p-1 bg-danger border border-light rounded-circle">
                     <span className="visually-hidden">New alerts</span>
                  </span>
               </div> */}
            </div>
         </div>
      </nav>
   </>)
}

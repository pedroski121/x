import React, { FC } from 'react'
import Link from 'next/link'
import { useBag } from '@hooks/bag/useBag';
import { useDynamicPath } from '@hooks/general/useDynamicPath';
import { HomeIcon } from '@components/HomeIcon'
import { Search } from './Search';
import { usePathname } from 'next/navigation';
import { SignInButton, UserButton, SignOutButton, SignedIn, SignedOut } from '@clerk/nextjs';

export const NavBar: FC = () => {

   const { bagItems } = useBag()
   const { currentPagePath }: { currentPagePath: string } = useDynamicPath()
   const pathname = usePathname()
   return (<>

      <nav className="navbar navbar-expand-md bg-light p-0 fixed-top ">
         <div className="container-fluid p-0 ms-2">
            <HomeIcon />
            <Search />

            <div className="" id="navbarNav">
               <ul className="navbar-nav d-flex flex-row">
                  <li className="nav-item">
                     <Link href="£" className={`nav-link`}>
                        <i className={`bi bi-search icon d-block d-sm-none fs-5  mx-md-0  `}></i>
                     </Link>
                  </li>

                  <li className="nav-item">

                     <SignedIn>
                        <Link href="/account" className={`nav-link`}>
                           <i className={`bi bi-person fs-5 `}></i>
                        </Link>
                     </SignedIn>

                     <SignedOut>
                        <SignInButton mode='modal' forceRedirectUrl={pathname} >
                           <button className="nav-link border-0 bg-transparent">
                              <i className='bi bi-person fs-5'></i>
                           </button>
                        </SignInButton>

                     </SignedOut>
                  </li>

                  <li className="nav-item">
                     <Link href="/account/wish-list" className={`nav-link`}>
                        <i className={`bi bi-heart icon fs-5 d-none d-sm-block mx-md-0 me-1  ${currentPagePath === '/account/wish-list' ? 'text-dark' : 'text-secondary'}`}></i>
                     </Link>

                  </li>

                  <li className="nav-item">
                     <Link className="nav-link" href="/bag">
                        <div className="position-relative me-2 d-inline-block">
                           <i className="bi bi-bag fs-5  mx-md-0"></i>
                           {bagItems && bagItems.length !== 0 ?
                              <span className="position-absolute top-0 start-100 translate-middle p-1 bg-secondary border border-light rounded-circle">
                                 <span className="visually-hidden">Bag alerts</span>
                              </span> : <></>}

                        </div>
                     </Link>
                  </li>

                  <li className='nav-item d-none d-md-block '>
                     {
                        bagItems && bagItems.length !== 0 ? <Link href='/checkout'>
                           <button className={`btn btn-dark rounded-5 me-1 mx-md-1 `}>
                              Checkout
                           </button>
                        </Link> : <button className={`btn btn-dark rounded-5 me-1 mx-md-1 disabled`}>
                           Checkout
                        </button>
                     }
                  </li>
               </ul>
            </div>
         </div>
      </nav>
   </>)
}

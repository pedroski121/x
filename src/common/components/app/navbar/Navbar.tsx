import React from 'react'
import Link from 'next/link'
import { ToHomeIcon } from '@components/HomeIcon'

export const NavBar = () => {
    return (<>
 <nav className="py-2 bg-light border-bottom" data-testid="nav_bar">
    <div className="container d-flex flex-wrap justify-content-between">
      <ToHomeIcon/>
      <ul className="nav">
         <li className="nav-item">
            <Link href="/account/sign-up" legacyBehavior>
               <a className="nav-link link-dark px-2">Sign Up</a>
            </Link>
         </li>
         <li className="nav-item">
            <Link href="/account/sign-in" legacyBehavior>
               <a className="nav-link link-dark px-2">Sign In</a>
            </Link>
         </li>
         <li className="nav-item">
            <Link href="/account/admin" legacyBehavior>
               <a className="nav-link link-dark px-2">Admin</a>
            </Link>
         </li>
      </ul>
    </div>
 </nav>
 <header className="border-bottom bg-dark text-white">
    <div className="container d-flex flex-wrap justify-content-center">
    <ul className="nav">
         <li className="nav-item">   
            <Link href="#" legacyBehavior><a  className="nav-link link-light px-2">Men</a>  
            </Link>
         </li>
         <li className="nav-item">    
           <Link href="#" legacyBehavior><a className="nav-link link-light px-2">Women</a>  
            </Link>
         </li>
      </ul>
    </div>
 </header>
</>)
}
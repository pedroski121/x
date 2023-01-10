import React from 'react'
import Link from 'next/link'

export const NavBar = () => {
    return (<>
 <nav className="py-2 bg-light border-bottom">
    <div className="container d-flex flex-wrap justify-content-between">
    <a href="/" className="d-flex align-items-center  mb-lg-0 me-lg-auto text-dark text-decoration-none">
        <span className="fs-4 fw-bold">X</span>
      </a>
      <ul className="nav">
         <li className="nav-item"><a href="#" className="nav-link link-dark px-2">My Account</a></li>
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


      </ul>
    </div>
 </nav>
 <header className="border-bottom bg-dark text-white">
    <div className="container d-flex flex-wrap justify-content-center">
    <ul className="nav">
         <li className="nav-item"><a href="#" className="nav-link link-light px-2">Men</a></li>
         <li className="nav-item"><a href="#" className="nav-link link-light px-2">Women</a></li>
      </ul>
    </div>
  </header>
</>)
}

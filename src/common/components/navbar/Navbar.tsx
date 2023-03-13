import React from 'react'
import Link from 'next/link'
import { ToHomeIcon } from '@components/HomeIcon'

export const NavBar = () => {
    return (<>
 <nav className="py-1 bg-light border-bottom" data-testid="nav_bar">
    <div className="container d-flex flex-wrap justify-content-between">
      <ToHomeIcon iconColor='text-dark'/>
      <ul className="nav">
         <li className="nav-item">
            <Link href="/" legacyBehavior>
               <a className="nav-link link-dark px-2">Cart</a>
            </Link>
         </li>
         <li className="nav-item dropdown">
         <Link href="#" legacyBehavior>
         <a className="nav-link dropdown-toggle link-dark" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" 
         aria-expanded="false">
            Hi <span className='fw-bold'>Pedro</span>
          </a>
         </Link> 

          <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
            <Link href="#" legacyBehavior>
              <a className="dropdown-item" >Profile</a>
            </Link>     
            <Link href="#" legacyBehavior>
              <a className="dropdown-item" >Favorites</a>
            </Link>         
            <Link href="#" legacyBehavior>
              <a className="dropdown-item">Settings</a>
            </Link>            
            <Link href="#" legacyBehavior>
              <a className="dropdown-item">Sign Out</a>
            </Link>
          </ul>
        </li>
      </ul>

 
  
    </div>
 </nav>

</>)
}

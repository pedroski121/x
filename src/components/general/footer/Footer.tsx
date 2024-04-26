import { HomeIcon } from "@components/HomeIcon"
import Link from "next/link"

export const Footer = () => {
  return <>
    <footer className={`bg-black text-secondary overflow-hidden mt-5 `}>
      <div className="row  p-5">
        <section className="col-12 col-md-4">
          <HomeIcon iconColor="text-white" />
          <p className="ms-2">Curating Fashion For All </p>
          <p className="ms-2 fw-bold">© 2024 All rights reserved. <span className="text-white">Slucent</span></p>
        </section>
        <section className="col-12 col-md-2 ms-3 mt-3 mt-md-0">
          <h6 className="text-white">SITEMAP</h6>
          <Link href={'#'} className="link-secondary">About Us</Link><br />
          <Link href={'#'} className="link-secondary">Become a Vendor</Link><br />
          <Link href={'#'} className="link-secondary">Terms and Conditions</Link>
        </section>
        <section className="col-12 col-md-5 text-center mt-3 mt-md-0 text-md-end h4 text-secondary">
          <Link href={'#'} className="link-secondary pe-2"><i className="bi bi-facebook"></i></Link>
          <Link href={'#'} className="link-secondary pe-2"><i className="bi bi-twitter"></i></Link>
          <Link href={'#'} className="link-secondary"><i className="bi bi-instagram"></i></Link>

        </section>
      </div>
    </footer >
  </>
}
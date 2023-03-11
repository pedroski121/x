import { ToHomeIcon } from "@components/HomeIcon"
export const Footer = () =>{
    return <>
<footer className="footer mt-auto py-3 bg-success">
  <div className="container">
    <section className="row">
        <section className="col-md-6"><ToHomeIcon/></section>
        <section className="col-md-6 fw-bold">
            <h5>Contact Us</h5>
            <p>Phone: +234 810 000 0000</p>
            <p>Email: obipedrodevtest@gmail.com</p>
            </section>

    </section>
  </div>
</footer>
    </>
}
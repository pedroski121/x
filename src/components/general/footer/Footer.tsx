import { HomeIcon } from "@components/HomeIcon"
export const Footer = () => {
  return <>
    <footer className="footer mt-2 py-3 bg-dark">
      <div className="container">
        <section className="row">
          <section className="col-md-6"><HomeIcon iconColor="text-secondary" /></section>
          <section className="col-md-6 fw-bold text-secondary">
            <h5>Contact Us</h5>
            <p><span className="bi bi-telephone-fill "></span> +234 810 000 0000</p>
            <p><span className="bi bi-envelope-fill"></span> obipedrodevtest@gmail.com</p>
          </section>

        </section>
      </div>
    </footer>
  </>
}
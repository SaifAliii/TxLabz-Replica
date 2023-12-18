import logo from "../../logo.png";
import "./Footer.css";
function Footer() {
  return (
    <div className="footer-main">
      <div className="container">
        <div className="row footer-sub">
          <div className="col-md-9 footer-logo">
            <img className="footer-logo-main" src={logo} />
          </div>
          <div className="col-md-3">
            <h6>
              We craft products that <br /> leave an impact.
            </h6>
          </div>
        </div>
        <hr className="footer-horizontal-line" />
        <div className="row footer-sub1">
          <div className="col-md-12 footer-links">
            <div className="footer-links-main">
              <a className="footer-links-sub" href="#">
                Case studies
              </a>
            </div>
            <div className="footer-links-main">
              <a className="footer-links-sub" href="#">
                About us
              </a>
            </div>
            <div className="footer-links-main">
              <a className="footer-links-sub" href="#">
                Get a quote
              </a>
            </div>
            <div className="footer-links-main">
              <a className="footer-links-sub" href="#">
                Careers
              </a>
            </div>
            <div className="footer-links-main">
              <a className="footer-links-sub" href="#">
                Contact
              </a>
            </div>
          </div>
        </div>
        <div className="row footer-sub1">
          <div className="col-md-6 footer-copyright">©2023</div>
          <div className="col-md-6 footer-icons">
            <div className="footer-icons-main">
              <a href="#">
                <i class="fa-brands fa-facebook-f fa-xl footer-icons-sub"></i>
              </a>
            </div>
            <div className="footer-icons-main">
              <a href="#">
                <i class="fa-brands fa-linkedin-in  fa-xl footer-icons-sub"></i>
              </a>
            </div>
            <div className="footer-icons-main">
              <a href="#">
                <i class="fa-brands fa-instagram  fa-xl footer-icons-sub"></i>
              </a>
            </div>
            <div className="footer-icons-main">
              <a href="#">
                <i class="fa-brands fa-youtube  fa-xl footer-icons-sub"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

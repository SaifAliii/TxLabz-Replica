import "./Services.css";
import UxDesign from "../../UxDesign.png";
import mobileApp from "../../mobileApp.png";
import webDevelopment from "../../webDevelopment.png";
import customSoftware from "../../customSoftware.png";
//import 'bootstrap/dist/css/bootstrap.min.css';

function Services() {
  return (
    <div className="services">
      <div className="services-content">
        <h1 className="services-heading">Our Services</h1>
        <p className="service-explanation">
          High performance, fault tolerant & custom solutions
        </p>
      </div>

      <div className="container mt-4">
        <div className="row">
          <div className="col-md-3">
            <div className="Ux">
              <img
                className="UxDesign services-img"
                src={UxDesign}
                alt="Ux-UI design"
              />{" "}
              <br />
              <h5 className="numb">01 </h5>
              <h4 className="heading">UX/UI Design & Experience</h4>
              <p className="div-explanation">
                {" "}
                We create meaningful experiences and turn them into tangible
                business results.
              </p>
            </div>
          </div>

          <div className="col-md-3">
            <div className="web">
              <img
                className="webDev services-img"
                src={webDevelopment}
                alt="web developemnt"
              />
              <h5 className="numb">02</h5>
              <h4 className="heading">
                Web App <br />
                Developemnt
              </h4>
              <p className="div-explanation">
                We build modern, secure and scalable web applications to
                simplify business processes for you.
              </p>
            </div>
          </div>

          <div className="col-md-3">
            <div className="mobile">
              <img
                className="mobileApp services-img"
                src={mobileApp}
                alt="mobile app"
              />
              <h5 className="numb">03</h5>
              <h4 className="heading">
                Mobile App <br />
                Developemnt
              </h4>
              <p className="div-explanation">
                Our fast, responsive and highly scalable mobile app development
                will help you get ahead in no time!
              </p>
            </div>
          </div>

          <div className="col-md-3">
            <div className="custom">
              <img
                className="customSoft services-img"
                src={customSoftware}
                alt="custom software"
              ></img>
              <h5 className="numb">04</h5>

              <h4 className="heading">
                Custom Software &<br />
                SaaS
              </h4>
              <p className="div-explanation">
                Our fast, responsive and highly scalable mobile app development
                will help you get ahead in no time!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;

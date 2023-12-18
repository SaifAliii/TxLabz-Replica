import "./Services.css";
import UxDesign from "../../UxDesign.png";
import mobileApp from "../../mobileApp.png";
import webDevelopment from "../../webDevelopment.png";
import customSoftware from "../../customSoftware.png";
//import 'bootstrap/dist/css/bootstrap.min.css';

function Service(props) {
  return (
    <div className="service">
      <img className="service-img" src={props.img} />
      <h4 className="heading">{props.title}</h4>
    </div>
  );
}

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
          <div className="col-md-8">
            <Service img={UxDesign} title="UI/UX Design & Experience" />
          </div>

          <div className="col-md-4">
            <Service
              img={webDevelopment}
              title="Web App  
               Developemnt"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <Service
              img={mobileApp}
              title="Mobile App 
                Developemnt"
            />
          </div>

          <div className="col-md-8">
            <Service
              img={customSoftware}
              title="Custom Software &
                SaaS"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;

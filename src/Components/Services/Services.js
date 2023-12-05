
import "./Services.css";
import UxDesign from "../../UxDesign.png"
import mobileApp from "../../mobileApp.png";
import webDevelopment from "../../webDevelopment.png";
import customSoftware from "../../customSoftware.png";
import 'bootstrap/dist/css/bootstrap.min.css';

function Services() {

    return(

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
                  <div className="border p-3 ">
                    <img className="UxDesign" src= {UxDesign} alt="Ux-UI design"/> 
                    <h3>Div 1</h3>
                    <p>Content for div 1</p>
                  </div>
                </div>

              <div className="col-md-3">
                <div className="border p-3">
                  <img className="webDev" src= {webDevelopment} alt="web developemnt"/> 

                  <h3>Div 2</h3>
                  <p>Content for Div 2</p>
                </div>
              </div>

              <div className="col-md-3">
                <div className="border p-3 ">
                  <img className="mobileApp" src={mobileApp} alt="mobile app" />

                  <h3>Div 3</h3>
                  <p>Content for Div 3</p>
                </div>
              </div>

              <div className="col-md-3">
                <div className="border p-3">
                  <img className="customSoft" src={customSoftware} alt="custom software"></img>
                  <h3>Div 4</h3>
                  <p>Content for Div 4</p>
                </div>
              </div>
            </div>
    </div>
            
        </div>
        


    );
}

export default Services;
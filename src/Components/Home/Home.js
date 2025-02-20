import "./Home.css";
import userImg from "../../user.jpg";
import agioweb from "../../agioweb.png";
import fiveFour from "../../5four.png";
import ww from "../../ww..png";
import zereflab from "../../zereflab.png";
import heymara from "../../heymara.png";
function Home() {
  return (
    <div className="home">
      <div className="home-content">
        <h1 className="home-heading">
          We help the ambitious build amazing <br /> products.
        </h1>
        <p className="home-explanation">
          We're a startup-friendly agency that design and develop all things
          digital from <br />
          custom softwares, websites to mobile apps and beyond.
        </p>
        <button className="talk">
          Let's talk <i class="fa-solid fa-arrow-right"></i>
        </button>
        <div className="home-projects-main">
          <div className="users">
            <img className="user user-1" src={userImg} alt="user logo" />
            <img className="user user-2" src={userImg} alt="user logo" />
            <img className="user user-3" src={userImg} alt="user logo" />
          </div>
          <div className="home-projects">
            <div className="home-projects-info">200+ successful projects</div>
            <div className="home-projects-link">
              <a href="#" className="project-link">
                Read testimonials &gt;
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="trusted-by">
        <div className="trusted-by-text">
          <p>TRUSTED BY GLOABL ENTERPRISES AND STARTUPS</p>
        </div>
        <div className="trusted-by-organizations">
          <a href="#" className="agioweb project">
            <img src={agioweb} />
          </a>
          <a href="#" className="five-four project">
            <img src={fiveFour} />
          </a>
          <a href="#" className="ww-dot project">
            <img src={ww} />
          </a>
          <a href="#" className="zereflab project">
            <img src={zereflab} />
          </a>
          <a href="#" className="heymara project">
            <img src={heymara} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;

import "./Home.css";
import userImg from "../../user.jpg";
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
        <span>
          <div>
            <img className="user user-1" src={userImg} alt="user logo" />
            <img className="user user-2" src={userImg} alt="user logo" />
            <img className="user user-3" src={userImg} alt="user logo" />
          </div>
        </span>
        <span>200+ successful projects</span>
      </div>
    </div>
  );
}

export default Home;

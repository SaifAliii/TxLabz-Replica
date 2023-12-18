import "./Portfolio.css";
import Video from "../Video/Video";
import sample1 from "../../sample1.png";
import sample2 from "../../sample2.png";
import sample3 from "../../sample3.png";

function PortfolioSample(props) {
  return (
    <div className="portfolio-projects-sample">
      <a href="#">
        <img
          className="portfolio-projects-sample-image"
          src={props.img}
          alt="project sample"
        />
      </a>
    </div>
  );
}
function Portfolio() {
  return (
    <div className="portfolio">
      <div className="portfolio-main">
        <div className="portfolio-heading">
          <h3>Featured Work</h3>
          <p>Check out our projects, each of them equally aced.</p>
        </div>
        <div className="portfolio-projects-main">
          <div className="portfolio-projects-sub">
            <PortfolioSample img={sample1} />
            <PortfolioSample img={sample2} />
            <PortfolioSample img={sample3} />
          </div>
          <div className="portfolio-projects-sub">
            <Video
              width="870px"
              height="461px"
              video="https://www.youtube.com/embed/zk_R_WUeoNQ"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Portfolio;

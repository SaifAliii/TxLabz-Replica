import "./Portfolio.css";
import portfolioSample from "../../samplePortfolio.jpeg";
function Portfolio() {
  return (
    <div className="portfolio">
      <div className="portfolio-main">
        <div className="portfolio-heading">
          <h3>Featured Work</h3>
          <p>Check out our projects, each of them equally aced.</p>
        </div>
        <div className="portfolio-projects-main">
          <div className="portfolio-projects-row1">
            <div className="portfolio-projects-sub">
              <div className="portfolio-projects">
                <a href="#">
                  <img
                    className="portfolio-image"
                    src={portfolioSample}
                    alt="portfolio image"
                  />
                </a>
              </div>
              <div className="portfolio-view-project">
                <a href="#">
                  View Project{" "}
                  <i class="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
              </div>
            </div>
            <div className="portfolio-projects-sub">
              <div className="portfolio-projects">
                <a href="#">
                  <img
                    className="portfolio-image"
                    src={portfolioSample}
                    alt="portfolio image"
                  />
                </a>
              </div>
              <div className="portfolio-view-project">
                <a href="#">
                  View Project{" "}
                  <i class="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
              </div>
            </div>
            <div className="portfolio-projects-sub">
              <div className="portfolio-projects">
                <a href="#">
                  <img
                    className="portfolio-image"
                    src={portfolioSample}
                    alt="portfolio image"
                  />
                </a>
              </div>
              <div className="portfolio-view-project">
                <a href="#">
                  View Project{" "}
                  <i class="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
              </div>
            </div>
            <div className="portfolio-projects-sub">
              <div className="portfolio-projects">
                <a href="#">
                  <img
                    className="portfolio-image"
                    src={portfolioSample}
                    alt="portfolio image"
                  />
                </a>
              </div>
              <div className="portfolio-view-project">
                <a href="#">
                  View Project{" "}
                  <i class="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Portfolio;

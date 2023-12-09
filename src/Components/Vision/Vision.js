import "./Vision.css";
import team from "../../team.png";
import project from "../../project.png";

function Vision() {
  return (
    <div className="vision-component">
      <h1 className="vision-heading">What suits your vision? </h1>
      <div className="vision-container">
        <div className="vision-row">
          <div className="team">
            <img className="team-img" src={team} alt="Build Team" /> <br />
            <div className="team-content">
              <h1>Build Your Team</h1>
              <p>
                Build a dream team to work exclusively on your project,
                well-aligned with your timeline and goals.
              </p>
            </div>
            <button className="team-button">
              Build my team <i class="fa-solid fa-arrow-right"></i>
            </button>
          </div>

          <div className="vision-project">
            <img
              className="vision-project-img"
              src={project}
              alt="Fixed price project"
            />
            <br />
            <div className="project-content">
              <h1>Fixed Price Projects</h1>
              <p>
                Reduce your time-to-market with our fully-managed and
                cost-efficent project delivery.
              </p>
            </div>
            <button className="project-button">
              Develop my project <i class="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Vision;

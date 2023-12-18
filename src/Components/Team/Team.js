import "./Team.css";
import member1 from "../../teamMember1.jpg";
import member2 from "../../teamMember2.jpg";
import member3 from "../../teamMember3.jpg";
import member4 from "../../teamMember4.jpg";
function TeamMember(props) {
  return (
    <div className="team-member-sub">
      <img src={props.img} alt="Team Member Image" height={props.height} />
    </div>
  );
}
function Team() {
  return (
    <div className="team-main">
      <div className="team-description">
        <h1>
          Meet Your Dedicated Product Team Before You Start Working With Us
        </h1>
      </div>
      <div className="team-member">
        <TeamMember img={member1} height="300px" />
        <TeamMember img={member2} height="350px" />
        <TeamMember img={member3} height="400px" />
        <TeamMember img={member4} height="400px" />
      </div>
    </div>
  );
}

export default Team;

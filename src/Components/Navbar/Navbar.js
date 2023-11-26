import "../Navbar/Navbar.css";
import logo from "../../logo.png";
function Navbar() {
  return (
    <div className="nav-bar-container">
      <a href="#" className="main-logo">
        TXLABZ
      </a>
      <nav className="nav-bar">
        <a href="#" className="nav-item">
          Portfolio
        </a>
        <a href="#" className="nav-item">
          Services
        </a>
        <a href="#" className="nav-item">
          Testimonials
        </a>
        <a href="#" className="nav-item">
          Cases
        </a>
      </nav>
      <i class="dot fa-solid fa-circle"></i>
    </div>
  );
}
export default Navbar;

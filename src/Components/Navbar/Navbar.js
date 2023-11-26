import "../Navbar/Navbar.css";
function Navbar() {
  return (
    <div className="nav-bar-container">
      <a href="#" className="main-logo">
        TXLABZ
      </a>
      <nav className="nav-bar" id="nav-bar">
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
        <a href="#" className="nav-item-unique nav-hire-us-link">
          <i class="dot fa-solid fa-circle fa-2xs"></i> Hire us
        </a>
      </nav>
      <div className="hire-us">
        <i class="dot fa-solid fa-circle fa-2xs"></i>
        <a href="#" className="hire-us-link">
          Hire us
        </a>
      </div>
    </div>
  );
}
export default Navbar;

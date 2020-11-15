import { Link } from "react-router-dom";
import GitHub from "../Icon-Components/GitHub";
import LinkedIn from "../Icon-Components/LinkedIn";

const Links = () => {
  return (
    <div className="collapse navbar-collapse text-right" id="navbarMenu">
      <div className="navbar-nav ml-auto">
        {/* About */}
        <Link className="navbar-brand" to="/about">
          About
        </Link>
        {/* Portfolio */}
        <Link className="navbar-brand" to="/portfolio">
          Portfolio
        </Link>
        {/* Resume */}
        
        {/* Contact */}
        <Link className="navbar-brand" to="/contact">
          Contact
        </Link>
        {/* LinkedIn Icon */}
        <LinkedIn />
        {/* GitHub Icon */}
        <GitHub href="https://github.com/dianamaina" />
      </div>
    </div>
  );
};

export default Links;
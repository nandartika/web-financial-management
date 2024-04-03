import { Link } from "react-router-dom";
import routes from "../data/routes";
import { FaBars as Bars } from "react-icons/fa";
import { useState } from "react";

function NavigationLayout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="navigation">
      <h1>
        <Link to="/">FINANCIAL MANAGEMENT</Link>
      </h1>

      <div className="menu-toggle" onClick={toggleMenu}>
        <Bars />
      </div>
      <nav className={`menu ${isMenuOpen ? "menu-open" : ""}`}>
        <ul>
          {routes.map((route) => (
            <li key={route.path}>
              <Link to={route.path}>{route.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default NavigationLayout;

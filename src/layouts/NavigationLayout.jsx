import { Link } from "react-router-dom";
import routes from "../data/routes";

function NavigationLayout() {
  return (
    <header className="navigation">
      <nav>
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

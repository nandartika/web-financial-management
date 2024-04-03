import { Link } from "react-router-dom";
import routes from "../data/routes";

function NavigationLayout() {
  return (
    <header className="navigation">
      <h1>
        <Link to="/">FINANCIAL MANAGEMENT</Link>
      </h1>

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

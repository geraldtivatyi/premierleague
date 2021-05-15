import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Premier League</div>
      <nav>
        <ul>
          <li>
            <Link to="/">Tables</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;

import "./navbar.css";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faList,
  faProjectDiagram,
  faIdBadge,
  faQuestion,
  faSlidersH,
} from "@fortawesome/free-solid-svg-icons";
import { faStickyNote } from "@fortawesome/free-regular-svg-icons";

const Navbar = () => {
  return (
    <div
      className="Navbar is-flex 
      is-flex-direction-column 
      is-justify-content-space-between
      is-align-items-flex-start"
    >
      <div className="Navbar__avatar">tempNote</div>
      <div className="d-flex__column is-flex is-flex-direction-column">
        <NavLink
          className="Navbar__link"
          activeClassName="Navbar__link-selected"
          to="/notes"
        >
          <FontAwesomeIcon icon={faStickyNote} />
          <span> Notas</span>
        </NavLink>
        <NavLink
          className="Navbar__link"
          activeClassName="Navbar__link-selected"
          to="/tasks"
        >
          <FontAwesomeIcon icon={faList} />
          <span> Tareas</span>
        </NavLink>
        <NavLink
          className="Navbar__link"
          activeClassName="Navbar__link-selected"
          to="/overviews"
        >
          <FontAwesomeIcon icon={faProjectDiagram} />
          <span> Projectos</span>
        </NavLink>
        <NavLink
          className="Navbar__link"
          activeClassName="Navbar__link-selected"
          to="/support"
        >
          <FontAwesomeIcon icon={faIdBadge} />
          <span> Contacto</span>
          
        </NavLink>
        <NavLink
          className="Navbar__link"
          activeClassName="Navbar__link-selected"
          to="/about"
        >
          <FontAwesomeIcon icon={faQuestion} />
          <span> About</span>
        </NavLink>
      </div>
      <div className="d-flex__column is-flex is-flex-direction-column">
        <NavLink
          className="Navbar__link"
          activeClassName="Navbar__link-selected"
          to="/settings"
        >
          <FontAwesomeIcon icon={faSlidersH} />
          <span> Preferencias</span>
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;

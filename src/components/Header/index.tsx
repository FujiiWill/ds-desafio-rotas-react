import "./styles.css";
import { Link, NavLink } from "react-router-dom";
import homeImg from "../../assets/home.svg";

export default function Header() {
  return (
    <header>
      <div className="nav-item-container container">
        <nav className="navbar">
          <NavLink
            to="/home"
            className={({ isActive }) =>
              isActive ? "menu-item menu-active" : "menu-item"
            }
          >
            Início
          </NavLink>
          <NavLink
            to="/products"
            className={({ isActive }) =>
              isActive ? "menu-item menu-active" : "menu-item"
            }
          >
            Produtos
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "menu-item menu-active" : "menu-item"
            }
          >
            Sobre nós
          </NavLink>
        </nav>
        <div>
          <Link to="/home">
            <img src={homeImg} alt="Home-Icon" />
          </Link>
        </div>
      </div>
    </header>
  );
}

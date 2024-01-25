import "./styles.css";

import { NavLink } from "react-router-dom";

export default function ProductsBar() {
  return (
    <main className="container">
      <div className="item-category-container mt20 mb20">
        <NavLink
          to="/products/computers"
          className={({ isActive }) =>
            isActive ? "menu-item menu-active" : "menu-item"
          }
        >
          Computadores
        </NavLink>
        <NavLink
          to="/products/electronics"
          className={({ isActive }) =>
            isActive ? "menu-item menu-active" : "menu-item"
          }
        >
          Eletrônicos
        </NavLink>
        <NavLink
          to="/products/books"
          className={({ isActive }) =>
            isActive ? "menu-item menu-active" : "menu-item"
          }
        >
          Livros
        </NavLink>
      </div>
    </main>
  );
}

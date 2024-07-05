import logo from "../../assets/logo.png";

import basket from "../../assets/basket.svg";

import "./HeaderNav.scss";

export const HeaderNav = () => {
  return (
    <div className="site-header-nav">
      <div className="site-header-nav-menu">
        <div className="site-header-nav-logo">
          <a href="#">
            <img src={logo} alt="" />
          </a>
        </div>
        <div className="site-header-nav-menu">
          <ul className="site-header-menu">
            <li className="header-menu">
              <a href="#">Репродукции</a>
            </li>
            <li className="header-menu">
              <a href="#">Новинки</a>
            </li>
            <li className="header-menu">
              <a href="#">О нас</a>
            </li>
            <li className="header-menu">
              <a href="#">
                <img src={basket} alt="" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

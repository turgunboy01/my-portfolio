import React, { useState } from "react";
import { changeTabActive } from "../redux/actions";
import { connect, useDispatch } from "react-redux";
import { FaBars } from "react-icons/fa";
import logo from "../../public/public/logo.png";
const Navbar = ({ activeTab }) => {
  const dispatch = useDispatch();

  const [linkNav] = useState(["Home", "Skills", "Projects", "Contacts"]);
  const [statusNav, changeStatusNav] = useState(null);
  const toggleNav = () => {
    changeStatusNav(statusNav === null ? "active" : null);
  };
  const changeTab = (value) => {
    dispatch(changeTabActive(value));
    toggleNav();
  };
  return (
    <div>
      <header>
        <div className="logo">
          <img src={logo} alt="" style={{ width: "80px", height: "80px" }} />
        </div>
        <nav className={statusNav}>
          {linkNav.map((value) => (
            <span
              key={value}
              className={activeTab === value ? "active" : ""}
              onClick={() => changeTab(value)}
            >
              {value}
            </span>
          ))}
        </nav>
        <div className="icon-bar" onClick={toggleNav}>
          <FaBars />
        </div>
      </header>
    </div>
  );
};

const mapStateToProps = (state) => ({
  activeTab: state.activeTab,
});

export default connect(mapStateToProps, { changeTabActive })(Navbar);

import React from "react";
import { NavLink } from "react-router-dom";


const Navbar = () => {
  return (
    <>
      <div className="bg-amber-400 text-white gap-4 flex py-4 text-2xl px-9 ">
        <img
          src="https://www.lassishop.in/wp-content/uploads/2019/02/lassi-shop-logo-1986.png"
          alt=""
          className="h-10"
        />
        <div className="px-7 gap-8 flex">
          <Menu to={'/Home'} title={'Home'}/>
          <Menu to={'/Products'} title={'Products'}/>
        </div>
      </div>
    </>
  );
};

// Agar humko same class baar dena pad rha h toh naya component bana lenge

const Menu = ({ to, title }) => {
  return (
    <>
      <NavLink className={({isActive})=> isActive ? 'text-[tomato]' : ''} to={to}>{title}</NavLink>
    </>
  );
};

export default Navbar;

import React from 'react'
import { NavLink} from 'react-router-dom';
import logo from "../../assets/logo.png"
import { FiUser } from "react-icons/fi";
import { BsCart3 } from "react-icons/bs";
import { LINKS } from '../../static';
import { memo } from 'react';


const Header = () => {
const headerLink = LINKS?.map((link) => (
  <NavLink
    key={link.id}
    className="text-black font-medium flex items-center gap-1"
    to={link.path}>
    <span>{link.name}</span>
  </NavLink>
));
  return (
    <header className=" container h-20 bg-white w-full ">
      <nav className="container flex h-full items-center justify-between">
        <div>
          <NavLink to={"/"}>
            <img src={logo} alt="logo" className="w-auto h-10" />
          </NavLink>
        </div>
        <div className="flex gap-10">{headerLink}</div>
        <div className="flex gap-4">
        <NavLink >
          <FiUser className="text-xl cursor-pointer" />
        </NavLink>
        <NavLink>
          <BsCart3 className="text-xl cursor-pointer" />
        </NavLink>
      </div>
      </nav>
      
    </header>
  );
}

export default memo (Header)

import { useState } from "react";

import { headerLogo } from "../assets/images";
import { close, hamburger } from "../assets/icons";

import { navLinks } from "../constants";
const Nav = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="#">
          <img src={headerLogo} alt="logo" width={130} height={29} />
        </a>
        <ul className="flex flex-1 justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a href={link.href} className="font-montserrat leading-normal text-lg text-slate-gray">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden max-lg:block z-10">
          { openMenu ? (
            <img
              src={close}
              alt="close"
              width={25}
              height={25}
              onClick={() => setOpenMenu((prev) => !prev)}
            />
          ) : (
            <img
              src={hamburger}
              alt="hamburger"
              width={25}
              height={25}
              onClick={() => setOpenMenu((prev) => !prev)}
            />
          )}
        </div>

        { openMenu && (
          <div className="lg:hidden bg-coral-red absolute top-16 right-10 px-4 py-2 text-center rounded-md flex flex-col gap-3 shadow-md z-50">
            <ul className="flex flex-col items-center justify-center gap-4 px-4 py-8">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-montserrat leading-normal text-lg text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Nav;

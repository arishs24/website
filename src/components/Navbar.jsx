import React, { useState } from "react";
import { navLinks } from "../constants";

const Navbar = ({ currentPage, onChangePage }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full fixed top-0 z-20 bg-[#181614]/90 backdrop-blur-md border-b border-[#242220]">
      <div className="max-w-2xl mx-auto sm:px-16 px-6 py-6 flex justify-between items-center">
        <button
          onClick={() => onChangePage?.("about")}
          className="text-[#7a7876] hover:text-[#c8c2b8] text-[13px] font-normal transition-colors duration-300"
        >
          Arish Shahab
        </button>

        {/* Desktop */}
        <ul className="hidden sm:flex gap-9">
          {navLinks.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => onChangePage?.(link.id)}
                className="text-[12px] font-normal transition-colors duration-300 tracking-wide"
                style={{ color: currentPage === link.id ? "#c8c2b8" : "#555250" }}
              >
                {link.title}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile */}
        <div className="sm:hidden relative">
          <button
            onClick={() => setToggle(!toggle)}
            className="text-[#7a7876] hover:text-[#c8c2b8] transition-colors text-[12px] font-normal tracking-wide"
          >
            {toggle ? "close" : "menu"}
          </button>
          {toggle && (
            <div className="absolute top-10 right-0 bg-[#0d0d0d] border border-[#1a1a1a] p-6 min-w-[150px]">
              <ul className="flex flex-col gap-5">
                {navLinks.map((link) => (
                  <li key={link.id}>
                    <button
                      onClick={() => { setToggle(false); onChangePage?.(link.id); }}
                      className="text-[12px] font-normal transition-colors tracking-wide"
                      style={{ color: currentPage === link.id ? "#c8c2b8" : "#555250" }}
                    >
                      {link.title}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

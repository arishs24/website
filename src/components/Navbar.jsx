import React, { useState } from "react";
import { navLinks } from "../constants";

const Navbar = ({ currentPage, onChangePage }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full fixed top-0 z-20 bg-[#fafaf8]/90 backdrop-blur-md border-b border-[#e8e4dc]">
      <div className="max-w-2xl mx-auto sm:px-16 px-6 py-6 flex justify-between items-center">
        <button
          onClick={() => onChangePage?.("about")}
          className="text-[#aaa8a6] hover:text-[#1a1917] text-[13px] font-normal transition-colors duration-300"
        >
          Arish Shahab
        </button>

        {/* Desktop */}
        <ul className="hidden sm:flex gap-9">
          {navLinks.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => onChangePage?.(link.id)}
                className="relative pb-2 text-[12px] font-normal transition-colors duration-300 tracking-wide"
                style={{ color: currentPage === link.id ? "#1a1917" : "#aaa8a6" }}
              >
                {link.title}
                {currentPage === link.id && (
                  <span className="absolute bottom-0 left-0 right-0 h-px bg-[#1a1917]" />
                )}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile */}
        <div className="sm:hidden relative">
          <button
            onClick={() => setToggle(!toggle)}
            className="text-[#aaa8a6] hover:text-[#1a1917] transition-colors text-[12px] font-normal tracking-wide"
          >
            {toggle ? "close" : "menu"}
          </button>
          {toggle && (
            <div className="absolute top-10 right-0 bg-[#fafaf8] border border-[#e8e4dc] p-6 min-w-[150px]">
              <ul className="flex flex-col gap-5">
                {navLinks.map((link) => (
                  <li key={link.id}>
                    <button
                      onClick={() => { setToggle(false); onChangePage?.(link.id); }}
                      className="text-[12px] font-normal transition-colors tracking-wide"
                      style={{ color: currentPage === link.id ? "#1a1917" : "#aaa8a6" }}
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

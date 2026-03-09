import React from 'react';

const TechBox = ({ name }) => (
  <div className="border border-[#1a1a1a] px-4 py-2 text-[#9a9a9a] text-[12px] font-light tracking-wide">
    {name.replace(/^✅/, '').trim()}
  </div>
);

export default TechBox;

import React, { useState } from "react";

export const Accordion = ({ children }) => {
  return <div>{children}</div>;
};

export const AccordionItem = ({ value, children, className }) => {
  return <div className={className}>{children}</div>;
};

export const AccordionTrigger = ({ children, className, onClick }) => {
  return (
    <button
      className={`w-full text-left ${className || ""}`}
      onClick={onClick}
      type="button"
    >
      {children}
    </button>
  );
};

export const AccordionContent = ({ children, className }) => {
  return <div className={className}>{children}</div>;
};

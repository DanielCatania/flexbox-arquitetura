import React, { ReactNode } from "react";

export interface IMain {
  children?: ReactNode; 
  className?: string; 
  inlineStyle?: React.CSSProperties;
}

export default function Main({ children, className = "", inlineStyle }: IMain) {
  return (
    <main
      className={`pt-[56px] sm:pt-[78px] lg:pt-[112px] md:pt-[96px] ${className}`}
      style={inlineStyle}
    >
      {children}
    </main>
  );
}
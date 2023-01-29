import React, { ReactNode } from "react";

export interface IText {
  size?: "ut" | "2xl" | "xl" | "l" | "sl" | "r" | "s" | "leg";
  children?: ReactNode;
  className?: string;
  inlineStyle?: React.CSSProperties;
}

export default function Text({ size, children, className, inlineStyle }: IText) {
  let style = "";
  switch (size) {
    case "ut":
      style = "lg:text-ut lg:font-ut md:text-2xl md:font-xs text-xl font-xs";
      return (
        <h1 className={`${style} ${className}`} style={inlineStyle}>
          {children}
        </h1>
      );
    case "2xl":
      style = "md:text-2xl text-xl font-xs";
      return (
        <h2 className={`${style} ${className}`} style={inlineStyle}>
          {children}
        </h2>
      );
    case "xl":
      style = "md:text-xl text-l font-xs";
      return (
        <h3 className={`${style} ${className}`} style={inlineStyle}>
          {children}
        </h3>
      );
    case "l":
      style = "md:text-l md:font-xs text-sl font-s";
      return (
        <h4 className={`${style} ${className}`} style={inlineStyle}>
          {children}
        </h4>
      );
    case "sl":
      style = "md:text-sl md:font-s text-r font-r";
      return (
        <h5 className={`${style} ${className}`} style={inlineStyle}>
          {children}
        </h5>
      );
    case "r":
      style = "md:text-r md:font-r text-s font-r";
      return (
        <p className={`${style} ${className}`} style={inlineStyle}>
          {children}
        </p>
      );
    case "s":
      style = "md:text-s md:font-r text-leg font-w"
      return (
        <p className={`${style} ${className}`} style={inlineStyle}>
          {children}
        </p>
      );
    case "leg":
      style = "text-leg font-w";
      return (
        <small className={`${style} ${className}`} style={inlineStyle}>
          {children}
        </small>
      );
    default:
      return <p className={className} style={inlineStyle}>{children}</p>
  }
}

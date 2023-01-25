import React, { ReactNode } from "react";

export interface IText {
  size?: "ut" | "2xl" | "xl" | "l" | "sl" | "r" | "s" | "leg";
  children?: ReactNode;
  className?: string;
}

export default function Text({ size, children, className }: IText) {
  let style = "";
  switch (size) {
    case "ut":
      style = "lg:text-ut lg:font-ut text-xl font-xs";
      return (
        <h1 className={`${style} ${className}`}>
          {children}
        </h1>
      );
    case "2xl":
      style = "md:text-2xl text-l font-xs";
      return (
        <h2 className={`${style} ${className}`}>
          {children}
        </h2>
      );
    case "xl":
      style = "md:text-xl md:font-xs text-sl font-s";
      return (
        <h3 className={`${style} ${className}`}>
          {children}
        </h3>
      );
    case "l":
      style = "md:text-l md:font-xs text-r font-r";
      return (
        <h4 className={`${style} ${className}`}>
          {children}
        </h4>
      );
    case "sl":
      style = "md:text-sl md:font-s text-s font-r";
      return (
        <h5 className={`${style} ${className}`}>
          {children}
        </h5>
      );
    case "r":
      style = "md:text-r md:font-r text-leg font-w";
      return (
        <p className={`${style} ${className}`}>
          {children}
        </p>
      );
    case "s":
      style = "md:text-s md:font-r text-leg font-w"
      return (
        <p className={`${style} ${className}`}>
          {children}
        </p>
      );
    case "leg":
      style = "text-leg font-w";
      return (
        <small className={`${style} ${className}`}>
          {children}
        </small>
      );
    default:
      return <p className={className}>{children}</p>
  }
}

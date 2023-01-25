import { ReactNode } from "react";
import NextLink from "next/link";

export interface IButton {
  theme?: 'dark' | 'light';
  size?: 'large' | 'default';
  children?: ReactNode; 
  func?: 'button' | 'link';
  type?: "button" | "submit" | "reset";
  href?: string;
  className?: string;
}

export default function Button({ 
  func = "button", 
  theme = "light", 
  children, 
  type = "button", 
  href = "",
  className = "",
  size = "default",
}: IButton) {
  const darkTheme = "bg-primary-150 border-primary-050 text-primary-100";
  const lightTheme = "bg-primary-050 border-primary-150 text-primary-150";

  const defaultStyle = "px-6 py-3 w-1/4 rounded-2xl border-2 text-center";
  const largeStyle = `md:px-6 md:py-2 md:w-1/2 ${defaultStyle}`;

  const style = `${theme === "light" ? lightTheme : darkTheme} ${size === "default" ? defaultStyle : largeStyle}`;  

  switch (func) {
    case "button":
      return (
        <button
          type={type}
          className={`${style} ${className}`}
        >
          {children}
        </button>
      );
    case "link": 
      return (
        <NextLink
          href={href}
          className={`${style} ${className}`}
        >
          {children}
        </NextLink>
      );
    default:
      return (
        <div
          className={`${style} ${className}`}
        >
          {children}
        </div>
      );
  }
}
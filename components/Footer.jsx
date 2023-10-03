import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full flex-center my-7">
      <span>
        {new Date().getFullYear()} &copy;{" "}
        <Link href="https://github.com/ayush-bhosale">
          {" "}
          Ayush Bhosale 
        </Link>
      </span>
    </footer>
  );
};

export default Footer;
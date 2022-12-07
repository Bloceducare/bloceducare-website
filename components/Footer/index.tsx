import React from "react";
import Link from "next/link";
import Image from "next/image";

function Footer() {
  return (
    <footer className="md:flex md:items-center space-x-4 lg:flex lg:items-center  lg:justify-between">
      <div className="flex justify-center items-center space-x-4">
        <div>
          <Image width={38} height={44} src="/bloceducare.png" alt="bloceducare-logo" />
        </div>
        <p className="font-montserrat font-bold text-[#ffff] text-small">
          Bloceducare
        </p>
      </div>

      <ul className="flex  my-12 md:my-0 lg:my-0 items-center justify-between space-x-8">
        <li>
          <Link
            href={"#"}
            className="text-[#fff] 
            text-xs md:text-sm lg:text-lg opacity-70"
          >
            Support
          </Link>
        </li>
        <li>
          <Link href={"#"} className="text-[#fff] 
text-xs md:text-sm lg:text-lg opacity-70">
            Privacy Policy
          </Link>
        </li>
        <li>
          <Link href={"#"} className="text-[#fff] 
text-xs md:text-sm lg:text-lg opacity-70">
            Terms and Conditions
          </Link>
        </li>
      </ul>
      <p className="text-[#fff] text-center text-xs md:text-sm lg:text-lg opacity-70">
        &copy; {new Date().getFullYear()} Bloceducare, All Rights Reserved.{" "}
      </p>
    </footer>
  );
}

export default Footer;

import React from "react";
import Image from "next/image";
import { BiSolidUpArrow } from "react-icons/bi";
import { BiSolidDownArrow } from "react-icons/bi";

const HeroText = () => {
  return (
    <div className="flex  w-full justify-between px-8  pt-8 flex-col">
      <p className="text-base "> Total Revenue </p>
      <div className="flex pt-2 items-start md:items-center gap-4 flex-col md:flex-row">
        <p className="text-4xl font-bold">$ 45,365.00</p>

        <p className="text-base text-red-500 font-bold flex items-center">
          <BiSolidUpArrow className="mr-1" />
          $1.294
        </p>
        <p className="text-base text-green-500 font-bold flex items-center">
          <BiSolidDownArrow className="mr-1" />
          $1.294
        </p>
      </div>
    </div>
  );
};

export default HeroText;

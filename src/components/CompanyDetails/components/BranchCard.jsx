import React from "react";
import { MobileIcon } from "../../../shared/Icons/index";

export default function BranchCard({ branch }) {
  return (
    <div className="lg:w-[470px] lg:h-[262px] p-8 rounded-md  bg-[#F9F9F9]  flex flex-col gap-5 shadow-xl">
      <h1 className="lg:text-3xl text-xl font-medium">{branch.branchName}</h1>
      <p className="lg:text-xl text-base">{branch.branchAddress}</p>
      <div className="flex items-center gap-2">
        <span>
          <MobileIcon />
        </span>
        <span>{branch.branchContact}</span>
      </div>
    </div>
  );
}

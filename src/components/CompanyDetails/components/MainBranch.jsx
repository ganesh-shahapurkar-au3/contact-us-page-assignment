import React from "react";
import {
  YoutubeIcon,
  TwitterIcon,
  LinkdinIcon,
  MobileIcon,
} from "../../../shared/Icons/index";

export default function MainBranch() {
  return (
    <div className="lg:relative flex flex-wrap  justify-end">
      <div>
        <img src="/assets/Rectangle 132.png" alt="CompanyDetailsImage" />
      </div>
      <div className="lg:w-[530px] lg:h-[354px] p-12 rounded-md bg-[#F9F9F9] flex flex-col gap-8 shadow-xl lg:absolute left-2 top-9">
        <h1 className="lg:text-3xl text-xl font-medium">
          Advent Chembio Pvt. Ltd.
        </h1>
        <p className="lg:text-xl text-base">
          W-288, T.T.C. Industrial Area, MIDC Industrial Area, Rabale, Navi
          Mumbai, Maharashtra 400701
        </p>
        <div className="flex items-center gap-2">
          <span>
            <MobileIcon />
          </span>
          <span>+91 7777084837</span>
        </div>
        <div className="flex items-center gap-5">
          <LinkdinIcon />
          <TwitterIcon />
          <YoutubeIcon />
        </div>
      </div>
    </div>
  );
}

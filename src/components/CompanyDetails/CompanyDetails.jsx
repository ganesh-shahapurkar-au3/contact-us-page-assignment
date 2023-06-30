import React from "react";
import MainBranch from "./components/MainBranch";
import OtherBranches from "./components/OtherBranches";

const otherBranchesData = [
  {
    branchName: "FDA approved manufacturing facility",
    branchAddress: " W-279, MIDC, TTC Rabale, Navi Mumbai - 400701, Bharat",
    branchContact: "+91 7777084837",
  },
  {
    branchName: "Central Warehouse",
    branchAddress:
      "Sri Arihant Complex, Building No.I-12 Gala No. 1 to 5, Kalher village, at Kopar Bhiwandi, Thane - 421302",
    branchContact: "+91 7777084837",
  },
];

export default function CompanyDetails() {
  return (
    <div className="text-[#505050] lg:w-[970px] lg:mx-auto m-10 flex flex-col justify-center">
      <MainBranch />
      <OtherBranches branches={otherBranchesData} />
    </div>
  );
}

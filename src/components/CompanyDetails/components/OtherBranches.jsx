import React from "react";
import BranchCard from "./BranchCard";

export default function OtherBranches({ branches }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 mt-20 gap-10">
      {branches.map((branch, index) => {
        return <BranchCard branch={branch} key={index} />;
      })}
    </div>
  );
}

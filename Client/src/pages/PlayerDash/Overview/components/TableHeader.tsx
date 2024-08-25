import React from "react";
import AccountTreeOutlinedIcon from "@mui/icons-material/AccountTreeOutlined";
import { Button } from "@/components/ui/button";
const TableHeader: React.FC = ({
}) => {
  return (
    <div
      className="text-center border-b-2 border-transparent w-full h-16 flex items-center justify-between gap-2 bg-background-dashalt rounded-md"
      style={{
        borderImage:
          "linear-gradient(90deg, rgba(255,249,34), rgba(255,0,128), rgba(56,2,155))",
        borderImageSlice: 1,
      }}
    >
      <section className="flex flex-col title">
        <div className="maintitle flex items-center gap-2 px-2">
          <AccountTreeOutlinedIcon />
          <p className="title font-semibold lg:text-xl">Player Match Perfomance</p>
        </div>
        <p className="self-start text-xs px-10">Current Season</p>
      </section>
      <Button variant={"outline"} className=" mx-4 bg-transparent hover:border-2">View All Matches</Button>
    </div>
  );
};

export default TableHeader;

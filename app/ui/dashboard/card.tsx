import React from "react";
import { CircleUser } from "lucide-react";

const Card = () => {
  return (
    <div className="bg-card hover:bg-cardHover p-5 rounded-lg flex gap-5 cursor-pointer w-full">
      <CircleUser size={20} />
      <div className="flex flex-col gap-5">
        <span>Total Users</span>
        <span className="text-2xl font-bold">10.273</span>
        <span className="text-sm font-light">
          <span className="text-lime-400">12% </span>
          more than previous week
        </span>
      </div>
    </div>
  );
};

export default Card;

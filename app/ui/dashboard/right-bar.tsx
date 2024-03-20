import React from "react";
import Image from "next/image";
import { BookOpen, Play } from "lucide-react";

const Rightbar = () => {
  return (
    <div>
      <div className="relative bg-card p-5 rounded-lg mb-5">
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2">
          <Image
            src="https://i.pinimg.com/564x/27/d1/8b/27d18b690462568a72ed4aeeeeadae64.jpg"
            alt="yanji"
            fill
            className="object-contain opacity-20"
          />
        </div>
        <div className="flex flex-col gap-6">
          <span className="font-bold">🔥 Available Now</span>
          <h3 className="font-medium text-xs text-soft ">
            How to use the new version of the admin dashboard ?
          </h3>
          <span>Takes 4 minutes to learn</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque,
            voluptate.
          </p>
          <button className="p-2 flex items-center gap-2 bg-blue-500 text-white border-none rounded-md cursor-pointer w-max">
            <Play />
            Watch
          </button>
        </div>
      </div>
      <div className="relative bg-card p-5 rounded-lg mb-5">
        <div className="flex flex-col gap-6">
          <span className="font-bold">🚀 Coming Soon</span>
          <h3 className="font-medium text-xs text-soft ">
            New server actions are available, partial pre-rendering is coming up
            !
          </h3>
          <span>Boost your productivity</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque,
            voluptate.
          </p>
          <button className="p-2 flex items-center gap-2 bg-blue-500 text-white border-none rounded-md cursor-pointer w-max">
            <BookOpen />
            Learn
          </button>
        </div>
      </div>
    </div>
  );
};

export default Rightbar;

import React from "react";

const Pagination = () => {
  return (
    <div className="p-2 flex items-center justify-between">
      <button
        className="py-1 px-2 cursor-pointer disabled:cursor-not-allowed"
        disabled
      >
        Previous
      </button>
      <button className="py-1 px-2 cursor-pointer disabled:cursor-not-allowed">
        Next
      </button>
    </div>
  );
};

export default Pagination;

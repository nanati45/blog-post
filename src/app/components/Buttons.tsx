import React from "react";

const Buttons = ({ name }: { name: string }) => {
  return (
    <div>
      <button className="bg-[#264fad] rounded-md text-white font-semibold px-2">
        {name}
      </button>
    </div>
  );
};

export default Buttons;

import React from "react";

const Buttons = ({ name, bg }: { name: string; bg: string }) => {
  return (
    <div>
      <button className={`bg-${bg} rounded-md text-white font-semibold px-2`}>
        {name}
      </button>
    </div>
  );
};

export default Buttons;

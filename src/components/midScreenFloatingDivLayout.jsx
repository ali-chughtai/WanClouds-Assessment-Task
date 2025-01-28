import React from "react";

const MidScreenFloatingDivLayout = ({child}) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 md:px-3">
      <div className="bg-white  max-w-96 md:max-w-7xl max-h-[80%] p-6 rounded-lg shadow-lg">
        {child}
      </div>
    </div>
  );
};

export default MidScreenFloatingDivLayout;

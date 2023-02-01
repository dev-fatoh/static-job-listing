import React from "react";

const Languages = ({ lan, addItem }) => {
  return (
    <button onClick={() => addItem(lan)}>
      <span className="p-2 font-bold text-teal-700 text-sm bg-teal-50 inline-block rounded m-2">
        {lan}
      </span>
    </button>
  );
};
export default Languages;

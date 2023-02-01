import React, { useState } from "react";

import data from "./data";
import "./index.css";
import Logo from "./components/Logo";
import Category from "./components/Category";

const App = () => {
  const [update, setUpdate] = useState([]);

  const addItem = (text) => {
    setUpdate([...update, text]);
  };

  return (
    <div className="bg-teal-50 h-full py-5">
      <div>
        {update.map((item) => (
          <Category lan={item} />
        ))}
      </div>

      {data.map((p) => (
        <div
          className={` mt-16 shadow p-3 border-2 w-4/5 mx-auto rounded relative bg-white ${
            p.featured && "border-7-l border-l-teal-800"
          }`}
          key={p.id}
        >
          <Logo logo={p.logo} />
          <div className="header flex space-x-2 my-4">
            <h1 className="mr-2 text-teal-800 font-bold">{p.company}</h1>
            {p.new && (
              <strong className="bg-teal-800 text-white text-xs p-1 rounded-xl">
                NEW!
              </strong>
            )}
            {p.featured && (
              <strong className="bg-black text-white p-1 text-xs rounded-xl">
                FEATURED
              </strong>
            )}
          </div>
          <h2 className="font-bold">{p.position}</h2>
          <div className="flex space-x-2 text-gray-500 py-4 border-b-2">
            <span>{p.postedAt}</span>
            <span>{p.contract}</span>
            <span>{p.location}</span>
          </div>
          <div className="categors my-2">
            <Category lan={p.role} addItem={addItem} />
            <Category lan={p.level} addItem={addItem} />
            {p.languages.map((lan, index) => (
              <Category key={index} lan={lan} addItem={addItem} />
            ))}
            {p.tools.map((tool, index) => (
              <Category key={index} lan={tool} addItem={addItem} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;

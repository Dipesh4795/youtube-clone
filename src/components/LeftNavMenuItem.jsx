import React, { useContext } from "react";
import { Context } from "../context/contextApi";
import { useNavigate } from "react-router-dom";

const LeftNavMenuItem = ({ text, icon, item, className }) => {
  const { setSelectedCategory, setSearchQuery } = useContext(Context);
  const navigate = useNavigate();
  const clickHandler = (name, type) => {
    navigate("/");
    setSearchQuery("");

    switch (type) {
      case "category":
        return setSelectedCategory(name);
      case "home":
        return setSelectedCategory(name);
      case "menu":
        return false;
      default:
        break;
    }
  };

  return (
    <div
      className={
        "text-white text-sm cursor-pointer h-10 flex items-center px-3 mb-[1px] rounded-lg hover:bg-white/[0.15] " +
        className
      }
      onClick={() => clickHandler(item.name, item.type)}
    >
      <span className="text-xl mr-5">{icon}</span>
      {text}
    </div>
  );
};

export default LeftNavMenuItem;

import React, { useState } from "react";
import MenuList from "./itemlist";

export default function MenuItem({ item }) {
  const [displayCurrentChildren, setDisplayCurrentChildren] = useState({});
  function handleClick(getCurrentlabel) {
    setDisplayCurrentChildren({
      ...displayCurrentChildren,
      [getCurrentlabel]: !displayCurrentChildren[getCurrentlabel],
    });
  }
  console.log(displayCurrentChildren)
  return (
    <li >
      <p>{item.label}</p>
      {item && item.children && item.children.length > 0 ? (
        <div>
          <span onClick={() => handleClick(item.label)}>+</span>
          {displayCurrentChildren[item.label] ? (
            <MenuList list={item.children} />
          ) : null}
        </div>
      ) : null}
    </li>
  );
}

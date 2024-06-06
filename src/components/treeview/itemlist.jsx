import React from "react";
import MenuElement from "./itemelement";
import { LiaAccusoft } from "react-icons/lia";

export default function MenuList({ list = [] }) {
  return (
    <ul className="menu-list-container">
      {list && list.length
        ? list.map((listItem) => <MenuElement item={listItem} />)
        : null}
    </ul>
  );
}

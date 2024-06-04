import React, { useState } from "react";
import data from "./data";
import "./style.css";

export default function Accordian() {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiple, srtMltiple] = useState([]);

  function handleSingleSelection(getCurrentId) {
    //console.log(getCurrentId);
    setSelected(getCurrentId === selected ? null : getCurrentId);
  }
  function handleMultipleSelection(getCurrentId) {
    const copymulti = [...multiple];
    const findIndex = copymulti.indexOf(getCurrentId);
    if (findIndex === -1) copymulti.push(getCurrentId);
    else copymulti.splice(findIndex, 1);
    srtMltiple(copymulti);
    //console.log(...copymulti);
  }
  //console.log( multiple);

  return (
    <div className="wrapper">
      <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>
        enable multiple selection
      </button>
      <div className="accordian">
        {data && data.length > 0
          ? data.map((dataItem) => (
              <div className="item">
                <div
                  className="title"
                  key={dataItem.id}
                  onClick={
                    enableMultiSelection
                      ?()=> handleMultipleSelection(dataItem.id)
                      :()=> handleSingleSelection(dataItem.id)
                  }
                >
                  <h3>{dataItem.question}</h3>
                  <span>+</span>
                </div>
                {enableMultiSelection
                  ? multiple.indexOf(dataItem.id) !== -1 && (
                      <div>{dataItem.answer}</div>
                    )
                  : selected === dataItem.id && <div> {dataItem.answer}</div>}
                {/* {selected === dataItem.id ? (
                  <div> {dataItem.answer}</div>
                ) : null} */}
              </div>
            ))
          : null}
      </div>
    </div>
  );
}

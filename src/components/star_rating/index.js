import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./style.css"
export default function Star_Rating({ no_of_star = 5 }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  function handleClick(getIndex) {
    setRating(getIndex);
  }

  function handleMouseEnter(getIndex) {
    setHover(getIndex);
  }
  function handleMouseLeave() {
    setHover(rating);
  }
  return (
    <div className="star-rating">
      {[...Array(no_of_star)].map((_,index) => {
            index+=1;
          return (
            <FaStar
              key={index}
              className={index<= (rating || hover) ? "active":"inactive"}
              size={40}
              onClick={() => handleClick(index)}
              onMouseMove={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
            />
          );
        })}
    </div>
  );
}

import "./Ticker.css";
import React, { useRef } from "react";

export default function Ticker(props) {
  const skillArray = props.data.main.bio.split(" - ");
  const ref = useRef(null);

  return (
    <div className="ticker-wrap">
      <div className="ticker">
        {shuffle(skillArray).map((skill, index) => {
          return <div className="ticker-item">{skill}</div>;
        })}
      </div>
    </div>
  );
}
const shuffle = (arr) => [...arr].sort(() => Math.random() - 0.5);

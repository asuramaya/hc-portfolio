import React, { Component, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Header.css";

export default function Header(props) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      <span
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        className="header"
      >
        <span>
          <h1>{props.data.main.name}</h1>
          <h2>{props.data.main.occupation}</h2>
        </span>
      </span>
      <>
        {isOpen ? (
          <div className="menuExpanded">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </div>
        ) : null}
      </>
    </>
  );
}

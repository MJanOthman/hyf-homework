import React from "react";
import "./App.css";

export default function BorderComponent(props) {
  return (
    <div className={`borderComponent-${props.color}`}>{props.children}</div>
  );
}

import React from "react";
import "./App.css";

export default function BorderComponent(prop) {
  return <div className={`borderComponent-${prop.color}`}>{prop.children}</div>;
}

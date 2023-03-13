import React, { useState } from "react";
import "./index.css";

function Input(props) {
  return (
    <div>
      <input
        type={props.type}
        name={props.name}
        id={props.id}
        placeholder={props.placeholder}
        className="input"
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
}

export default Input;

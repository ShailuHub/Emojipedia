import React from "react";
import "./index.css";
import { ImCross } from "react-icons/Im";

function Invalid(props) {
  return (
    <div>
      <div className="invalid-container">
        <div>
          <ImCross className="cross" onClick={props.onClick} />
          <p>{props.para}</p>
        </div>
      </div>
    </div>
  );
}

export default Invalid;

import React from "react";
import "./index.css";
import { TiTick } from "react-icons/Ti";

function Successfull(props) {
  return (
    <div>
      <div className="invalid-container">
        <div>
          <TiTick className="tick" onClick={props.onClick} />
          <p>{props.para}</p>
        </div>
      </div>
    </div>
  );
}

export default Successfull;

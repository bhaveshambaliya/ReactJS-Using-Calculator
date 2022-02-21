import React from "react";
import "./Display.css";

export const Display = (props: any) => {
  return (
    <>
      <div className="Result">
        <h1>{props.data}</h1>
      </div>
    </>
  );
};
export default Display;

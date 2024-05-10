import React from "react";

export default function Button({ btn, style }) {
  return (
    <div> 
      <button style={style} className="button">
        {btn}
      </button>
    </div>
  );
}

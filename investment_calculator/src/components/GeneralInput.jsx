import React from "react";

function GeneralInput({ inputLable, onChange, value }) {
  return (
    <div className="input-group">
      <legend>{inputLable}</legend>
      <input type="number" onChange={onChange} value={value} />
    </div>
  );
}

export default GeneralInput;

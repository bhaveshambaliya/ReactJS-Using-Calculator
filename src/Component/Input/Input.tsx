import React from "react";
export const Input = (props: any) => {
  const {label, onchange, name, type, value} = props;
  return (
    <div>
      <label>{label}</label>
      <input type={type} onChange={onchange} name={name} value={value} />
    </div>
  );
};
export default Input;

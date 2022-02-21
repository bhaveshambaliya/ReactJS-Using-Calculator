import React from "react";

const Button = (props: any) => {
  const {name, placeholder, onclick, value} = props;

  return (
    <>
      <button
        name={name}
        placeholder={placeholder}
        onClick={onclick}
        value={value}
      ></button>
    </>
  );
};
export default Button;

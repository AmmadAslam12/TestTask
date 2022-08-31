import React from "react";

export default function InputField(props) {
  const { placeholder, type, onChange, value, name } = props;
  return (
    <input
      type={type}
      placeholder={placeholder}
      name={name}
      onChange={onChange}
      value={value}
    />
  );
}

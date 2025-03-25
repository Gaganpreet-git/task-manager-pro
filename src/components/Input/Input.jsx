import React from "react";
import styles from "./Input.module.css";

const Input = ({ type = "text", name, value, onChange, options, placeholder }) => {
  return (
    <>
      {type === "select" ? (
        <select
          name={name}
          value={value}
          onChange={onChange}
          className={styles.selectField}
        >
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      ) : (
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={styles.inputField}
        />
      )}
    </>
  );
};

export default Input;

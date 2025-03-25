import React from "react";
import Input from "../Input/Input";
import Button from "../Button/Button";
import styles from "./Form.module.css";

const Form = ({ inputs, handleChange, handleSubmit, buttonLabel  }) => {
  return (
      <form onSubmit={handleSubmit} className={styles.form}>
        {inputs.map((input) => (
          <Input
            key={input.name}
            type={input.type}
            name={input.name}
            value={input.value}
            onChange={handleChange}
            options={input.options || []} 
            placeholder={input.placeholder}
          />
        ))}
        <Button>{buttonLabel}</Button>
      </form>
  );
};

export default Form;

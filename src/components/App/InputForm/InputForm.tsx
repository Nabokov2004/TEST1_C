import React from "react";
import { InputFormProps } from "../../../types/common";
import "./InputForm.css";
const InputForm: React.FC<InputFormProps> = ({ query, setQuery }) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setQuery({ ...query, [name]: value });
  };

  return (
    <div>
      <input
        className="input"
        type="text"
        name="name"
        placeholder="Имя"
        value={query.name}
        onChange={handleInputChange}
      />
      <input
        className="input"
        type="text"
        name="age"
        placeholder="Возраст"
        value={query.age}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default InputForm;

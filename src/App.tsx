import * as React from "react";
import "./style.css";

export default function App() {
  const [name, setName] = React.useState<string>("");
  const [age, setAge] = React.useState<string | undefined>();

  const changeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const changeAge = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <Input name="Name" value={name} onChange={changeName} />
      <Input name="Age" value={age} onChange={changeAge} />
    </div>
  );
}

type InputType = {
  name: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({ value, onChange, name }) => {
  return (
    <div>
      <label>{name}</label>
      <input value={value} onChange={onChange} />
    </div>
  );
};

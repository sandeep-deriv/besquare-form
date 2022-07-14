import * as React from "react";
import "./App.css";
import Input from "./Components/Common/Input";
import ColorPicker from "./Components/Common/ColorPicker";
import GenderInput from "./Components/Common/GenderInput";

export default function App() {
  const [name, setName] = React.useState<string>("");
  const [age, setAge] = React.useState<string | undefined>("");
  const [color, setColor] = React.useState<string | undefined>("red");
  const [gender, setGender] = React.useState<string | undefined>();

  const changeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const changeAge = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAge(event.target.value);
  };

  const changeColor = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setColor(event.target.value);
  };

  const changeG = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGender(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(name, age, color);
  };

  return (
    <div className="pa-16 container d-flex full-height-center">
      <div className="left w-50">
        <h2>Fill the Form!</h2>
        <form onSubmit={handleSubmit}>
          <Input name="Name" value={name} onChange={changeName} />
          <GenderInput name="Gender" value={gender} onChange={changeG} />
          <Input name="Age" value={age} onChange={changeAge} />
          <ColorPicker
            name="Favourite Color"
            value={color}
            onChange={changeColor}
          />
          <button type="submit" className="btn-primary mb-16">
            Submit
          </button>
          <button className="btn-secondary">Clear</button>
        </form>
      </div>
      <div className="right w-50 d-flex v-center h-center pa-16">
        {(name && age && color && (
          <p className="special-text pa-16" style={{ color }}>
            {name} is {age} years old, and he likes {color} color.
          </p>
        )) || <p className="no-data">Fill the form</p>}
      </div>
    </div>
  );
}

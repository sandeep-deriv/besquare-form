type SelectType = {
  name: string;
  value: string | undefined;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

const ColorPicker = ({ value, onChange, name }: SelectType) => {
  return (
    <div className="mb-16">
      <label>{name}</label>
      <select value={value} onChange={onChange}>
        <option value="red">Red</option>
        <option value="blue">Blue</option>
        <option value="green">Green</option>
        <option value="yellow">Yellow</option>
        <option value="grey">Grey</option>
        <option value="skyblue">Skyblue</option>
        <option value="aqua">Aqua</option>
        <option value="cyan">Cyan</option>
      </select>
    </div>
  );
};

export default ColorPicker;

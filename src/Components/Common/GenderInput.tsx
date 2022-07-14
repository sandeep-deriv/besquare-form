type RadioButtonType = {
  name: string;
  value: string | undefined;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export type Gender = {
  MALE: "male";
  FEMALE: "female";
};

const GenderInput = ({ value, onChange, name }: RadioButtonType) => {
  return (
    <div className="mb-16 radio-group">
      <div>
        <label>{name}</label>
      </div>
      <div>
        <label>
          <input
            type="radio"
            value="MALE"
            name={name}
            onChange={onChange}
            checked={value === "MALE"}
            className="radio"
          />
          Male
        </label>
      </div>
      <div>
        <label>
          <input
            type="radio"
            value="FEMALE"
            name={name}
            onChange={onChange}
            checked={value === "FEMALE"}
            className="radio"
          />
          Female
        </label>
      </div>
    </div>
  );
};

export default GenderInput;

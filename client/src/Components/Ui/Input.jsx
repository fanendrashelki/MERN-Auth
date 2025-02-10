import "./input.css";
const Input = ({ type, placeholder, value, required, onChange }) => {
  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        required={required}
        onChange={onChange}
        className="ui_input"
      />
    </>
  );
};

export default Input;

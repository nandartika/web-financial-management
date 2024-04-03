import PropTypes from "prop-types";
import { useState } from "react";

function Input(props) {
  const { name, label, value, type, onChange, validator } = props;
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { value } = e.target;

    if (validator) {
      const error = validator(value);
      setError(error || "");
    }

    onChange(e);
  };

  return (
    <div className="input-container">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        placeholder={label}
        name={name}
        value={value}
        onChange={handleChange}
        maxLength={name === "nik" ? 16 : undefined}
      />
      {error && <p className="error">{error}</p>}
    </div>
  );
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string,
  validator: PropTypes.func,
};

export default Input;

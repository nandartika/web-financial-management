import PropTypes from "prop-types";

function Select(props) {
  const { name, label, value, onChange } = props;

  const generateOptions = () => {
    switch (name) {
      case "gender":
        return [
          { key: "male", value: "Male", label: "Male" },
          { key: "female", value: "Female", label: "Female" },
        ];
      default:
        return [];
    }
  };

  return (
    <div className="select-container">
      <label htmlFor={name}>{label}</label>
      <select name={name} value={value} onChange={onChange}>
        {generateOptions().map((option) => (
          <option key={option.key} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

Select.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Select;

import { useState } from "react";
import PropTypes from "prop-types";
import Input from "./Input";
import Select from "./Select";

function FormDialog({ columns, isOpen, onClose, onSubmit }) {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit(formData);
    onClose();
  };

  const generateInput = (column) => {
    switch (column.type) {
      case "select":
        return (
          <Select
            key={column.key}
            name={column.key}
            label={column.name}
            onChange={handleChange}
            value={formData[column.key] || ""}
          />
        );
      case "text":
      case "number":
        return (
          <Input
            key={column.key}
            name={column.key}
            label={column.name}
            type={column.type}
            validator={column.validator}
            value={formData[column.key] || ""}
            onChange={handleChange}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className={`form-dialog ${isOpen ? "open" : ""}`}>
      <div className="form-dialog-content">
        <span className="close-button" onClick={onClose}>
          &times;
        </span>
        <h2>Formulir</h2>
        <form onSubmit={handleSubmit}>
          {columns.map((column) => generateInput(column))}
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

FormDialog.propTypes = {
  columns: PropTypes.array.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default FormDialog;

import PropTypes from "prop-types";
import ActionButtons from "./ActionButtons";

function Table({ columns, data, onEdit, onDelete }) {
  return (
    <table>
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column.key}>{column.name}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            {columns.map((column) =>
              column.key === "action" ? (
                <td key={column.key}>
                  <ActionButtons
                    onEdit={onEdit}
                    onDelete={onDelete}
                    personal={row}
                  />
                </td>
              ) : (
                <td key={column.key}>{row[column.key]}</td>
              )
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

Table.propTypes = {
  columns: PropTypes.array.isRequired,
  data: PropTypes.array.isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Table;

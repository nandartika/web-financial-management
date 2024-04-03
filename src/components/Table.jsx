import PropTypes from "prop-types";
import ActionButtons from "./ActionButtons";

function Table({ columns, data }) {
  return (
    <table>
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column.key}>{column.title}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            {columns.map((column) =>
              column.key === "action" ? (
                <td key={column.key}>
                  <ActionButtons />
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
};

export default Table;

import PropTypes from "prop-types";
import {
  FaRegEdit as EditIcon,
  FaRegTrashCan as DeleteIcon,
} from "react-icons/fa";

function ActionButtons({ onEdit, onDelete }) {
  return (
    <div>
      <button onClick={onEdit}>
        <EditIcon />
      </button>
      <button onClick={onDelete}>
        <DeleteIcon />
      </button>
    </div>
  );
}

ActionButtons.propTypes = {
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ActionButtons;

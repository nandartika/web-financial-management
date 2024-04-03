import PropTypes from "prop-types";
import {
  FaRegEdit as EditIcon,
  FaRegTrashAlt as DeleteIcon,
} from "react-icons/fa";

function ActionButtons({ onEdit, onDelete, personal }) {
  return (
    <div className="action-buttons">
      <button className="action-button edit" onClick={onEdit}>
        <EditIcon />
      </button>
      <button className="action-button delete" onClick={() => onDelete(personal.id)}>
        <DeleteIcon />
      </button>
    </div>
  );
}

ActionButtons.propTypes = {
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  personal: PropTypes.object.isRequired,
};

export default ActionButtons;

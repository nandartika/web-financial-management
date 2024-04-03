import PropTypes from "prop-types";

const IdType = {
  PERSONAL: "personal",
  LOAN: "loan",
  REPORT: "report",
};

const generateUniqueTimestampId = (type) => {
  const timestamp = Date.now();
  return `${type}-${timestamp}`;
};

generateUniqueTimestampId.propTypes = {
  type: PropTypes.oneOf(Object.values(IdType)),
};

export { IdType };

export default generateUniqueTimestampId;

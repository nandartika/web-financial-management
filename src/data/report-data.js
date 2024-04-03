import generateUniqueTimestampId, { IdType } from "../utils/idGenerator";

const columns = [
  {
    key: "id",
    name: "Code",
  },
  {
    key: "name",
    name: "Name",
  },
  {
    key: "unpaid_loan_count",
    name: "Unpaid loan count",
  },
  {
    key: "unpaid_summary_loan",
    name: "Unpaid summary loan",
  },
  {
    key: "paid_loan_count",
    name: "Paid loan count",
  },
  {
    key: "paid_summary_loan",
    name: "Paid summary loan",
  },
];

const data = [
  {
    id: generateUniqueTimestampId(IdType.REPORT),
    name: "John Doe",
    unpaid_loan_count: 3,
    unpaid_summary_loan: 3000,
    paid_loan_count: 5,
    paid_summary_loan: 5000,
  },
  {
    id: generateUniqueTimestampId(IdType.REPORT),
    name: "Jane Smith",
    unpaid_loan_count: 1,
    unpaid_summary_loan: 1000,
    paid_loan_count: 7,
    paid_summary_loan: 7000,
  },
  {
    id: generateUniqueTimestampId(IdType.REPORT),
    name: "Alex Johnson",
    unpaid_loan_count: 0,
    unpaid_summary_loan: 0,
    paid_loan_count: 10,
    paid_summary_loan: 10000,
  },
];

export { columns, data };

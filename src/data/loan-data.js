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
    key: "amount",
    name: "Amount",
  },
  {
    key: "status",
    name: "Status",
  },
  {
    key: "create_on",
    name: "Create on",
  },
  {
    key: "create_by",
    name: "Create by",
  },
  {
    key: "change_on",
    name: "Change on",
  },
  {
    key: "change_by",
    name: "Change by",
  },
  {
    key: "action",
    name: "Action",
  },
];

const data = [
  {
    id: generateUniqueTimestampId(IdType.LOAN),
    name: "Product 1",
    amount: 100,
    status: "Pain",
    create_on: "2024-03-01",
    create_by: "Admin",
    change_on: "2024-03-02",
    change_by: "Editor",
  },
  {
    id: generateUniqueTimestampId(IdType.LOAN),
    name: "Product 2",
    amount: 200,
    status: "Unpaid",
    create_on: "2024-03-02",
    create_by: "Admin",
    change_on: "2024-03-03",
    change_by: "Editor",
  },
  {
    id: generateUniqueTimestampId(IdType.LOAN),
    name: "Product 3",
    amount: 300,
    status: "Paid",
    create_on: "2024-03-03",
    create_by: "Admin",
    change_on: "2024-03-04",
    change_by: "Editor",
  },
];

export { columns, data };

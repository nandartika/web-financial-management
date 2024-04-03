const columns = [
  {
    key: "id",
    name: "Code",
  },
  {
    key: "name",
    name: "Name",
    type: "text",
  },
  {
    key: "nik",
    name: "KTP No.",
    type: "text",
    validator: (value) => {
      if (value.length < 16) {
        return "KTP No. should be 16 digits";
      }
    },
  },
  {
    key: "gender",
    name: "Gender",
    type: "select",
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
    id: "personal-1712158241724",
    name: "John Doe",
    gender: "Male",
    create_on: "2024-03-01",
    create_by: "Admin",
    change_on: "2024-03-02",
    change_by: "Editor",
  },
  {
    id: "personal-1712158241725",
    name: "Jane Smith",
    gender: "Female",
    create_on: "2024-03-02",
    create_by: "Admin",
    change_on: "2024-03-03",
    change_by: "Editor",
  },
  {
    id: "personal-1712158241726",
    name: "Alex Johnson",
    gender: "Male",
    create_on: "2024-03-03",
    create_by: "Admin",
    change_on: "2024-03-04",
    change_by: "Editor",
  },
];

export { columns, data };

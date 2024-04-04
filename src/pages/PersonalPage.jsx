import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  asyncAddPersonal,
  asyncDeletePersonal,
  asyncReceivePersonals,
} from "../states/personals/action";
import Table from "../components/Table";
import { columns } from "../data/personal-data";
import FormDialog from "../components/FormDialog";
import Button from "../components/Button";

function PersonalPage() {
  const dispatch = useDispatch();
  const personals = useSelector((state) => state.personals);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    dispatch(asyncReceivePersonals());
  }, [dispatch]);

  const handleAddPersonal = (personal) => {
    dispatch(asyncAddPersonal(personal));
  };

  const handleEditPersonal = (personal) => {
    console.log(personal)
  };

  const handleDeletePersonal = (personalId) => {
    dispatch(asyncDeletePersonal(personalId));
  };

  return (
    <section className="personal-page">
      <h1>Personal</h1>

      <Button onClick={() => setIsOpen(true)}>Add Personal</Button>

      <Table
        columns={columns}
        data={personals}
        onEdit={handleEditPersonal}
        onDelete={handleDeletePersonal}
      />

      <FormDialog
        columns={columns}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onSubmit={handleAddPersonal}
      />
    </section>
  );
}

export default PersonalPage;

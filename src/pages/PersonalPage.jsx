import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  asyncDeletePersonal,
  asyncReceivePersonals,
} from "../states/personals/action";
import Table from "../components/Table";
import { columns } from "../data/personal-data";

function PersonalPage() {
  const dispatch = useDispatch();
  const personals = useSelector((state) => state.personals);
  console.log(personals);

  useEffect(() => {
    dispatch(asyncReceivePersonals());
  }, [dispatch]);

  const handleAddPersonal = () => {};

  const handleEditPersonal = (personal) => {};

  const handleDeletePersonal = (personalId) => {
    dispatch(asyncDeletePersonal(personalId));
  };

  return (
    <Table
      columns={columns}
      data={personals}
      onEdit={handleEditPersonal}
      onDelete={handleDeletePersonal}
    />
  );
}

export default PersonalPage;

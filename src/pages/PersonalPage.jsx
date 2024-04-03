import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncReceivePersonals } from "../states/personals/action";
import Table from "../components/Table";
import { columns } from "../data/personal-data";

function PersonalPage() {
  const dispatch = useDispatch();
  const personals = useSelector((state) => state.personals);
  console.log(personals)

  useEffect(() => {
    dispatch(asyncReceivePersonals());
  }, [dispatch]);

  return (
    <Table columns={columns} data={personals}/>
  );
}

export default PersonalPage;

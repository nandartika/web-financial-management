import generateDate from "../utils/dateGenerator";
import generateUniqueTimestampId, { IdType } from "../utils/idGenerator";
import { data } from "./personal-data";

const mockAPI = (() => {
  let personals = getPersonalsFromStorage() || data;

  function getPersonalsFromStorage() {
    const personals = localStorage.getItem("personals");

    if (!personals) {
      return;
    }

    return JSON.parse(personals);
  }

  function savePersonalsToStorage() {
    localStorage.setItem("personals", JSON.stringify(personals));
  }

  function mockRequest(action) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(action());
      }, 1000);
    });
  }

  function getPersonals() {
    return mockRequest(() => {
      return JSON.parse(JSON.stringify(personals));
    });
  }

  function addPersonal(req) {
    return mockRequest(() => {
      const personal = {
        id: generateUniqueTimestampId(IdType.PERSONAL),
        ...req,
        create_on: generateDate(),
        create_by: "Admin",
        change_on: generateDate(),
        change_by: "Admin",
      }
      personals = [...personals, personal];
      savePersonalsToStorage();
      return personal;
    });
  }

  function editPersonal(personal) {
    return mockRequest(() => {
      const newPersonals = personals.map((item) => {
        if (item.id === personal.id) {
          return personal;
        }
        return item;
      });
      personals = newPersonals;
      savePersonalsToStorage();
      return personal;
    });
  }

  function deletePersonal(personalId) {
    return mockRequest(() => {
      const newPersonals = personals.filter((item) => item.id !== personalId);
      personals = newPersonals;
      savePersonalsToStorage();
    });
  }

  return { getPersonals, addPersonal, editPersonal, deletePersonal };
})();

export default mockAPI;

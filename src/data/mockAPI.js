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

  function mockRequest(action) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(action());
      }, 1000);
    });
  }

  function getPersonalsData() {
    return mockRequest(() => {
      return JSON.parse(JSON.stringify(personals));
    });
  }

  return { getPersonalsData };
})();

export default mockAPI;

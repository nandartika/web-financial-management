import { ActionType } from "./action";

function personalsReduser(personals = [], action = {}) {
  switch (action.type) {
    case ActionType.RECEIVE_PERSONALS:
      return action.payload.personals;
    case ActionType.ADD_PERSONAL:
      return [...personals, action.payload.personal];
    case ActionType.EDIT_PERSONAL:
      return personals.map((personal) => {
        if (personal.id !== action.payload.personal.id) {
          return personal;
        }
        return action.payload.personal;
      });
    case ActionType.DELETE_PERSONAL:
      return personals.filter(
        (personal) => personal.id !== action.payload.personalId
      );
    default:
      return personals;
  }
}

export default personalsReduser;

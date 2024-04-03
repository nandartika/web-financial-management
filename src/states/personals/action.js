import mockAPI from "../../data/mockAPI";

const ActionType = {
  RECEIVE_PERSONALS: "RECEIVE_PERSONAL",
  ADD_PERSONAL: "ADD_PERSONAL",
  EDIT_PERSONAL: "EDIT_PERSONAL",
  DELETE_PERSONAL: "DELETE_PERSONAL",
};

function receivePersonalsActionCreator(personals) {
  return {
    type: ActionType.RECEIVE_PERSONALS,
    payload: {
      personals,
    },
  };
}

function addPersonalActionCreator(personal) {
  return {
    type: ActionType.ADD_PERSONAL,
    payload: {
      personal,
    },
  };
}

function editPersonalActionCreator(personal) {
  return {
    type: ActionType.EDIT_PERSONAL,
    payload: {
      personal,
    },
  };
}

function deletePersonalActionCreator(personalId) {
  return {
    type: ActionType.DELETE_PERSONAL,
    payload: {
      personalId,
    },
  };
}

function asyncReceivePersonals() {
  return async (dispatch) => {
    try {
      const personals = await mockAPI.getPersonalsData();
      dispatch(receivePersonalsActionCreator(personals));
    } catch (error) {
      alert(error.message);
    }
  };
}

export {
  ActionType,
  receivePersonalsActionCreator,
  addPersonalActionCreator,
  editPersonalActionCreator,
  deletePersonalActionCreator,
  asyncReceivePersonals,
};

import { GET_PROJECTS, GET_ACTIONS, PROJECT_ACTIONS } from "./actions";

const initialState = {
  projects: [],
  actions: [],
  projectActions: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PROJECTS:
      return {
        ...state,
        projects: action.payload
      };

    case GET_ACTIONS:
      return {
        ...state,
        actions: action.payload
      };

    case PROJECT_ACTIONS:
      return {
        ...state,
        projectActions: action.payload
      };

    default:
      return state;
  }
};

export default reducer;

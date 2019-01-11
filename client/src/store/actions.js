import axios from "axios";

export const GET_PROJECTS = "GET_PROJECTS";
export const GET_ACTIONS = "GET_ACTIONS";
export const PROJECT_ACTIONS = "PROJECT_ACTIONS";

export const getProjects = () => dispatch => {
  axios
    .get("https://sprint-tommy-node-express.herokuapp.com/projects")
    .then(res => dispatch({ type: GET_PROJECTS, payload: res.data }))
    .catch(err => console.log("Could not fetch projects"));
};

export const getActions = () => dispatch => {
  axios
    .get("https://sprint-tommy-node-express.herokuapp.com/actions")
    .then(res => dispatch({ type: GET_ACTIONS, payload: res.data }))
    .catch(err => console.log("Could not fetch actions"));
};

export const getProjectActions = id => dispatch => {
  axios
    .get(
      `https://sprint-tommy-node-express.herokuapp.com/projects/${id}/actions`,
      id
    )
    .then(res => dispatch({ type: PROJECT_ACTIONS, payload: res.data }))
    .catch(err => console.log("Could not fetch project's actions"));
};

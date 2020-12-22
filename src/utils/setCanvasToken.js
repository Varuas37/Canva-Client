import axios from "axios";

const setCanvasAuth = (canvasToken,domain) => {
  if (canvasToken&&domain) {
    axios.defaults.headers.common["canvastoken"] = canvasToken;
    axios.defaults.headers.common["domain"] = domain;
    console.log("I am inside setCanvas Auth")
    console.log(axios.defaults.headers.common["domain"])
  } else {
    delete axios.defaults.headers.common["canvastoken"];
    delete axios.defaults.headers.common["domain"];
  }
};
export default setCanvasAuth;

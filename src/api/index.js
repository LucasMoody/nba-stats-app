import directApi from "./direct-api";
import mockedApi from "./mocked-api";

let api = mockedApi;

function setApi(newApi) {
  api = newApi;
}

export default api;

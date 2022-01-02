interface endpointI {
  url: string
  method: "get" | "post" | "patch" | "put" | "delete"
}

const baseURL = "http://localhost:5000"

export const loginEndpoint: endpointI = {
  url: `${baseURL}/login`,
  method: "post",
}

export const signupEndpoint: endpointI = {
  url: `${baseURL}/signup`,
  method: "post",
}

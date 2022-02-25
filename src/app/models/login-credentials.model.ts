
// In this class, we will define the structure for the login data
// These models correspond to both the login parameters and the login response


export interface loginParameters {
  email: string;
  password: string;
}

export interface loginResponse {
  email: string;
  first_name: string;
  last_name: string;
}

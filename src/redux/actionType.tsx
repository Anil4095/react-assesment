// types.ts
export const LOGIN = 'LOGIN';
export const CONFIRM_PASSWORD = "CONFIRM_PASSWORD";
// export const DASHBOARD = "DASHBOARD";

interface LoginAction {
  type: typeof LOGIN;
  payload: {
    email: string;
    password: string;
  };
}
interface SignupAction {
  type: typeof CONFIRM_PASSWORD;
  payload: {
    email: string;
    password: string;
    confirmPassword: string
  };
}


export type AuthActionTypes = LoginAction | SignupAction;

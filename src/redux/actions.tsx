// actions.ts
import { LOGIN, CONFIRM_PASSWORD } from './actionType';

export const login = (email: string, password: string) => {
  return {
    type: LOGIN,
    payload: { email, password }
  };
};

export const signup = (email: string, password: string, confirmPassword: string) => {
  return {
    type: CONFIRM_PASSWORD,
    payload: { email, password, confirmPassword }
  };
};


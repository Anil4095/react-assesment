import { LOGIN, AuthActionTypes, CONFIRM_PASSWORD } from './actionType';

interface AuthState {
  email: string;
  password: string;
  isLoggedIn: boolean;
  confirmPassword:string;
}

const initialState: AuthState = {
  email: '',
  password: '',
  isLoggedIn: false,
  confirmPassword: '',
};

const authReducer = (state = initialState, action: AuthActionTypes): AuthState => {
  console.log("value of confirm password ", action.payload)
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        email: action.payload.email,
        password: action.payload.password,
        isLoggedIn: true
      };
      case CONFIRM_PASSWORD:
        return {
          ...state,
          email: action.payload.email,
          password: action.payload.password,
          confirmPassword: action.payload.confirmPassword,
          isLoggedIn: false
        };
    default:
      return state;
  }
};

export default authReducer;

import { TOGGLE_THEME } from './action';

export interface AppState {
  theme: string;
}

const initialState: AppState = {
  theme: 'light'
};

const appReducer = (state = initialState, action: any): AppState => {
  switch (action.type) {
    case TOGGLE_THEME:
      return {
        ...state,
        theme: state.theme === 'light' ? 'dark' : 'light'
      };
    default:
      return state;
  }
};

export default appReducer;

import { reducer } from './reducer.js';
import { defaultState } from './state.js';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || Redux.compose;

export const store = Redux.createStore(
  reducer,
  defaultState,
  composeEnhancers()
);

store.dispatch({
  type: "UpdateState",
  state: defaultState
});
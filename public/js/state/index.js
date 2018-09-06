
import * as actions from './actions.js';
import { store } from './store.js';

const State = function() {
  const _this = this;

  _this.actions = actions;
  _this.store = store;

  _this.get = () => store.getState();
  _this.subscribe = fn => store.subscribe(fn);
};

window.state = new State();
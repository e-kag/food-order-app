import './action-types.js';
import { store } from './store.js';
import { ADD_ITEM, REMOVE_ITEM } from './action-types.js';

export function addItem(item) {
  store.dispatch({
    type: ADD_ITEM,
    item
  });
};

export function removeItem(itemName){
  store.dispatch({
    type: REMOVE_ITEM,
    itemName
  });
};
import './action-types.js';
import { ADD_ITEM, REMOVE_ITEM } from './action-types.js';

import roundTo from '../util/round.js';

export const reducer = (state, action) => {
  let _state = Object.assign({}, state);

  switch (action.type) {
    case ADD_ITEM: {
      const item = action.item;
      const order = _state.order;
      const orderItems = order.items;
      
      const orderItem = orderItems.find(_item => _item.name === item.name);
      if (orderItem) orderItem.count++;
      else {
        item.count = 1;
        orderItems.push(item);
      }
  
      order.total += item.price;
      order.total = roundTo(order.total, 2);

      break;
    }
    case REMOVE_ITEM: {
      const name = action.itemName;
      const order = _state.order;
      const orderItems = order.items;
      
      const orderItem = orderItems.find(_item => _item.name === name);
      if (orderItem) {
        order.total -= orderItem.price;
  
        if (orderItem.count === 1) _state.order.items = orderItems.filter(item => item.name !== name);
        else orderItem.count--;
      }
  
      order.total = roundTo(order.total, 2);

      break;
    }
    default: {
      _state = action.state;
    }
  }

  return _state;
};
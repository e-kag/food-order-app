import { PolymerElement, html } from '../../../node_modules/@polymer/polymer/polymer-element.js';
import './menuItem.js';
import './counter.js';

class MenuItemOrderElement extends PolymerElement {
  static get template() {
    return html`
      <div>
        <menu-item id="[[id]]" name="[[name]]" price="[[price]]"></menu-item>
        <item-counter id="numItems" min="0"></item-counter>
      </div>
    `;
  }

  static get properties() {
    return {
        id: String, 
        name: String,
        price: Number,
        count: {
          type: Number,
          value: 0
        }
    };
  }

  addItem() {
    state.actions.addItem({
      name: this.name,
      price: this.price
    });
  }

  removeItem() {
    state.actions.removeItem(this.name);
  }

  constructor() {
    super();

    this.addEventListener('add-item', this.addItem);
    this.addEventListener('remove-item', this.removeItem);
  }
}
customElements.define('menu-item-order', MenuItemOrderElement);


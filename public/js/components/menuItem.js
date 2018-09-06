import { PolymerElement, html } from '../../../node_modules/@polymer/polymer/polymer-element.js';
import './counter.js';
import './price.js';

class MenuItemElement extends PolymerElement {
  static get template() {
    return html`
      <style>
        .price:before {
          content: '$'
        }
      </style>

      <span>[[name]]</span> -- <food-price value="[[price]]"></food-price>
    `;
  }

  static get properties() {
    return {
        id: String, 
        name: String,
        price: Number
    };
  }
}
customElements.define('menu-item', MenuItemElement);


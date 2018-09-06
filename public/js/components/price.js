import { PolymerElement, html } from '../../../node_modules/@polymer/polymer/polymer-element.js';

class PriceElement extends PolymerElement {
  static get template() {
    return html`
      <style>
        .price:before {
          content: '$'
        }
      </style>

      <span class="price">[[value]]</span>
    `;
  }

  static get properties() {
    return {
        value: {
          type: String,
          value: 0,
          observer: '_handleChange'
        }
    };
  }

  _handleChange() {
    if (this.value) this.set('value', Number(this.value).toFixed(2))
    else this.set('value', Number(0).toFixed(2));
  }

  toString() {
    return this.value.toFixed(2);
  }
}
customElements.define('food-price', PriceElement);


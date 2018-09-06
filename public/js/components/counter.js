import { PolymerElement, html } from '../../../node_modules/@polymer/polymer/polymer-element.js';

class CounterElement extends PolymerElement {
  static get template() {
    return html`
      <style>
        input[invalid=true] {
          border-color: red;
        }
      </style>
      <div>
        <button on-click="decrement" disabled$="{{_belowMin(count, min)}}">-</button>
        <input id="count" value="{{count::input}}"/>
        <button on-click="increment" disabled$="{{_aboveMax(count, max)}}">+</button>
      </div>
    `;
  }

  static get properties() {
    return {
        count: {
          type: Number,
          value: 0,
          observer: '_handleChange'
        },
        min: Number,
        max: Number
    };
  }

  _aboveMax(count, max) {
    const valid = count instanceof Number || String(count).match(/^[0-9]*$/);
    return !valid || (max !== undefined && count >= max);
  }

  _belowMin(count, min) {
    const valid = count instanceof Number || String(count).match(/^[0-9]*$/);
    return !valid || (min != undefined && count <= min);
  }

  _handleChange() {    
    const valid = String(this.count).match(/^[0-9]*$/);
    if (valid) this.$.count.removeAttribute('invalid');
    else this.$.count.setAttribute('invalid', true);
  }

  increment() {
    if (!this.max || this.count < this.max) {
      this.count++;
      this.dispatchEvent(new CustomEvent('add-item', {bubbles: true, composed: true}));
    }
  }

  decrement() {
    if (this.min ||this.count > this.min) {
      this.count--;
      this.dispatchEvent(new CustomEvent('remove-item', {bubbles: true, composed: true}));
    }
  }
}
customElements.define('item-counter', CounterElement);


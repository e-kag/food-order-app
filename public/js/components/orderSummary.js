import { PolymerElement, html } from '../../../node_modules/@polymer/polymer/polymer-element.js';
import { DomRepeat} from '../../../node_modules/@polymer/polymer/lib/elements/dom-repeat.js';
import './price.js';

class OrderSummaryElement extends PolymerElement {
  static get template() {
    return html`
        <h3>Total: <food-price value="[[total]]"></food-price></h3>
        <dom-repeat id="orderedItems" items="{{orderItems}}" as="orderedItem" mutable-data>
          <template>
            <h2>[[orderedItem.name]] x[[orderedItem.count]]</h2>
          </template>
        </dom-repeat>
    `;
  }

  static get properties() {
    return {
        orderItems: {
            type: Array,
            value() {
              return state.get().order.items;
            }
        },
        total: {
          type: Number,
          value: 0
        }
    };
  }

  constructor() {
    super();

    state.subscribe(() => {
      const order = state.get().order;
      
      this.set('orderItems', order.items);
      this.set('total', order.total);

      this.$.orderedItems.render();
    });
  }
}
customElements.define('order-summary', OrderSummaryElement);


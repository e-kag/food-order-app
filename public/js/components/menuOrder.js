import { PolymerElement, html } from '../../../node_modules/@polymer/polymer/polymer-element.js';
import { DomRepeat} from '../../../node_modules/@polymer/polymer/lib/elements/dom-repeat.js';
import './menuItemOrder.js';
import './orderSummary.js';

class MenuOrderElement extends PolymerElement {
  static get template() {
    return html`
        <dom-repeat id="menuItems" items="{{menuItems}}" as="menuItem">
          <template>
            <h3>[[menuItem.name]]</h3>
            <ul>
              <dom-repeat id="categoryItems" items="{{menuItem.items}}">
                <template>
                  <menu-item-order id="[[item.id]]" name="[[item.name]]" price="[[item.price]]"/>
                </template>
              </dom-repeat>
            </ul>
          </template>
        </dom-repeat>
    `;
  }

  static get properties() {
    return {
        menuItems: {
            type: Array,
            reflectToAttribute: true,
            value() {
              return state.get().menu;
            }
        }
    };
  }

  constructor() {
    super();

    this.menuItems = state.get().menu;
  }
}
customElements.define('food-menu-order', MenuOrderElement);


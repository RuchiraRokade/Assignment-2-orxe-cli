import { html, customElement, LitElement, property } from "lit-element";
import styles from "./counter-css";
// import "@orxe-components/icons";
// import "@orxe-components/icon";

@customElement("orxe-counter")
export default class OrxeCounter extends LitElement {
  @property({ type: Number })
  count = 0;

  @property({ type: Boolean })
  disableInc = false;

  @property({ type: Boolean })
  disableDec = false;

  @property({ type: Number })
  minValue;

  @property({ type: Number })
  maxValue;

  constructor() {
    super();
  }

  /**
   * Implement `render` to define a template for button element.
   */
  render() {
    return html`
      <div class="counter-container">
        <div class="button-container">
          <button
            id="dec"
            class="ripple"
            aria-label="Decrement button"
            @click=${this.decrementValue}
            ?disabled="${this.disableDec}"
          >
            <span class="button-icon">-</span>
          </button>
        </div>
        <p class="counter-label-value">${this.count}</p>
        <div class="button-container ">
          <button
            id="inc"
            class="ripple"
            aria-label="Increment button"
            @click=${this.incrementValue}
            ?disabled="${this.disableInc}"
          >
            <span class="button-icon">+</span>
          </button>
        </div>
      </div>
    `;
  }

  checkValue() {
    if (this.maxValue || this.minValue) {
      this.disableInc = this.count === this.maxValue ? true : false;
      this.disableDec = this.count === this.minValue ? true : false;
    }
  }

  /**
   * Increment function increments the value of count by 1
   */
  incrementValue() {
    this.count += 1;
    this.checkValue();
  }

  /**
   * Decrement function decrements the value of count by 1
   */
  decrementValue() {
    this.count = this.count > 0 ? this.count - 1 : this.count;
    this.checkValue();
  }

  /**
   *  Getting styles from components custom scss file
   */
  static styles = styles;
}

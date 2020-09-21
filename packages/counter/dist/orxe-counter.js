var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { html, customElement, LitElement, property } from "lit-element";
import styles from "./counter-css";
let OrxeCounter = class OrxeCounter extends LitElement {
    constructor() {
        super();
        this.count = 0;
        this.disableInc = false;
        this.disableDec = false;
    }
    render() {
        return html `
      <div class="counter-container">
        <div class="button-container">
          <button
            id="dec"
            class="ripple"
            aria-label="Decrement button"
            @click=${this.decrementValue}
            ?disabled="${this.disableDec}"
          >
            -
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
            +
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
    incrementValue() {
        this.count += 1;
        this.checkValue();
    }
    decrementValue() {
        this.count = this.count > 0 ? this.count - 1 : this.count;
        this.checkValue();
    }
};
OrxeCounter.styles = styles;
__decorate([
    property({ type: Number }),
    __metadata("design:type", Object)
], OrxeCounter.prototype, "count", void 0);
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Object)
], OrxeCounter.prototype, "disableInc", void 0);
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Object)
], OrxeCounter.prototype, "disableDec", void 0);
__decorate([
    property({ type: Number }),
    __metadata("design:type", Object)
], OrxeCounter.prototype, "minValue", void 0);
__decorate([
    property({ type: Number }),
    __metadata("design:type", Object)
], OrxeCounter.prototype, "maxValue", void 0);
OrxeCounter = __decorate([
    customElement("orxe-counter"),
    __metadata("design:paramtypes", [])
], OrxeCounter);
export default OrxeCounter;

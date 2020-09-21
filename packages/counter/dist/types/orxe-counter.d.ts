import { LitElement } from "lit-element";
export default class OrxeCounter extends LitElement {
    count: number;
    disableInc: boolean;
    disableDec: boolean;
    minValue: any;
    maxValue: any;
    constructor();
    render(): import("lit-element").TemplateResult;
    checkValue(): void;
    incrementValue(): void;
    decrementValue(): void;
    static styles: import("lit-element").CSSResult;
}

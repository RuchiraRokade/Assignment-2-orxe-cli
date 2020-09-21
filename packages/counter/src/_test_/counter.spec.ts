import { OrxeCounter } from "../";
import "@testing-library/jest-dom";

describe("orxe-counter", () => {
  let counter;

  beforeEach(async function() {
    OrxeCounter;
    counter = (await document.body.appendChild(
      document.createElement("orxe-counter")
    )) as OrxeCounter;
  });

  afterEach(async function() {
    await counter.remove();
  });

  function getElementById(id: string): HTMLElement {
    return counter.shadowRoot.querySelector(`${id}`);
  }

  it("should exist", () => {
    expect(counter).toBeTruthy();
  });

  it("default count should be 0", () => {
    expect(counter.count).toEqual(0);
  });

  it("default disableInc should be false", () => {
    expect(counter.disableInc).toEqual(false);
  });
  it("default disableDec should be false", () => {
    expect(counter.disableDec).toEqual(false);
  });

  it("setting count property", async () => {
    counter["count"] = 10;
    expect(counter.count).toEqual(10);
  });

  it("incrementing count property", async () => {
    counter["count"] = 10;
    const incButton = getElementById("#inc");
    incButton.click();
    expect(counter.count).toEqual(11);
  });

  it("decrementing count property", async () => {
    counter["count"] = 10;
    const decButton = getElementById("#dec");
    decButton.click();
    expect(counter.count).toEqual(9);
  });

  it("decrementing count property when count = 0", async () => {
    counter["count"] = 0;
    const decButton = getElementById("#dec");
    decButton.click();
    expect(counter.count).toEqual(0);
  });

  it("disabled inc button, click should be falsy", async () => {
    counter["disableInc"] = true;
    counter["count"] = 10;
    const incButton = getElementById("#inc");
    expect(incButton.onclick).toBeFalsy();
  });

  it("disabled dec button, click should be falsy", async () => {
    counter["disableDec"] = true;
    counter["count"] = 10;
    const decButton = getElementById("#dec");
    expect(decButton.onclick).toBeFalsy();
  });

  it("Disable inc button when count = maxValue", async () => {
    counter["count"] = 34;
    counter["maxValue"] = 35;
    const incButton = getElementById("#inc");
    incButton.click();
    expect(incButton.onclick).toBeFalsy();
  });

  it("Disable dec button when count = minValue", async () => {
    counter["count"] = 26;
    counter["minValue"] = 25;
    const decButton = getElementById("#dec");
    decButton.click();
    expect(decButton.onclick).toBeFalsy();
  });
});

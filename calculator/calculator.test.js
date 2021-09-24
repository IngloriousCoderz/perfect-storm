// Behavior-Driven Development

const calculator = require("./calculator");

describe("Calculator App", () => {
  it("adds two numbers together", () => {
    // given
    const a = 2;
    const b = 3;
    const expectedResult = 5;

    // when
    const result = calculator.sum(a, b);

    // then
    expect(result).toBe(expectedResult);
  });

  it("adds any two numbers together", () => {
    // given
    const a = 5;
    const b = 7;
    const expectedResult = 12;

    // when
    const result = calculator.sum(a, b);

    // then
    expect(result).toBe(expectedResult);
  });

  it("returns null if one of the parameters is null", () => {
    expect(calculator.sum(5, null)).toBe(null);
  });
});

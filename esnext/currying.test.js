const sum = (a, b) => a + b;
const curriedSum = (a) => (b) => a + b;

describe("Currying", () => {
  it("should sum two numbers without currying", () => {
    // given
    const a = 2;
    const b = 3;
    const expectedResult = 5;

    // when
    const result = sum(a, b);

    // then
    expect(result).toBe(expectedResult);
  });

  it("should sum two numbers with currying", () => {
    // given
    const a = 2;
    const b = 3;
    const expectedResult = 5;

    // when
    const result = curriedSum(a)(b);

    // then
    expect(result).toBe(expectedResult);
  });
});

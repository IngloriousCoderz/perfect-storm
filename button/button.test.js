const button = require("./button");

describe("Button App", () => {
  it("renders a button", () => {
    // given
    const rows = 10;
    const columns = 10;
    const label = "ciao";
    const expectedResult = `
* * * * * * * * * * 
*                 * 
*                 * 
*                 * 
*                 * 
*       ciao      * 
*                 * 
*                 * 
*                 * 
*                 * 
* * * * * * * * * * 
`.slice(1);

    // when
    const result = button(rows, columns, label);

    // then
    expect(result).toBe(expectedResult);
  });

  it("renders an odd number of columns", () => {
    // given
    const rows = 10;
    const columns = 7;
    const label = "ciao";
    const expectedResult = `* * * * * * * 
*           * 
*           * 
*           * 
*           * 
*    ciao   * 
*           * 
*           * 
*           * 
*           * 
* * * * * * * 
`;

    // when
    const result = button(rows, columns, label);

    // then
    expect(result).toBe(expectedResult);
  });

  it("renders an odd number of rows", () => {
    // given
    const rows = 7;
    const columns = 10;
    const label = "ciao";
    const expectedResult = `* * * * * * * * * * 
*                 * 
*                 * 
*                 * 
*       ciao      * 
*                 * 
*                 * 
*                 * 
* * * * * * * * * * 
`;

    // when
    const result = button(rows, columns, label);

    // then
    expect(result).toBe(expectedResult);
  });

  it("renders an odd number of characters", () => {
    // given
    const rows = 10;
    const columns = 10;
    const label = "hello";
    const expectedResult = `* * * * * * * * * * 
*                 * 
*                 * 
*                 * 
*                 * 
*       hello      * 
*                 * 
*                 * 
*                 * 
*                 * 
* * * * * * * * * * 
`;

    // when
    const result = button(rows, columns, label);

    // then
    expect(result).toBe(expectedResult);
  });
});

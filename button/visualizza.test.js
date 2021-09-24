const visualizza = require("./visualizza");

describe("Button App", () => {
  it("renders a button", () => {
    // given
    const x = 10;
    const y = 10;
    const ciao = "ciao";
    const expectedResult = `* * * * * * * * * * 
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
`;

    // when
    const result = visualizza(x, y, ciao);

    // then
    expect(result).toBe(expectedResult);
  });
});

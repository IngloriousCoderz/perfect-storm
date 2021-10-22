const {
  greet,
  shout,
  punctuate,
  wrapInHtml,
  convert,
} = require("./function-composition");

describe("Function composition", () => {
  it("should convert a string", () => {
    // given
    const input = "Antony";
    const output = "<h1>HELLO ANTONY!</h1>";

    // when
    const result = convert(input);

    // then
    expect(result).toBe(output);
  });

  it("should greet someone", () => {
    // given
    const input = "Antony";
    const output = "Hello Antony";

    // when
    const result = greet("Hello")(input);

    // then
    expect(result).toBe(output);
  });

  it("should shout a message", () => {
    // given
    const input = "Antony";
    const output = "ANTONY";

    // when
    const result = shout(input);

    // then
    expect(result).toBe(output);
  });

  it("should add some punctuation at the end of the message", () => {
    // given
    const input = "Antony";
    const output = "Antony!";

    // when
    const result = punctuate("!")(input);

    // then
    expect(result).toBe(output);
  });

  it("should wrap the message with HTML tags", () => {
    // given
    const input = "Antony";
    const output = "<h1>Antony</h1>";

    // when
    const result = wrapInHtml("h1")(input);

    // then
    expect(result).toBe(output);
  });
});

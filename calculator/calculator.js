module.exports = {
  sum(a, b) {
    if (a == null || b == null) {
      return null;
    }

    return a + b;
  },

  subtract(a, b) {
    return a - b;
  },
};

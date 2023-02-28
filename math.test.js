function expect(result) {
  return {
    toBe: function(actual) {
      if(result !== actual) {
        throw new Error('预期值和实际值不相等');
      }
    }
  }
}

expect(add(3,7)).toBe(10);
expect(minus(3,3)).toBe(0);
const sum = require('../src/sum');
test('soma 2 + 2 + 1 para ser 5', ()=>{
  expect(sum(2, 2, 1)).toBe(5);
});

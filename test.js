const rm = require('./index.js');
const assert = require('assert');

describe('delete a file', (done) => {
  it("delete ./test/test.txt", () => {
    rm('/test/test.txt')
    .then((res)=>{
      assert.equal(res.error, 0);
      done();
    }
    )
  });
});

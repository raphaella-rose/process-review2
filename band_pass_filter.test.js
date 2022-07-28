const filter = require("./band_pass_filter");

describe('filter', () => {
  it("returns an array of amended tracks based on the lower/upperlimit", () => {
    expect(filter([60,10,45,60,1500],20,50)).toEqual([50,20,45,50,50]);
  })
})
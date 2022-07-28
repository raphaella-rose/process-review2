const filterTracks = require("./band_pass_filter");

describe('filterTracks', () => {
  it("returns an array of amended tracks based on the lower limit", () => {
    expect(filterTracks([60,10,45,60,1500],20)).toEqual([60,20,45,60,1500]);
  })

})
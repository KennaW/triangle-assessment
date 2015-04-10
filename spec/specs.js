describe('triangle', function() {
  it ("returns equilateral", function() {
    expect(triangle(8,8,8)).to.equal("EQUILATERAL");
  });

  it ("returns isosceles", function() {
    expect(triangle(8,8,5)).to.equal("ISOSCELES");
  });

  it ("returns isosceles", function() {
    expect(triangle(8,5,8)).to.equal("ISOSCELES");
  });

  it ("returns isosceles", function() {
    expect(triangle(5,8,8)).to.equal("ISOSCELES");
  });

  it ("returns scalene", function() {
    expect(triangle(5,6,7)).to.equal("SCALENE");
  });

  it ("check for weird triangle, returns not a triangle", function() {
    expect(triangle(1,1,7)).to.equal("NOT A TRIANGLE");
  });

  it ("check for weird triangle, returns not a triangle", function() {
    expect(triangle(1,7,1)).to.equal("NOT A TRIANGLE");
  });

  it ("check for weird triangle, returns not a triangle", function() {
    expect(triangle(7,1,1)).to.equal("NOT A TRIANGLE");
  });

  it ("check for 0, returns not a triangle", function() {
    expect(triangle(0,1,1)).to.equal("NOT A TRIANGLE");
  });

  it ("check for string, return not a triangle", function() {
    expect(triangle("a",1,1)).to.equal("NOT A TRIANGLE");
  });

  it ("check for string, return not a triangle", function() {
    expect(triangle("a","fjskdl",1)).to.equal("NOT A TRIANGLE");
  });


});

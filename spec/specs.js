describe('triangle', function() {
  it ("returns equalateral", function() {
    expect(triangle(8,8,8)).to.equal("equalateral");
  });

  it ("returns isosceles", function() {
    expect(triangle(8,8,5)).to.equal("iscosceles");
  });

  it ("returns isosceles", function() {
    expect(triangle(8,5,8)).to.equal("iscosceles");
  });

  it ("returns isosceles", function() {
    expect(triangle(5,8,8)).to.equal("iscosceles");
  });

  it ("returns scalene", function() {
    expect(triangle(5,6,7)).to.equal("scalene");
  });

  it ("returns not a triangle", function() {
    expect(triangle(1,1,7)).to.equal("Not a triangle");
  });

  it ("returns not a triangle", function() {
    expect(triangle(1,7,1)).to.equal("Not a triangle");
  });

  it ("returns not a triangle", function() {
    expect(triangle(7,1,1)).to.equal("Not a triangle");
  });


});

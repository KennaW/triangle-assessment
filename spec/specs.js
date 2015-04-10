describe('traingle', function() {
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

});

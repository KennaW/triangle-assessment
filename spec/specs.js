describe('traingle', function() {
  it ("returns equalateral", function() {
    expect(triangle(8,8,8)).to.equal("equalateral");
  });

  it ("returns isosceles", function() {
    expect(triangle(8,8,5)).to.equal("iscosceles");
  });
});
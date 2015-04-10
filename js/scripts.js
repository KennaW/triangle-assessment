var triangle = function(a, b, c) {
  var triangleType = "";

  if ((a === b) && (b === c)){
    triangleType = "equalateral";
  }
  if ((a === b) && (b !=c )){
    triangleType = "iscosceles";
  }

  return triangleType;
}

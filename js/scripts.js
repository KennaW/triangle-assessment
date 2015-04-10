var triangle = function(a, b, c) {
  var triangleType = "";

//equalateral
  if ((a === b) && (b === c)){
    triangleType = "equalateral";
  }

//iscosceles
  if ((a === b) && (b !=c )){
    triangleType = "iscosceles";
  }
  if ((a === c) && (b !=c )){
    triangleType = "iscosceles";
  }


  return triangleType;
}

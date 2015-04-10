var triangle = function(a, b, c) {
  var triangleType = "";

//equalateral
  if ((a === b) && (b === c)){
    triangleType = "equalateral";
  }

//iscosceles
  else if (((a === b) && (b != c)) || ((a === c) && (b != c)) || ((b === c) && (a != b))) {
    triangleType = "iscosceles";
  }
  // else if ((a === c) && (b != c)){
  //   triangleType = "iscosceles";
  // }
  // else if ((b === c) && (a != b)){
  //   triangleType = "iscosceles";
  // }

//scalene
  else{
    triangleType = "scalene";
  }

  return triangleType;
}

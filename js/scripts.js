var triangle = function(a, b, c) {
  var triangleType = "";
  parseInt(a);
  parseInt(b);
  parseInt(c);

  //check that each side isn't more than the length of the other two
  if (((a + b)<=c) || ((c + b) <= a) || ((a + c) <= b)){
    triangleType = "Not a triangle";
  }

  //equalateral
    else if ((a === b) && (b === c)){
      triangleType = "equalateral";
    }

  //iscosceles
    else if (((a === b) && (b != c)) || ((a === c) && (b != c)) || ((b === c) && (a != b))) {
      triangleType = "iscosceles";
    }

  //scalene
    else{
      triangleType = "scalene";
    }


  return triangleType;
}

var triangle = function(a, b, c) {
  var triangleType = "";
  parseInt(a);
  parseInt(b);
  parseInt(c);

  console.log(a);

  //Invalid triangle check
  //check that each side isn't more than the length of the other two
  //also checks if a side is 0 or less
  //checks if user input was "string"
  if ( ((a + b)<=c) || ((c + b) <= a) || ((a + c) <= b) || ((a || b || c) <= 0) || (typeof (a || b || c) === "string") ) {
    triangleType = "NOT A TRIANGLE";
  }

  //equalateral
    else if ((a === b) && (b === c)){
      triangleType = "EQUILATERAL";
    }

  //iscosceles
    else if (((a === b) && (b != c)) || ((a === c) && (b != c)) || ((b === c) && (a != b))) {
      triangleType = "ISOSCELES";
    }

  //scalene
    else{
      triangleType = "SCALENE";
    }


  return triangleType;
}

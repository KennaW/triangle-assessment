var triangle = function(a, b, c) {

  //Invalid triangle check
  //check that each side isn't more than the length of the other two
  //also checks if a side is 0 or less
  //checks if user input was "string"
  //weirdly, typeof only works in tests. using isNaN instead. typeof included for reference.

  if ( ((a + b)<=c) || ((c + b) <= a) || ((a + c) <= b) || ((a || b || c) <= 0) || (typeof (a || b || c) === "string") || isNaN(a) || isNaN(b) || isNaN(c) ) {
    return "NOT A TRIANGLE";
  }

  //equalateral
    else if ((a === b) && (b === c)){
      return "EQUILATERAL";
    }

  //iscosceles
    else if (((a === b) && (b != c)) || ((a === c) && (b != c)) || ((b === c) && (a != b))) {
      return "ISOSCELES";
    }

  //scalene
    else{
      return "SCALENE";
    }

}

$(document).ready(function() {
  $("form#sides").submit(function(event){
  var a = parseInt($("input#sideA").val());
  var b = parseInt($("input#sideB").val());
  var c = parseInt($("input#sideC").val());

  var result = triangle(a, b, c);
  $("#type").text(result);
  $("#results").show();
  event.preventDefault();
  });

});

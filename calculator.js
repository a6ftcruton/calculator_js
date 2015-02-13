var Calculator = {};

var buttonPushAddsClass = function() {
  $('.key').mousedown(function() {
    $(this).addClass("pressed").mouseup(function() {
      $(this).removeClass("pressed")
    });
  });
};

var displayResults = function(results) {
  $('.results').html( eval(results) );
}

var clearDisplay = function() {
  $('.results').empty();
}

var printResults = function(equation) {
  $('.results').html( eval(equation) );
}

var evaluateExpression = function() {
  var results = "";
  //store keys pressed
  $('.key').click(function() {
    if ( $('.results').html().length >= 9 ) {
      $('.results').css("font-size", "2em");
    } else {
      results += ($(this).html());
        console.log(results)
    //print results
      $('.equals').click(function() {
        results = eval(results)
        printResults(results); 
      });
    //clear results
      $('.clear').click(function() {
        results = "" 
        clearDisplay();
      });
   }
  });
}


var appendNumber = function() {
  $('.key.number').click(function() {
    $('.results').append($(this).html());
  });
}

var pressOperator = function() {
  $('.key.operator').click(function() {
      clearDisplay();
  });
}

Calculator.init = function() {
  appendNumber();
  pressOperator();
  evaluateExpression();
  buttonPushAddsClass();
};


$(document).ready(function() {
  Calculator.init();
});

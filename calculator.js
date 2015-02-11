var Calculator = {};

var buttonPushAddsClass = function() {
  $('.key').mousedown(function() {
    $(this).addClass("pressed").mouseup(function() {
      $(this).removeClass("pressed")
    });
  });
};

//break this up into 2 functions
var storeKeysPressed = function() {
  var results = "";
  $('.key').click(function() {
    results += ($(this).html());
    console.log(results);
    $('.equals').click(function() {
      $('.results').html( eval(results) );
    });
  });
}

var appendNumber = function() {
  $('.key.number').click(function() {
    $('.results').append($(this).html());
  });
}

var pressOperator = function() {
  $('.key.operator').click(function() {
      $('.results').empty();
  });
}

Calculator.init = function() {
  appendNumber();
  pressOperator();
  storeKeysPressed();
  buttonPushAddsClass();
};


$(document).ready(function() {
  Calculator.init();
});

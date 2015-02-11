var Calculator = {};

var pushButton = function() {
  $('.key').mousedown(function() {
    $(this).addClass("pressed").mouseup(function() {
      $(this).removeClass("pressed");
    });
  });
};

Calculator.init = function() {
  //add
  //subtract
  //multiply
  //divide
  pushButton();
};


$(document).ready(function() {
  Calculator.init();
});

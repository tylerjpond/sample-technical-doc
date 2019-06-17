/*
  Require: JQuery
*/
$(document).ready(function(){

  // For RGB Value CSS example
  $("#r").on("input", function(){
    updateExampleRGB();
  });

  $("#g").on("input", function(){
    updateExampleRGB();
  });

  $("#b").on("input", function(){
    updateExampleRGB();
  });

  $("#r").val("0");
  $("#g").val("0");
  $("#b").val("0");
  updateExampleRGB();

  includeContent();
});

// For RGB Value CSS example
function updateExampleRGB() {
  var r = $("#r").val();
  var g = $("#g").val();
  var b = $("#b").val();

  var rgb = "rgb(" + r + ", " + g + ", " + b + ")";

  //Update Styles
  $("#rgb-display").css("background-color", rgb);

  if ($("#g").val() < 165) {
    $("#rgb-display").css("color", "white");
  } else {
    $("#rgb-display").css("color", "black");
  }

  //Update content
  $("#rgb-display").html(rgb);
  $("#rgb-r div").html(r);
  $("#rgb-g div").html(g);
  $("#rgb-b div").html(b);
}

function includeContent() {
  var includes = $('[data-include]');
  $.each(includes, function(){
    var file = 'includes/' + $(this).data('include') + '.html';
    $(this).load(file);
  });
}

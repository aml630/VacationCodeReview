$(function () {

$("select").prop('selectedIndex', -1);

$("form").submit(function(event) {
event.preventDefault()
var name = $("#name").val();
var volcano = $("#volcano").val();
var activity = $("#activity").val();
var likeSun = $("#sun").val();
var eyes = $("#eyes").val();
var trees = $("#trees").val();
var humans = $("#humans").val();

$("#inputName").text(name + "!")
if(activity === null && volcano === null) {
  $(".main div").hide()
  $("#idk").fadeIn(2000)
}else if(activity==="smoke" && trees === "walk"){
  $(".main div").hide()
  $("#shire").fadeIn(2000)
}else if(activity==="battle" && volcano === "volcano"){
  $(".main div").hide()
  $("#shire").fadeIn(2000)
}else if(activity==="fight" && likeSun === "no"){
  $(".main div").hide()
  $("#moria").fadeIn(2000)
}else if(activity==="forest" && trees === "build"){
  $(".main div").hide()
  $("#mordor").fadeIn(2000)
}else if(activity==="forest" && trees === "walk"){
  $(".main div").hide()
  $("#mordor").fadeIn(2000)
}else if(activity==="fight" && humans === "good"){
  $(".main div").hide()
  $("#gondor").fadeIn(2000)
}else if (activity ==="smoke") {
  $(".main div").hide()
  $("#shire").fadeIn(2000)
}else if(activity==="fight"){
  $(".main div").hide()
  $("#mordor").fadeIn(2000)
}else if(activity === "forest"){
  $(".main div").hide()
  $("#rivendel").fadeIn(2000)
}else if(humans === "good"){
  $(".main div").hide()
  $("#gondor").fadeIn(2000)
}else if(activity="battle"){
  $(".main div").hide()
  $("#mordor").fadeIn(2000)
}else {
  $(".main div").hide()
  $("#idk").fadeIn(2000)
}

(function blink() {
  $(".main p").fadeOut(500).fadeIn(500, blink);
})();

})
})

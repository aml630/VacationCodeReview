$(function () {

$("select").prop('selectedIndex', -1);

$("form").submit(function(event) {
event.preventDefault()
var volcano = $("#volcano").val();
var activity = $("#activity").val();
var likeSun = $("#sun").val();
var eyes = $("#eyes").val();
var trees = $("#trees").val();
var humans = $("#humans").val();
console.log(activity)
console.log(humans)
if(activity === null && volcano === null) {
  $(".main div").hide()
  $("#idk").show()
}else if(activity==="smoke" && trees === "walk"){
  $(".main div").hide()
  $("#shire").show()
}else if(activity==="battle" && volcano === "volcano"){
  $(".main div").hide()
  $("#shire").show()
}else if(activity==="fight" && likeSun === "no"){
  $(".main div").hide()
  $("#moria").show()
}else if(activity==="forest" && trees === "build"){
  $(".main div").hide()
  $("#mordor").show()
}else if(activity==="forest" && trees === "walk"){
  $(".main div").hide()
  $("#mordor").show()
}else if(activity==="fight" && humans === "good"){
  $(".main div").hide()
  $("#gondor").show()
}else if (activity ==="smoke") {
  $(".main div").hide()
  $("#shire").show()
}else if(activity==="fight"){
  $(".main div").hide()
  $("#mordor").show()
}else if(activity === "forest"){
  $(".main div").hide()
  $("#rivendel").show()
}else if(humans === "good"){
  $(".main div").hide()
  $("#gondor").show()
}else if(activity="battle"){
  $(".main div").hide()
  $("#mordor").show()
}else {
  $(".main div").hide()
  $("#idk").show()
}

(function blink() {
  $(".main p").fadeOut(500).fadeIn(500, blink);
})();

})
})

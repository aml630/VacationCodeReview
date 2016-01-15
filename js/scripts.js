$(function () {

$("form").submit(function(event) {
event.preventDefault()
var volcano = $("#volcano").val();
var activity = $("#activity").val();
var likeSun = $("#sun").val();
var eyes = $("#eyes").val();
var trees = $("#trees").val();
var humans = $("#humans").val();

if(activity ==="smoke" && trees === "walk") {
  $(".main div").hide()
  $("#shire").show()
}else if(activity === "fight" && likeSun ==="no"){
  $(".main div").hide()
  $("#moria").show()
}else if(activity==="fight" && volcano === "volcano"){
  $(".main div").hide()
  $("#mordor").show()
}else if(activity === "forest" && trees ==="walk"){
  $(".main div").hide()
  $("#rivendel").show()
}else if(humans === "good" && likeSun ==="yes"){
  $(".main div").hide()
  $("#gondor").show()
}else {
  $(".main div").hide()
  $("#idk").show()
}

(function blink() {
  $(".main p").fadeOut(500).fadeIn(500, blink);
})();

})
})

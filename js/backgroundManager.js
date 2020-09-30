// VARIABLES
// FUNCTIONS
$(".gallery-img").click(function () {
  textParamsButton.addClass("hidden");
  $(".gallery-img").removeClass("gallery-img-clicked");
  $(this).addClass("gallery-img-clicked");
  imageObj.src = $(this).attr("src");
  layer.draw();
});

$("#input-file").on("change", function (e) {
  var URL = window.webkitURL || window.URL;
  var url = URL.createObjectURL(e.target.files[0]);
  // main API:
  var img = new Image();
  img.src = url;

  img.onload = function () {
    var yoda = new Konva.Image({
      x: 0,
      y: 0,
      image: img,
      draggable: true,
      dragOnTop: true
    });

    layer.add(yoda);
    layer.draw();
  };

});

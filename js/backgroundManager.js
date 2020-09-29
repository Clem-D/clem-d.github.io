// VARIABLES
// FUNCTIONS
$('.gallery-img').click(function() {
  textParamsButton.addClass('hidden');
  $('.gallery-img').removeClass('gallery-img-clicked');
  $(this).addClass('gallery-img-clicked');
  imageObj.src = $(this).attr('src');
  layer.draw();
});

// VARIABLES
var addTextButton = $('#add-text');
var addCapButton = $('#add-cap');
var addJointButton = $('#add-joint');
var addSunGlasses = $('#add-sun-glasses');
var addThugLife = $('#add-thug-life');
var zoneTextID = 0;
var imgURL = "assets/images/";
// TODO : We should not hardcode values like that
var xStart = 50;
var yStart = 80;
// FUNCTIONS
addTextButton.click(function() {
  createText(zoneTextID, {text: 'Your text here', xStart: 50, yStart: 80,}, true);
  zoneTextID++;
  layer.draw();
});

addCapButton.click(function() {
  textParamsButton.toggleClass('hidden');
  createImage(imgURL + 'hat.png',{xStart: 50, yStart: 80,}, true);
  layer.draw();
});

addJointButton.click(function() {
  textParamsButton.toggleClass('hidden');
  createImage(imgURL + 'joint.png',{xStart: 50, yStart: 80,}, true);
  layer.draw();
});

addSunGlasses.click(function() {
  textParamsButton.toggleClass('hidden');
  createImage(imgURL + 'glasses.png',{xStart: 50, yStart: 80,}, true);
  layer.draw();
});

addThugLife.click(function() {
  textParamsButton.toggleClass('hidden');
  createImage(imgURL + 'thug_life.png',{xStart: 50, yStart: 80,}, true);
  layer.draw();
});

//coding UI 
var window = new Window("palette", "My script", undefined);
var startButton = window.add("button", undefined, "Run !");

window.show();

startButton.onClick = function() {
    var comp = app.project.activeItem;
    var layers = comp.selectedLayers;

    for (var i = 0; i < layers.length; i++) {
        layers[i].Effects.addProperty("Paramètre glissière");
        layers[i].property("Scale").expression = 'temp = effect("Paramètre glissière")("Curseur");[temp, temp]';
        layers[i].effect("Paramètre glissière").property(1).setValue(100);
    }

}
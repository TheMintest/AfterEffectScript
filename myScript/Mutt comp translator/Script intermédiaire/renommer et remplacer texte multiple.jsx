var window = new Window("palette", "rename and replace multiple layer", undefined);
var startButton = window.add("button", undefined, "Run !");

window.show();

var layerNumber;
var comp = app.project.activeItem;
var input = ""

function renameLayer(selectedLayer, input) {
    selectedLayer.name = input;
    alert("renameLayer done");
}

function replaceText(selectedLayer, input) {
    selectedLayer.property("Source Text").setValue(input);
    alert("Replace text done");
}

startButton.onClick = function() {
    var numberOfLayer = comp.layers.length;
    alert("there's "+numberOfLayer+" layer in the comp");
    for (i=1; i<numberOfLayer; i++) {
        var selectedLayer = comp.layer(i);
        alert("current selected layer is " + selectedLayer.name);
        input = "texte replacé " + i;

        if (selectedLayer.property("Source Text")!=null){
            replaceText(selectedLayer, input);
            renameLayer(selectedLayer, input);            
        } else {
            alert("no more text layer in the current comp");
            break
        }
    }
    alert("done");
}


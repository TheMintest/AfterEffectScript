var window = new Window("palette", "My script", undefined);
var startButton = window.add("button", undefined, "Run !");

window.show();

var comp = app.project.activeItem;
var layer = comp.layer(1);


function renameLayer(input) {

    layer.name = input;
    alert("renameLayer done");
}

startButton.onClick = renameLayer("Calque renommé");
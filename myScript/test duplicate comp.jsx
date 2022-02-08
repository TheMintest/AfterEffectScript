var window = new Window("palette", "My script", undefined);
var startButton = window.add("button", undefined, "Run !");

window.show();

startButton.onClick = function() {
    var selectionList = app.project.selection;

    for (var i=0; i<selectionList.length; i++) {
        if (selectionList[i] instanceof CompItem) {
            selectionList[i].duplicate();
        }
    }
    alert("done");
}
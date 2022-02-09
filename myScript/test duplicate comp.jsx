var window = new Window("palette", "My script", undefined);
var startButton = window.add("button", undefined, "Run !");

window.show();



startButton.onClick = function() {
    var selectionList = app.project.selection;
    for (var i=0; i<selectionList.length; i++) {
        if (selectionList[i] instanceof CompItem) {
            selectionList[i].duplicate();
        } else {
            alert(selectionList[i].name + "isn't a Comp");
            continue;
        }
        alert("there's "+app.project.numItems + " item in the project"); 
        var itemNum = app.project.items.length;
        var lastItem = app.project.item(itemNum);
        alert("The last item's name is " + lastItem.name);

        while ((lastItem instanceof CompItem)==false) {
            lastItem = app.project.item(itemNum-1)
            alert(lastItem);
        }

        if (lastItem instanceof CompItem){
        lastItem.openInViewer; 
        } else {
            alert("Errror");
        }
        
    }
    alert("done");
}
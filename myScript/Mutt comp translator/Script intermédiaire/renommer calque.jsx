var window = new Window("palette", "My script", undefined);
var startButton = window.add("button", undefined, "Run !");

window.show();

var comp = app.project.activeItem;
var layer = comp.layer(1);


function renameLayer(input) {
   
    layer.name = input;
    alert("renameLayer done");
    //     var name = basename + ' ' + String(i + 1);
    //     var currLayer = curComp.selectedLayers[i];
    //     try{
    //       currLayer.source.name = name;
    //     }catch(error) {
    //       $.writeln('this layer has no source');
    //     }
    //     currLayer.name = name;
    //   }
}

startButton.onClick = renameLayer("Calque renommé");

// MAINWINDOW
// ==========
var mainWindow = new Window("palette", undefined, undefined, {minimizeButton: true, resizeable: true}); 
    mainWindow.text = "MUTT's Auto CompTranslator"; 
    mainWindow.orientation = "column"; 
    mainWindow.alignChildren = ["center","top"]; 
    mainWindow.spacing = 10; 
    mainWindow.margins = 16; 

// GROUPONE
// ========
var groupOne = mainWindow.add("group", undefined, {name: "groupOne"}); 

var fileLocBox = groupOne.add('edittext {properties: {name: "fileLocBox"}}'); 
    fileLocBox.text = "Fichier ?"; 

var getFileButton = groupOne.add("button", undefined, undefined, {name: "getFileButton"}); 
    getFileButton.text = "Fichier..."; 
    getFileButton.helpTip="Selectionner l'emplacement du fichier CSV"

// GROUPTWO
// ========
var groupTwo = mainWindow.add("group", undefined, {name: "groupTwo"}); 
var applyButton = groupTwo.add("button", undefined, undefined, {name: "applyButton"}); 
    applyButton.text = "C'est parti !"; 

//global variable
var selectedFile = new File;
var check = 0;
var currentLanguage;
var csvData = [];
var comp = app.project.activeItem;
var TextNumberLine;



//Script Start

 mainWindow.show();

 //selection du fichier
getFileButton.onClick = function() {
    selectedFile = selectedFile.openDlg("Please select a file", "Acceptable file : *.csv")
    fileLocBox.text = selectedFile.fsName;
    check = 1
}

//application 
applyButton.onClick = function() {
    app.beginUndoGroup("appliquer le script");
    
    //Vérification qu'un fichier est selectionné
    if(check ===0) {
        alert("Please select a file");
        return false;
    } else {
        alert("File selected is "+selectedFile.name);

        //prend mon document CSV et le place dans la variable csvData.
        readCSV(selectedFile);
        TextNumberLine = csvData[0].split(",");
        var currentText=1;

        for(var l=1; l<=csvData.length;l++){

            getCurrentLanguage(l);

            for (var i=1; i<comp.layers.length; i++) {
                var selectedLayer = comp.layer(i);
            // alert("current selected layer is " + selectedLayer.name);
            input = currentLanguage[currentText];
            inputName = currentLanguage[0] + " "+ currentLanguage[currentText];

                if (selectedLayer instanceof TextLayer){
                    replaceText(selectedLayer, input);
                    renameLayer(selectedLayer, inputName);
                    currentText += 1;
                }
            }
            alert("end of loop " + currentLanguage[0]);
  
        }
    }
    app.endUndoGroup();
}


function readCSV(selectedFile) {
    selectedFile.open("r");
    do {
        csvData.push(selectedFile.readln());
    } while(!selectedFile.eof);
    // alert("CSV lenght is" + csvData.length)
}

function getCurrentLanguage(lineNumber){ currentLanguage = csvData[lineNumber].split(",");}

function replaceText(selectedLayer, input) {
    selectedLayer.property("Source Text").setValue(input);
    // alert("Replace text done");
}

function renameLayer(selectedLayer, input) {
    selectedLayer.name = input;
    // alert("renameLayer done");
}
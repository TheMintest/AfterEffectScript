
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
var firstLanguage;
var csvData = [];
var comp = app.project.activeItem;



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
    
    //Vérification qu'un fichier est selectionné
    if(check ===0) {
        alert("Please select a file");
        return false;
    } else {
        alert("File selected is "+selectedFile.name);
        readCSV(selectedFile);

        breakInLine();

        for (var i=1; i<comp.layers.length; i++) {
            var selectedLayer = comp.layer(i);
        alert("current selected layer is " + selectedLayer.name);
        input = firstLanguage[i];
        inputName = firstLanguage[0] + " "+ firstLanguage[i];

            if (selectedLayer.property("Source Text")!=null){
                replaceText(selectedLayer, input);
                renameLayer(selectedLayer, inputName);
            }
        }  
    }
}


function readCSV(selectedFile) {
    selectedFile.open("r");
    do {
        csvData.push(selectedFile.readln());
    } while(!selectedFile.eof);
}

function breakInLine(){
    firstLanguage = csvData[1].split(",");
    // alert("First language selected is "+ firstLanguage[0]);
}

function replaceText(selectedLayer, input) {
    selectedLayer.property("Source Text").setValue(input);
    alert("Replace text done");
}

function renameLayer(selectedLayer, input) {
    selectedLayer.name = input;
    alert("renameLayer done");
}
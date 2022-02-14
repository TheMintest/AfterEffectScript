// MAINWINDOW

const { instanceOf } = require("prop-types");

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
var textNumberLine; 
var selectedLayer;
var numberOfComp;


//Script Start

 mainWindow.show();

  //selection du fichier
getFileButton.onClick = function() {
    selectedFile = selectedFile.openDlg("Please select a file", "Acceptable file : *.csv")
    fileLocBox.text = selectedFile.fsName;
    check = 1
}

//début du script
app.beginUndoGroup("appliquer le script");

applyButton.onClick = function {
    if(check === 0) {
        alert("Please select a file");
    } else {
        getNumberOfComp();
        readCSV();
        selectComp();
        duplicateComp();
        renameComp();
        getNumberOfTextLayer();
        selectCurrentLayer();
        if (selectedLayer instanceof TextLayer){
            renameTextLayer();
            modifyTextContent();
        }

    }

}

app.endUndoGroup;

function getNumberOfComp{
    app.project

}

function readCSV {

}


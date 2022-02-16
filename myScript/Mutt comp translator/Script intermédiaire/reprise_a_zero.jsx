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
var currentLanguageName;
var csvData = [];
var comp = app.project.activeItem;
var textNumberLine; 
var selectedLayer;
var numberOfLanguage;
var dossierFr = findItemByName("Français");
var numberOfComp = dossierFr.numItems;



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

applyButton.onClick = function() {
    if(check === 0) {
        alert("Please select a file");
    } else {
        readCSV();

        numberOfLanguage = csvData.length-1;

        // inserer boucle du nombre de language
        for (var currentLanguage =2; currentLanguage <= numberOfLanguage; currentLanguage++) {

            //créer un array qui contient tout nos texte
            var currentLineArray = csvData[currentLanguage].split(",");

            // Crée un dossier nommé comme la langue de la ligne actuelle et le stock dans une variable
            var currentLanguageFolder = app.project.items.addFolder(currentLineArray[0]);


            for(var frComp = 1; frComp<= dossierFr.numItems; frComp++) {
                dossierFr.item(frComp).parentFolder = currentLanguageFolder;
            }

            // for (var currentComp = 1; currentComp<=dossierFr.items.lenght)
            
            // selectComp();
            // duplicateComp();
            // renameComp();
            // getNumberOfTextLayer();
            // selectCurrentLayer();
            // if (selectedLayer instanceof TextLayer){
            //     renameTextLayer();
            //     modifyTextContent();
            // }
        }

    }

}

app.endUndoGroup();



function readCSV() {
    selectedFile.open("r");
    do {

        csvData.push(selectedFile.readln());
    } while(!selectedFile.eof);
    // alert("CSV lenght is" + csvData.length)
}

function findItemByName(myName) {
    var thisItemSet = app.project.items;

    for (var thisItemIterator = 1; thisItemIterator < thisItemSet.length; thisItemIterator++) {
        if (thisItemSet[thisItemIterator].name === myName) {
            return thisItemSet[thisItemIterator];
        }
    }
}
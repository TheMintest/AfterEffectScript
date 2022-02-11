
/*
Code for Import https://scriptui.joonas.me — (Triple click to select): 
{"activeId":2,"items":{"item-0":{"id":0,"type":"Dialog","parentId":false,"style":{"enabled":true,"varName":"mainWindow","windowType":"Palette","creationProps":{"su1PanelCoordinates":false,"maximizeButton":false,"minimizeButton":true,"independent":false,"closeButton":true,"borderless":false,"resizeable":true},"text":"MUTT's Auto CompTranslator","preferredSize":[0,0],"margins":16,"orientation":"column","spacing":10,"alignChildren":["center","top"]}},"item-1":{"id":1,"type":"Group","parentId":0,"style":{"enabled":true,"varName":"groupOne","preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-2":{"id":2,"type":"EditText","parentId":1,"style":{"enabled":true,"varName":"fileLocBox","creationProps":{"noecho":false,"readonly":false,"multiline":false,"scrollable":false,"borderless":false,"enterKeySignalsOnChange":false},"softWrap":false,"text":"Emplacement du fichier","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-3":{"id":3,"type":"Button","parentId":1,"style":{"enabled":true,"varName":"getFileButton","text":"Sélectionner l'emplacement du fichier CSV","justify":"center","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-4":{"id":4,"type":"Group","parentId":0,"style":{"enabled":true,"varName":"groupTwo","preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-5":{"id":5,"type":"Button","parentId":4,"style":{"enabled":true,"varName":"applyButton","text":"C'est parti !","justify":"center","preferredSize":[0,0],"alignment":null,"helpTip":null}}},"order":[0,1,2,3,4,5],"settings":{"importJSON":true,"indentSize":false,"cepExport":false,"includeCSSJS":true,"showDialog":true,"functionWrapper":false,"afterEffectsDockable":false,"itemReferenceList":"None"}}
*/ 

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
    groupTwo.orientation = "row"; 
    groupTwo.alignChildren = ["left","center"]; 
    groupTwo.spacing = 10; 
    groupTwo.margins = 0; 

var applyButton = groupTwo.add("button", undefined, undefined, {name: "applyButton"}); 
    applyButton.text = "C'est parti !"; 

mainWindow.show();


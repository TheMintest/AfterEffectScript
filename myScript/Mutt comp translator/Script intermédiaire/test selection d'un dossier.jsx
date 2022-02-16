// Find a project item by name

function findItemByName(myName) {
    var thisItemSet = app.project.items;

    for (var thisItemIterator = 1; thisItemIterator < thisItemSet.length; thisItemIterator++) {
        if (thisItemSet[thisItemIterator].name === myName) {
            return thisItemSet[thisItemIterator];
        }
    }
}

var dossierFr = findItemByName("Français");

alert(dossierFr.items.length);

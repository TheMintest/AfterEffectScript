function findItemByName(myName) {
    var thisItemSet = app.project.items;

    for (var thisItemIterator = 1; thisItemIterator < thisItemSet.length; thisItemIterator++) {
        if (thisItemSet[thisItemIterator].name === myName) {
            return thisItemSet[thisItemIterator];
        }
    }
}

dossierFr = findItemByName("Français");
alert(dossierFr.item(1).name);
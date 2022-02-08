var csvFile = File("/Users/guillaumedharcourt/Documents/AfterEffectScript/Untitled 1.csv");

var csvData = [];

csvFile.open("r");

do {
    csvData.push(csvFile.readln());
} while (!csvFile.eof);

alert(csvData);
alert(csvData[1]);
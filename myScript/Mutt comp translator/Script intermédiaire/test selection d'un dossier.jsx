
#include '/Users/guillaumedharcourt/node_modules/aequery/dist/aequery.js' // aequery is now available as aeq
// Disable all Camera lens blur effects in active comp
aeq( 'activecomp effect[matchName="ADBE Camera Lens Blur"]' ).attr( 'enabled', false );

function alertFolderName(folderName) {
    alert(aeq.project.getFolder(folderName).name)
}


alertFolderName('Français');
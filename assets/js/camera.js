var labels = [];
setActivePage('nav_camera');


tableRows = document.querySelectorAll('.date');
tableRows.forEach( function(row, i) {
    row.innerHTML = labels[i];
});


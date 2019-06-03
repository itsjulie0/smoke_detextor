var labels = [];
setActivePage('current_info');

tableRows = document.querySelectorAll('.date');
tableRows.forEach( function(row, i) {
    row.innerHTML = labels[i];
});
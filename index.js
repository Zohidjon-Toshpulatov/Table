//deleting

function deleteItems() {
    let deleteBtns = document.getElementsByClassName('table-btn-delete');
    for (i = 0; i < deleteBtns.length; i++) {
        deleteBtns[i].addEventListener('click', deleteItem);
    }
}

function deleteItem(e) {
    e.stopImmediatePropagation();
    if (confirm("Do you really want to delete this item?")) {
        let parentRow = e.target.closest('tr');
        let parentTable = e.target.closest('table');
        console.log(parentRow);
        console.log(parentTable);
        parentTable.deleteRow(parentRow.rowIndex);
    }
}

deleteItems();

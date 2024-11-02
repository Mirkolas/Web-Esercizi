document.getElementById('newWorkForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const title = document.getElementById('title').value;
    const year = document.getElementById('year').value;
    const type = document.getElementById('type').value;

    const table = document.getElementById('workTable').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();
    const titleCell = newRow.insertCell(0);
    const yearCell = newRow.insertCell(1);
    const typeCell = newRow.insertCell(2);
    const actionCell = newRow.insertCell(3);

    titleCell.textContent = title;
    yearCell.innerHTML = `<span class="badge bg-primary">${year}</span>`;
    typeCell.textContent = type;

    const deleteButton = document.createElement('button');
    deleteButton.className = 'btn btn-danger btn-sm deleteButton';
    deleteButton.innerHTML = '<i class="fa-solid fa-trash"></i>';

    deleteButton.addEventListener('click', function() {
        table.deleteRow(newRow.rowIndex - 1);
    });

    actionCell.appendChild(deleteButton);
    document.getElementById('newWorkForm').reset();
});



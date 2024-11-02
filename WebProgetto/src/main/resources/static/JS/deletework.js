
function removeWorkByNumber(event) {
    event.preventDefault();
    const workNumber = document.getElementById('workNumber').value;
    const table = document.getElementById('workTable').getElementsByTagName('tbody')[0];

    if (workNumber < 1 || workNumber > table.rows.length) {
        alert('Numero non valido. Assicurati che sia compreso tra 1 e ' + table.rows.length);
        return;
    }

    table.deleteRow(workNumber - 1);
    document.getElementById('removeWorkByNumberForm').reset();
}
document.addEventListener('DOMContentLoaded', function () {
    // Get all delete buttons
    const deleteButtons = document.querySelectorAll('.deleteButton');

    // Add event listener for each delete button
    deleteButtons.forEach((button, index) => {
        button.addEventListener('click', function () {
            // Remove the corresponding table row
            const row = button.closest('tr');
            row.remove();
        });
    });
});

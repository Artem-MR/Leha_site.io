document.getElementById('saveButton').addEventListener('click', function() {
    const noteInput = document.getElementById('noteInput');
    const noteText = noteInput.value;

    if (noteText.trim() === '') {
        alert('Пожалуйста, введите заметку.');
        return;
    }

    const notesList = document.getElementById('notesList');
    const noteDiv = document.createElement('div');
    noteDiv.className = 'note';
    noteDiv.textContent = noteText;
    notesList.appendChild(noteDiv);

    // Очистка текстового поля
    noteInput.value = '';
});

document.getElementById('clearButton').addEventListener('click', function() {
    document.getElementById('noteInput').value = '';
});

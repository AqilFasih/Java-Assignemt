document.addEventListener('DOMContentLoaded', () => {
    const noteInput = document.getElementById('note-input');
    const addNoteBtn = document.getElementById('add-note-btn');
    const notesList = document.getElementById('notes-list');

    // Load notes from local storage
    const loadNotes = () => {
        const notes = JSON.parse(localStorage.getItem('notes')) || [];
        notesList.innerHTML = '';
        notes.forEach((note, index) => {
            const li = document.createElement('li');
            li.textContent = note;
            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Delete';
            deleteBtn.addEventListener('click', () => deleteNote(index));
            li.appendChild(deleteBtn);
            notesList.appendChild(li);
        });
    };

    // Add note to local storage
    const addNote = () => {
        const note = noteInput.value.trim();
        if (note) {
            const notes = JSON.parse(localStorage.getItem('notes')) || [];
            notes.push(note);
            localStorage.setItem('notes', JSON.stringify(notes));
            noteInput.value = '';
            loadNotes();
        }
    };

    // Delete note from local storage
    const deleteNote = (index) => {
        const notes = JSON.parse(localStorage.getItem('notes')) || [];
        notes.splice(index, 1);
        localStorage.setItem('notes', JSON.stringify(notes));
        loadNotes();
    };

    addNoteBtn.addEventListener('click', addNote);
    loadNotes();
});

// Handle Entry Form Submission
document.getElementById('entryForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const title = document.getElementById('entryTitle').value;
    const text = document.getElementById('entryText').value;
    const category = document.getElementById('category').value;
    const date = new Date().toLocaleDateString();

    // Create a new entry
    const newEntry = document.createElement('li');
    newEntry.classList.add('entry-item');
    newEntry.innerHTML = `
        <span class="entry-title">${title}</span>
        <p class="entry-text">${text}</p>
        <p class="entry-category">Category: ${category}</p>
        <p class="entry-date">${date}</p>
    `;

    document.getElementById('entryList').appendChild(newEntry);

    // Clear the form
    document.getElementById('entryTitle').value = '';
    document.getElementById('entryText').value = '';
    document.getElementById('category').value = 'Personal';
});

// Handle Calendar View and Showing Entries for Selected Date
document.getElementById('entryDate').addEventListener('change', function () {
    const selectedDate = this.value;
    const entries = document.querySelectorAll('.entry-item');
    
    entries.forEach(entry => {
        const entryDate = entry.querySelector('.entry-date').textContent;
        if (entryDate !== selectedDate) {
            entry.style.display = 'none';
        } else {
            entry.style.display = 'block';
        }
    });
});

// Handle Show Entries Button
document.querySelector('.show-calendar').addEventListener('click', () => {
    const selectedDate = document.getElementById('entryDate').value;
    const entries = document.querySelectorAll('.entry-item');
    
    entries.forEach(entry => {
        const entryDate = entry.querySelector('.entry-date').textContent;
        if (entryDate !== selectedDate && selectedDate !== '') {
            entry.style.display = 'none';
        } else {
            entry.style.display = 'block';
        }
    });
});

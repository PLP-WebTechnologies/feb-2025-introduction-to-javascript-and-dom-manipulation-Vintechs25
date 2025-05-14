// Change the text content of the paragraph dynamically
document.getElementById('changeTextButton').addEventListener('click', function() {
    document.getElementById('textElement').textContent = 'The text has been changed dynamically!';
});

// Modify CSS styles via JavaScript
document.getElementById('changeColorButton').addEventListener('click', function() {
    document.getElementById('textElement').style.color = 'green';
    document.getElementById('textElement').style.fontSize = '24px';
});

// Add a new element when the button is clicked
document.getElementById('addElementButton').addEventListener('click', function() {
    const newElement = document.createElement('p');
    newElement.textContent = 'This is a new element added dynamically!';
    document.body.appendChild(newElement);
});

// Remove an element when the button is clicked
document.getElementById('removeElementButton').addEventListener('click', function() {
    const paragraph = document.getElementById('textElement');
    if (paragraph) {
        paragraph.remove();
    }
});

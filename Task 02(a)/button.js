document.getElementById('colorButton').addEventListener('click', function() {
    const colors = ['red', 'green', 'blue', 'orange', 'purple', 'pink','black'];
    const currentColor = this.style.backgroundColor;
    let newColor = colors[Math.floor(Math.random() * colors.length)];
    
    while (newColor === currentColor) {
        newColor = colors[Math.floor(Math.random() * colors.length)];
    }
    
    this.style.backgroundColor = newColor;
});

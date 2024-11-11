document.querySelectorAll('.letters').forEach(letter => {
    // Store the original position and styles of each .letters element
    const originalStyle = {
        transform: letter.style.transform,
    };

    letter.addEventListener('mouseover', () => {
        // Find the closest ancestor with the class 'site'
        const ancestor = letter.closest('.site');

        if (ancestor) {
            // Calculate random positions within the ancestor container
            const randomX = Math.floor(Math.random() * (ancestor.clientWidth - letter.clientWidth));
            const randomY = Math.floor(Math.random() * (ancestor.clientHeight - letter.clientHeight));

            // Move the letter to a random position using transform
            letter.style.transform = `translate(${randomX}px, ${randomY}px)`;
        }
    });

    letter.addEventListener('mouseout', () => {
        // Restore the original transform position with a smooth transition
        letter.style.transform = originalStyle.transform || 'translate(0, 0)';
    });
});

function goFullscreen(idname) {
    const element = document.getElementById(idname);
    if (element) {
        if (element.requestFullscreen) {
            element.requestFullscreen();
        } else if (element.mozRequestFullScreen) { // Firefox
            element.mozRequestFullScreen();
        } else if (element.webkitRequestFullscreen) { // Chrome, Safari, Opera
            element.webkitRequestFullscreen();
        } else if (element.msRequestFullscreen) { // IE/Edge
            element.msRequestFullscreen();
        } else {
            console.error('Fullscreen API is not supported in this browser');
        }
    } else {
        console.error(`Element with id '${idname}' not found`);
    }
}

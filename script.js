// Toggle the hamburger menu
document.getElementById('hamburger-btn').addEventListener('click', function() {
    var menu = document.getElementById('hamburger-menu');
    menu.classList.toggle('active');
});

// Close the menu when "X" button is clicked
document.getElementById('close-btn').addEventListener('click', function() {
    var menu = document.getElementById('hamburger-menu');
    menu.classList.remove('active'); // Remove the 'active' class to hide the menu
});


// Select the slider container
const eLibrarySlider = document.querySelector('.e-library-slider');

// Variables to keep track of swipe position
let isDown = false;
let startX;
let scrollLeft;

// Add event listeners for touch events
eLibrarySlider.addEventListener('mousedown', (e) => {
    isDown = true;
    eLibrarySlider.classList.add('active');
    startX = e.pageX - eLibrarySlider.offsetLeft;
    scrollLeft = eLibrarySlider.scrollLeft;
});

eLibrarySlider.addEventListener('mouseleave', () => {
    isDown = false;
    eLibrarySlider.classList.remove('active');
});

eLibrarySlider.addEventListener('mouseup', () => {
    isDown = false;
    eLibrarySlider.classList.remove('active');
});

eLibrarySlider.addEventListener('mousemove', (e) => {
    if (!isDown) return; // Stop the function if not clicked
    e.preventDefault();
    const x = e.pageX - eLibrarySlider.offsetLeft;
    const walk = (x - startX) * 2; // Adjust scroll speed
    eLibrarySlider.scrollLeft = scrollLeft - walk;
});

// Touch events for mobile
eLibrarySlider.addEventListener('touchstart', (e) => {
    isDown = true;
    startX = e.touches[0].pageX - eLibrarySlider.offsetLeft;
    scrollLeft = eLibrarySlider.scrollLeft;
});

eLibrarySlider.addEventListener('touchend', () => {
    isDown = false;
});

eLibrarySlider.addEventListener('touchmove', (e) => {
    if (!isDown) return;
    const x = e.touches[0].pageX - eLibrarySlider.offsetLeft;
    const walk = (x - startX) * 2; // Adjust scroll speed
    eLibrarySlider.scrollLeft = scrollLeft - walk;
});

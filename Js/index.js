// JavaScript for slideshow functionality
let currentSlide = 0; // Start at the first slide
const slides = document.querySelectorAll('.home-img img'); // Select all images

// Function to show a specific slide
function showSlide(index) {
    // Wrap around the slides if index goes out of bounds
    if (index < 0) {
        currentSlide = slides.length - 1; // Go to last slide
    } else if (index >= slides.length) {
        currentSlide = 0; // Go to first slide
    } else {
        currentSlide = index;
    }

    // Hide all slides and show the current slide
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === currentSlide) {
            slide.classList.add('active');
        }
    });
}

// Function to change slides with arrows
function changeSlide(step) {
    showSlide(currentSlide + step);
}

// Initialize the first slide
showSlide(currentSlide);

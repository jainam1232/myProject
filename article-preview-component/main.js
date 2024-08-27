// Selecting the share image element by its ID
const shareImg = document.querySelector('#share__image');

// Selecting the share icon element by its ID
const shareIcon = document.querySelector('#share__icon');

// Adding a click event listener to the share image
shareImg.addEventListener('click', () => {
    // Toggling the 'share-icon__hidden' class on the share icon element
    shareIcon.classList.toggle('share-icon__hidden');
});

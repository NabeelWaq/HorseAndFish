
let navlinks = document.querySelector('.nav-1');
document.querySelector('.mark').addEventListener('click', (e) => {
navlinks.classList.remove('open'); // Close the navbar
});

document.querySelector('.fa-bars').addEventListener('click', (e) => {
navlinks.classList.add('open'); // Open the navbar
});
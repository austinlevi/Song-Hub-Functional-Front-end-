// Hamburger Menu Toggle
const hamburgerMenu = document.getElementById('hamburger-menu');
const navLinks = document.getElementById('nav-links');

hamburgerMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close menu when clicking outside
document.addEventListener('click', (event) => {
    if (!event.target.closest('#hamburger-menu') && !event.target.closest('#nav-links')) {
        navLinks.classList.remove('active');
    }
});

// Search Functionality
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const songList = document.getElementById('song-list');

const songs = [
    { title: "Song 1", genre: "Pop" },
    { title: "Song 2", genre: "Rock" },
    { title: "Song 3", genre: "Hip-Hop" },
    { title: "Song 4", genre: "Jazz" },
];

function displaySongs(filteredSongs) {
    songList.innerHTML = filteredSongs.map(song => `
        <div>
            <h3>${song.title}</h3>
            <p>Genre: ${song.genre}</p>
            <button>Download</button>
        </div>
    `).join('');
}

searchButton.addEventListener('click', () => {
    const query = searchInput.value.trim().toLowerCase();
    const filteredSongs = songs.filter(song => song.title.toLowerCase().includes(query));
    displaySongs(filteredSongs);
});

// Initial display of songs
displaySongs(songs);









// Sign Up Form Validation
const signupForm = document.getElementById('signup-form');

signupForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
    } else {
        alert("Sign Up Successful!");
        window.location.href = "index.html"; // Redirect to home page
    }
});
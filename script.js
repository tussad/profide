// Timer - count from a fixed date
const createdDate = new Date("2024-01-01T00:00:00");
const timerElement = document.getElementById("timer");

function updateTimer() {
    const now = new Date();
    const diff = now - createdDate;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    timerElement.innerHTML = `${days} day ${hours} hour ${minutes} minute ${seconds} second`;
}

setInterval(updateTimer, 1000);

// Particles.js config
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('particles.js config loaded');
});

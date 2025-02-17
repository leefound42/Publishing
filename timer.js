function updateCountdown() {
    // Set the target date
    const targetDate = new Date('March 15, 2025 00:00:00').getTime();
    
    // Get today's date and time
    const now = new Date().getTime();
    
    // Find the time difference between now and the target date
    const difference = targetDate - now;
    
    // Time calculations for days, hours, minutes and seconds
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);
    
    // Display the result in an element with id="countdown"
    document.getElementById('countdown').innerHTML = `
        <div class="countdown-item">
            <span class="number">${days}</span>
            <span class="text">Days</span>
        </div>
        <div class="countdown-item">
            <span class="number">${hours}</span>
            <span class="text">Hours</span>
        </div>
        <div class="countdown-item">
            <span class="number">${minutes}</span>
            <span class="text">Minutes</span>
        </div>
        <div class="countdown-item">
            <span class="number">${seconds}</span>
            <span class="text">Seconds</span>
        </div>
    `;
    
    // If the countdown is over, display expired message
    if (difference < 0) {
        clearInterval(timerInterval);
        document.getElementById('countdown').innerHTML = "Registration has closed";
    }
}

// Update the countdown every 1 second
const timerInterval = setInterval(updateCountdown, 1000);

// Initial call to avoid delay
updateCountdown();
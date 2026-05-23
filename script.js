window.addEventListener('DOMContentLoaded', () => {
    let clicks = 0;

    const counterBtn = document.getElementById('counter-btn');
    const counterDisplay = document.getElementById('counter-display');
    const secretZone = document.getElementById('secret-zone');
    const playBtn = document.getElementById('play-btn');
    const secretVideo = document.getElementById('secret-video');

    counterBtn.addEventListener('click', () => {
        clicks++;
        counterDisplay.innerText = `Clicks: ${clicks}`;

        // Just show the secret box when clicks pass 200
        if (clicks > 200) {
            secretZone.style.display = 'block';
        }
    });

    // Reveal video player and start playback
    playBtn.addEventListener('click', () => {
        playBtn.style.display = 'none'; 
        secretVideo.style.display = 'block'; 
        secretVideo.play(); 
    });
});

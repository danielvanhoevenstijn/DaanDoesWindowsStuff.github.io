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
});window.addEventListener('DOMContentLoaded', () => {
    let clicks = 0;
    let shiftInterval = null;
    let currentShift = 0;

    const counterBtn = document.getElementById('counter-btn');
    const counterDisplay = document.getElementById('counter-display');
    const secretZone = document.getElementById('secret-zone');
    const playBtn = document.getElementById('play-btn');
    const secretVideo = document.getElementById('secret-video');
    const pageContainer = document.getElementById('page-container');

    counterBtn.addEventListener('click', () => {
        clicks++;
        counterDisplay.innerText = `Clicks: ${clicks}`;

        // Check if user crossed the 200 threshold
        if (clicks > 200 && !shiftInterval) {
            
            // 1. Reveal the secret play button block
            secretZone.style.display = 'block';

            // 2. Start shifting the page by 50 pixels every single second (1000ms)
            shiftInterval = setInterval(() => {
                currentShift += 50;
                pageContainer.style.left = currentShift + 'px';
            }, 1000);
        }
    });

    // Handle clicking the green play button
    playBtn.addEventListener('click', () => {
        playBtn.style.display = 'none'; // Hide play button
        secretVideo.style.display = 'block'; // Show video element
        secretVideo.play(); // Play Video.Mp4
    });
});window.addEventListener('DOMContentLoaded', () => {
    const fonts = [
        // --- SERIF & CLASSIC ---
        "Times New Roman", "Georgia", "Garamond", "Palatino Linotype", "Book Antiqua", 
        "Cambria", "Didot", "American Typewriter", "Baskerville", "Big Caslon", 
        "Bodoni MT", "Bookman Old Style", "Century Schoolbook", "Footlight MT Light", "Goudy Old Style", 
        "Hoefler Text", "Juice ITC", "Matura MT Script Capitals", "Playbill", "Poor Richard",

        // --- SANS-SERIF & MODERN ---
        "Arial", "Helvetica", "Verdana", "Trebuchet MS", "Gill Sans", 
        "Noto Sans", "Calibri", "Candara", "Century Gothic", "Franklin Gothic Medium", 
        "Geneva", "Segoe UI", "Optima", "Avante Garde", "Futura", 
        "Arial Black", "Impact", "Charcoal", "Gadget", "Helvetica Neue",
        "Arial Narrow", "Haettenschweiler", "MS Sans Serif", "Tahoma", "Lucid Sans Unicode",
        "Tw Cen MT", "Berlin Sans FB", "High Tower Text", "Informal Roman", "Maiandra GD",

        // --- MONOSPACE & CODING ---
        "Courier New", "Courier", "Lucida Console", "Monaco", "Consolas", 
        "Andale Mono", "Courier Standard", "Freemono", "OCR A Extended", "MS Gothic",
        "SimSun", "NSimSun", "FangSong", "KaiTi", "Fixedsys",

        // --- FANTASY, SCI-FI & WEIRD ---
        "Copperplate", "Papyrus", "Chalkduster", "Herculanum", "Bodoni Ornaments", 
        "Party LET", "Skia", "Trattatello", "Wingdings", "Webdings",
        "Stencil", "Blackadder ITC", "Castellar", "Chiller", "Colonna MT",
        "Curlz MT", "Edwarian Script ITC", "Gigi", "Harlow Solid Italic", "Jokerman",

        // --- HANDWRITING & SCRIPTS ---
        "Comic Sans MS", "Apple Chancery", "Bradley Hand", "Brush Script MT", "Snell Roundhand", 
        "Lucida Handwriting", "Segoe Script", "Comic Sans", "Kristen ITC", "Viner Hand ITC",
        "Vivaldi", "Vladimir Script", "Rage Italic", "Palace Script MT", "Old English Text MT"
    ];

    // Create a single hidden style block that we can rewrite over and over
    const fontStyleElement = document.createElement('style');
    document.head.appendChild(fontStyleElement);

    // This function rolls the dice and switches the font instantly
    function changeToRandomFont() {
        const randomFont = fonts[Math.floor(Math.random() * fonts.length)];
        
        // Rewrite the internal styling rule
        fontStyleElement.innerHTML = `* { font-family: "${randomFont}", sans-serif !important; }`;
        
        console.log("Rolled Font:", randomFont);
    }

    // 1. Run it immediately when the site loads
    changeToRandomFont();

    // 2. Run it whenever the user clicks the button!
    const button = document.getElementById('font-roller');
    if (button) {
        button.addEventListener('click', changeToRandomFont);
    }
});

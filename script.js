window.addEventListener('DOMContentLoaded', () => {
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

window.addEventListener('DOMContentLoaded', () => {
    const fonts = [
        // --- SERIF & CLASSIC (1-20) ---
        "Times New Roman", "Georgia", "Garamond", "Palatino Linotype", "Book Antiqua", 
        "Cambria", "Didot", "American Typewriter", "Baskerville", "Big Caslon", 
        "Bodoni MT", "Bookman Old Style", "Century Schoolbook", "Footlight MT Light", "Goudy Old Style", 
        "Hoefler Text", "Juice ITC", "Matura MT Script Capitals", "Playbill", "Poor Richard",

        // --- SANS-SERIF & MODERN (21-50) ---
        "Arial", "Helvetica", "Verdana", "Trebuchet MS", "Gill Sans", 
        "Noto Sans", "Calibri", "Candara", "Century Gothic", "Franklin Gothic Medium", 
        "Geneva", "Segoe UI", "Optima", "Avante Garde", "Futura", 
        "Arial Black", "Impact", "Charcoal", "Gadget", "Helvetica Neue",
        "Arial Narrow", "Haettenschweiler", "MS Sans Serif", "Tahoma", "Lucid Sans Unicode",
        "Tw Cen MT", "Berlin Sans FB", "High Tower Text", "Informal Roman", "Maiandra GD",

        // --- MONOSPACE & CODING (51-65) ---
        "Courier New", "Courier", "Lucida Console", "Monaco", "Consolas", 
        "Andale Mono", "Courier Standard", "Freemono", "OCR A Extended", "MS Gothic",
        "SimSun", "NSimSun", "FangSong", "KaiTi", "Fixedsys",

        // --- FANTASY, SCI-FI & WEIRD (66-85) ---
        "Copperplate", "Papyrus", "Chalkduster", "Herculanum", "Bodoni Ornaments", 
        "Party LET", "Skia", "Trattatello", "Wingdings", "Webdings",
        "Stencil", "Blackadder ITC", "Castellar", "Chiller", "Colonna MT",
        "Curlz MT", "Edwarian Script ITC", "Gigi", "Harlow Solid Italic", "Jokerman",

        // --- HANDWRITING & SCRIPTS (86-100) ---
        "Comic Sans MS", "Apple Chancery", "Bradley Hand", "Brush Script MT", "Snell Roundhand", 
        "Lucida Handwriting", "Segoe Script", "Comic Sans", "Kristen ITC", "Viner Hand ITC",
        "Vivaldi", "Vladimir Script", "Rage Italic", "Palace Script MT", "Old English Text MT"
    ];
    
    // Grab a random font from the 100 choices
    const randomFont = fonts[Math.floor(Math.random() * fonts.length)];
    
    // Create a style element and inject it into the head to force ALL selectors (*) to use it
    const style = document.createElement('style');
    style.innerHTML = `* { font-family: "${randomFont}", sans-serif !important; }`;
    document.head.appendChild(style);
    
    console.log("Current Font:", randomFont);
});

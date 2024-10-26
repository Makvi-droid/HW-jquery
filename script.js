$(document).ready(function () {
    
    const texts = [
        "Experience luxury and comfort at Luxzur Hotel.",
        "Book your stay with us and enjoy world-class amenities.",
        "Relax, unwind, and make unforgettable memories."
    ];
    let textIndex = 0; 
    let charIndex = 0; 

    function type() {
        if (charIndex < texts[textIndex].length) {
            $('#type-text').append(texts[textIndex].charAt(charIndex));
            charIndex++;
            setTimeout(type, 50); 
        } else {
            
            setTimeout(() => {
                $('#type-text').empty();
                charIndex = 0;
                textIndex = (textIndex + 1) % texts.length; 
                type();
            }, 2000); 
        }
    }

    type();
});

$(document).ready(function () {
    
    const texts = [
        "Experience luxury and comfort at Luxzur Hotel.",
        "Book your stay with us and enjoy world-class amenities.",
        "Relax, unwind, and make unforgettable memories.",
        "Join in our relaxing activities outdoors and indoors."
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

$('#contactForm').on('submit', function(e) {
    e.preventDefault(); 
    alert('Thank you for your message! We will get back to you shortly.'); 
    this.reset(); 
});







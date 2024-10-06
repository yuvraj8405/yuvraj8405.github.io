document.addEventListener("DOMContentLoaded", function() {
    particlesJS("particles-js", {
        "particles": {
            "number": {
                "value": 2500, 
                "density": {
                    "enable": true,
                    "value_area": 1000 
                }
            },
            "color": {
                "value": "#ffffff" 
            },
            "shape": {
                "type": "circle", 
                "stroke": {
                    "width": 0,
                    "color": "#0000000"
                }
            },
            "opacity": {
                "value": 1, 
                "random": true
            },
            "size": {
                "value": 0.9, 
                "random": true
            },
            "line_linked": {
                "enable": false 
            },
            "move": {
                "enable": true,
                "speed": 0.5, 
                "direction": "none",
                "random": true,
                "straight": false,
                "out_mode": "out",
                "bounce": false
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": false 
                },
                "onclick": {
                    "enable": false 
                },
                "resize": true
            }
        },
        "retina_detect": true
    });

});
// Toggle social links visibility
const socialLinkToggle = document.getElementById("social-link-toggle");
const socialLinks = document.getElementById("social-links");

socialLinkToggle.addEventListener("click", function(e) {
    e.preventDefault(); // Prevent default link action
    if (socialLinks.style.display === "none") {
        socialLinks.style.display = "block"; // Show the social links
    } else {
        socialLinks.style.display = "none"; // Hide the social links
    }
});  
// Assuming you want to trigger the visibility on page load
window.onload = function() {
    const aboutSection = document.querySelector('.about-section');
    aboutSection.classList.add('active');
};
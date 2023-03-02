// Animation
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
});

sr.reveal('.home__data, .home-social-icon' ,{}); 
sr.reveal('.home-social-icon', {delay: 400}); 
sr.reveal( '.home-social-icon',{ interval: 200}); 

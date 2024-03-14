function smooth_scroll(){
    // Smooth scroll function
function smoothScroll(target, duration) {
    var targetElement = document.querySelector(target);
    var targetPosition = targetElement.getBoundingClientRect().top;
    var startPosition = window.pageYOffset;
    var distance = targetPosition - startPosition;
    var startTime = null;

    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        var timeElapsed = currentTime - startTime;
        var run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
}

// Smooth scroll event listener
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        var target = this.getAttribute('href');
        smoothScroll(target, 1000); // Adjust duration as needed
    });
}); 
}
smooth_scroll();
function loading(){
    var tl = gsap.timeline();

    tl.from(".logo h1 , .menu h4",{
        opacity : 0,
        duration: 1,
        delay:0.8,
        stagger: 0.3,
    })
    gsap.from(".page2 img",{
        opacity : 0,
        duration: 1,
        delay:2.9,
        // stagger: 0.3,
    })
}
loading();

function logoAnimation(){
    gsap.to(".logo h1",{
        fontSize : "4vw",
        y:0,
        x:'5%',
        scrollTrigger: {
            trigger : ".logo h1",
            scroller: "body",
            // markers: true,
            start: "2%",
            // end: "0%",
            scrub: true
        }
    })
    gsap.to(".page1-navbar",{
        backgroundColor: "#fff",
        scrollTrigger: {
            trigger: ".page1-navbar",
            scroller: "body",
            // markers:true,
        }
    })
}
logoAnimation();

function text_animation(){
    gsap.from(".page3 h1 span",{
        x: "100%",
        opacity: 0,
        stagger:0.3,
        // rotation: 20,
        duration: 1.5,
        scrollTrigger: {
            trigger: ".page3 span",
            scroller: "body",
            // markers: true,
            // scrub: true,
            start: 'top 70%',
            // end: 'top 30%'
        }
    })
}
text_animation();

function page4(){
    gsap.from(".page4-1 img",{
        y: "150px",
        opacity: 0,
        duration: 1,
        scrollTrigger: {
            trigger: ".page4-1 img",
            scroller: "body",
            // markers: true,
            start: "top 90%",
            end: "top 40%",
            
        }
    })
    gsap.from(".page4-2 h1, .page4-2 h6, .page4-2 button",{
        x: "100px",
        opacity: 0,
        stagger: 0.4,
        scrollTrigger: {
            trigger: ".page4-2 h1",
            scroller: "body",
            // markers: true,
            start: "top 90%",
            end: "top 40%",
            
        }
    })
}
page4();
function page6(){
    gsap.from(".page6-1 img",{
        y: "150px",
        opacity: 0,
        duration: 1,
        scrollTrigger: {
            trigger: ".page6-1 img",
            scroller: "body",
            // markers: true,
            start: "top 90%",
            end: "top 40%",
            
        }
    })
    gsap.from(".page6-2 h1, .page6-2 h6, .page6-2 button",{
        x: "-100px",
        opacity: 0,
        stagger: 0.4,
        scrollTrigger: {
            trigger: ".page6-2 h1, .page6-2 h6, .page6-2 button",
            scroller: "body",
            // markers: true,
            start: "top 90%",
            end: "top 40%",
            
        }
    })
}
page6();

function page7(){
    gsap.from(".page7-img img",{
        y:"-150px",
        opacity: 0,
        duration:1,
        stagger:0.4,
        scrollTrigger: {
            trigger: ".page7-img img",
            scroller: "body",
            // markers: true,

        }
    })
    gsap.from(".page7-1 h1",{
        x:"-150px",
        opacity: 0,
        duration: 1.7,
        scrollTrigger: {
            trigger: ".page7-img img",
            scroller: "body",
            // markers: true,
        }
    })
}
page7();
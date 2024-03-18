function locomotive(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
  learp: 1
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});



// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}

locomotive();

function homePageAnimation(){
    gsap.to(".page1>h1",{
        marginLeft: "-20%",
        filter: "blur(4px)",
        scrollTrigger: {
            trigger: ".page1>h1",
            scroller: "#main",
            // markers: true,
            start: "top 30%",
            end: "top -30%",
            scrub: true
        }
    })
    gsap.to(".page1>h2",{
        marginLeft: "50%",
        marginTop: "0.5%",
        filter: "blur(4px)",
        scrollTrigger: {
            trigger: ".page1>h2",
            scroller: "#main",
            // markers: true,
            start: "top 40%",
            end: "top 0%",
            scrub: true
        }
    })
    gsap.to(".video video",{
        height: "100%",
        width: "95%",
        scrollTrigger: {
            trigger: ".video video",
            scroller: "#main",
            // markers: true,
            start: "top 80%",
            end: "top 30%",
            scrub: true
        }
        // transform:" translateX(5%)",
    })
    gsap.to(".scroller-animation ",{
        opacity : 0,
        scrollTrigger: {
            trigger: ".scroller-animation ",
            scroller: "#main",
            // markers: true,
            start: "top 70%",
            end: "top 50%",
            scrub: true
        }
        // transform:" translateX(5%)",
    })
    gsap.to("#main",{
        backgroundColor: "#ffffff",
        scrollTrigger: {
            trigger: ".page2",
            scroller: "#main",
            // markers: true,
            scrub:true,
            start: "top 60%",
            end: "top 30%"
        }
    })
    // gsap.to("#main",{
    //     backgroundColor: "#000",
    //     scrollTrigger: {
    //         trigger: ".page4",
    //         scroller: "#main",
    //         // markers: true,
    //         scrub:true,
    //         start: "top 60%",
    //         end: "top 30%"
    //     }
    // })
    
    
    
    gsap.to(".page3-img img:nth-child(1)",{
        left: "10%",
        scrollTrigger: {
            trigger: ".page3",
            scroller: "#main",
            // markers: true,
            scrub:true,
            // start: "top 60%",
            // end: "top 30%"
        }
    })
    gsap.to(".page3-img img:nth-child(2)",{
        right: "10%",
        scrollTrigger: {
            trigger: ".page3",
            scroller: "#main",
            // markers: true,
            // scrub:true,
            // start: "top 60%",
            // end: "top 30%"
        }
    })

}
homePageAnimation();

function curser (){
    var page1Content = document.querySelector("#main");
var curser = document.querySelector(".cursor");

page1Content.addEventListener("mousemove", function (dets) {
    gsap.to(curser, {

        x: dets.x,
        y: dets.y,
        // backgroundBlendDropMode : "diffrence",

    })
})}
curser();


function home_animation(){
    var tl = gsap.timeline();
tl.from(".nav-1, .nav-2 h5, .nav-3, .nav-4 ",{
    y: "-50px",
    opacity: 0,
    duration: 1,
    delay: 1,
    stagger: 0.4
  })
tl.from(".page1>h1>span",{
    transform: "translate(0px,-50px)",
    opacity: 0,
    duration: 1,
    stagger:0.5
})

}
home_animation();

gsap.from(".page3-1",{
    y: "-200px",
    opacity: 0,
    duration: 1,
    stagger: 0.6,
    scrollTrigger:{
        trigger: ".page3",
        scroller:"body",
        start: "top 40%",
    
    }
})


  
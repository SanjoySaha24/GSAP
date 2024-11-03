// gsap.to(".main",{
//   x:1000, 
//   duration: 10,
//   delay:4,
//   rotate:90,
//   backgroundColor:"blue"
// })

// const timeline = gsap.timeline();
// timeline.to(".box1",{
//     x:1200,
//     rotate: 90,
//     scale:0.5,
//     duration:4,
//     delay:2,
// })


gsap.from(".nav h3",{
    y: -50,
    opacity:0,
    delay:0.6,
    duration:2,
    stagger:1,
})

gsap.from(".main h1",{
    x:-500,
    opacity:0,
    duration:0.8,
    // delay:4,
})
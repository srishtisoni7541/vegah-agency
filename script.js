const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time)=>{
  lenis.raf(time * 1000)
})

gsap.ticker.lagSmoothing(0)


 var tl=gsap.timeline();
tl.to('.loader',{
    y:-2000,
    duration:.7,
    delay:10,
})
tl.to('.h1text h1',{
    y:-120,
    duration:.2,
})


// Select the elements
var menubar = document.querySelector(' nav #icon');
menubar.addEventListener('click',function(){
    // console.log('ha')
    gsap.to('.page1 .menucontainer',{
        left:0,
        duration:.5,
    })
})
var closebtn = document.querySelector('.menucontainer i');
closebtn.addEventListener('click',function(){
    gsap.to('.menucontainer',{
        left:'-100%',
        duration:.5,
    })
})






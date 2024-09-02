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



var services=document.querySelector('.navright .services');
services.addEventListener('mouseover',function(){
    gsap.to('.servicemenu',{
        opacity:1,
        // duration:.5,
    })
})
    services.addEventListener('mouseleave',function(){
        gsap.to('.servicemenu',{
            opacity:0,
            duration:.5,
        })
    })


// Select the elements
var menubar = document.querySelector(' .page1 .navbtm #icon');
menubar.addEventListener('click',function(){
    gsap.to('.page1 .menucontainer',{
        left:0,
        duration:.5,
    })
})
var closebtn =document.querySelector('.menucontainer i');
closebtn.addEventListener('click',function(){
    gsap.to('.menucontainer',{
        left:'-100%',
        duration:.5,
    })
})





function page2Animation(){
    gsap.to('.h2textcontainer h2',{
        y:-70,
        duration:.3,
        ease:'expo.Inout',
        scrollTrigger:{
            trigger:'.page2',
            // scrub:true
        }
    })
}
 page2Animation();


 function page3Animation(){
    gsap.to('.page3righttop h3',{
        x:-450,
        duration:.8,
        opacity:1,
        ease:'expo.Inout',
        scrollTrigger:{
            trigger:'.page3',
            scroller:'body',
        }
    })
 }

 page3Animation();


 function page4Animation(){
    gsap.to('.h5text h5',{
        x:650,
        duration:.8,
        // opacity:1,
        ease:'expo.Inout',
        scrollTrigger:{
            trigger:'.page4',
            scroller:'body',
            start:'top 20%'
        }
    })
 }

 page4Animation();





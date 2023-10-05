// cursor k sath jo green bhai hai 
var cursor = document.querySelector("#cursor");
document.addEventListener("mousemove", function(dets){
    cursor.style.left = dets.x+30 + "px"// kuen k left right x hai 
    cursor.style.top = dets.y + "px"

})

//cursor k peche jo chlraha
var cur_blur = document.querySelector("#cursor_blur");
document.addEventListener("mousemove", function(dets){
    cur_blur.style.left = dets.x -150+ "px"// kuen k left right x hai 
    cur_blur.style.top = dets.y -150+ "px"

})
//all krne se sare h4 ajaty hain or nodelist ki form mein ata nodelist is like an array
var h4=document.querySelectorAll("#nav h4");
h4.forEach(function(elem){
    elem.addEventListener("mouseenter", function(){
        cursor.style.scale=2
        cursor.style.border="1px solid #fff"
        cursor.style.backgroundColor="transparent"

    })
    elem.addEventListener("mouseleave", function(){
        cursor.style.scale=1
        cursor.style.border="0px solid  #caff60"
        cursor.style.backgroundColor=" #caff60"

    })
})

//nav bar ka black appear hona
gsap.to('#nav',{
    backgroundColor: "#000",
    duration:0.5,
    height:"80px",
    scrollTrigger:{
        trigger: "#nav",
        scroller: "body",// scroll kia hroha
        //markers: true,
        start: "top -10%", // 10% scroll krne p nav bar appear ho
      // this cancels the above
        end: "top -11%",
        scrub: 1
    

    }

})

//neche jane p website ka black hojana
gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger: "#main",
        scroller:"body",
        markers: true,
        start: "top -50vh",
        end:"top -100vh",
        scrub: 2// kun k color ek dam se black horha tha 

    }


})

gsap.from("#about_us img, #about_us_in",{
    y:50,// y axis se element urhty ain
    opacity:0,
    duration:1,
    stagger:0.4,
    scrollTrigger:{
        trigger:"#about_us",
        scroller:"body",
        //markers:true,
        start: "top 60%",
        end: "top 58%",
        scrub: 3

    }
})



gsap.from("#colon1",{
    y:-70,// y axis se element urhty ain
    x: -70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        //markers:true,
        start: "top 55%",
        end: "top 45%",
        scrub: 2

    }
})


gsap.from("#colon2",{
    y:70,// y axis se element urhty ain
    x: 70,
    scrollTrigger:{
        trigger:"#colon2",
        scroller:"body",
        //markers:true,
        start: "top 55%",
        end: "top 45%",
        scrub: 2

    }
})


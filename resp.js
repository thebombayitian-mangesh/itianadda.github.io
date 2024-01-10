burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navlist = document.querySelector('.nav-list')
rightnav = document.querySelector('.rightnav')


burger.addEventListener('click', ()=>{
    rightnav.classList.toggle('v-class-resp');
    navlist.classList.toggle('v-class-resp');
    navbar.classList.toggle('h-nav-resp');
   
})






document.querySelectorAll(".reveal")
.forEach(function(elem){
   var parent = document.createElement("span");
   var child = document.createElement("span");
   parent.classList.add("parent");
   child.classList.add("child");
   child.innerHTML=elem.innerHTML;
   parent.appendChild(child);
   elem.innerHTML="";
   elem.appendChild(parent);



});
var t1 = gsap.timeline();
t1
.from(" .child span",{
    x:100,
    stagger:.2,
    duration:1.4,
    ease: Power3.easeInOut
})

.to(".parent .child",{
    y: "-100%",
    duration:1,
     ease: Circ.easeInOut
})
.to("#loader",{
    height:0,
    duration: 1,
    ease: Circ.easeInOut
})
.to("#green",{
    height:"100%",
    top:0,
    duration: 1,
    delay:-1,
    ease: Circ.easeInOut
})
.to("#green",{
    height:"0%",
    duration:.1,
    delay:.5,
    
    ease: Circ.easeInOut
})


 hidden = document.querySelector("#home")
hidden.style.display="none";

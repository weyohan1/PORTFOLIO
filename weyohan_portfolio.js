new fullpage('#fullpage', {

anchors: ['1page', '2page', '3page', '4page', '5page'],
scrollingSpeed: 700,
menu: '.side',
sectionSelector: '.section',
licenseKey: 'gplv3-license',
autoScrolling: true,
scrollBar: false,
fitToSection: true,
 verticalCentered: false,normalScrollElements:
  '.project_sub_img',

  afterLoad: function(origin, destination, direction) {
    
if(destination.index === 2) {
gsap.fromTo(".skill_back", 
{ x: -100, opacity: 0 }, 
{ x: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "power2.out" ,overwrite: "auto"}
);
}

if(destination.index === 4) {
gsap.fromTo(".contact_suv",
{ x: -100, opacity: 0 }, 
{ x: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "power2.out" ,overwrite: "auto"}
)}
  }
}
)






/****  PROFILE  ****/

window.addEventListener('DOMContentLoaded',()=>{

const NBtn = document.querySelectorAll('.note_btn');
const NBox = document.querySelectorAll('.note_box');
const CBtn = document.querySelectorAll('.note_close_btn');

NBtn.forEach((btn, btnIndex)=> {
btn.addEventListener('click',()=> {

NBox.forEach((box, boxIndex)=> {

if(btnIndex === boxIndex) {
  box.classList.add('show');

}else { box.classList.remove('show');

}
});
});
});

CBtn.forEach((btn, CIndex) => {
btn.addEventListener('click',()=> {
NBox[CIndex].classList.remove('show');  
})

})

});


/****  PROJECT  ****/

window.addEventListener('DOMContentLoaded',()=>{

const PBtn = document.querySelectorAll('.project_btn');
const PBox = document.querySelectorAll('.project_note_box');
const projectCloseBtn = document.querySelectorAll('.project_close_btn');


PBtn.forEach((btn, btnIndex) => {
btn.addEventListener('click',()=>{

PBox.forEach((box, boxIndex) => {

if(btnIndex === boxIndex) {
  box.classList.add('show');

}else {box.classList.remove('show');

}
});
});
});

projectCloseBtn.forEach((btn,PIndex ) => {
btn.addEventListener('click',() =>{
PBox[PIndex].classList.remove('show');
});
});
});






/****  GSaP ****/


  document.querySelectorAll(".side div").forEach(el => {
  el.addEventListener("mouseenter", () => {
     gsap.killTweensOf(el); 
    gsap.to(el, {
      y: -10,
      ease: "power2.out",
      duration: 0.4,
      yoyo: true,
      repeat: 1
    });
  });

el.addEventListener("mouseleave",()=> {
  gsap.to(el,{
      y:0,
      duration:0.4,
      ease:"power2.out"
  });
});

});



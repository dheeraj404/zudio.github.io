// let about=document.getElementById("about");

// about.addEventListener("click",(event)=>{
//     event.preventDefault();
    
//     window.scrollTo(0,4000);
// })
const bar=document.getElementById("bar");
const nav=document.getElementById("nav");
const close=document.getElementById("Close");
bar.addEventListener("click",(event)=>{
    event.preventDefault();
    nav.classList.add('active');
console.log("hello");
})
close.addEventListener("click",(event)=>{

    nav.classList.remove('active');
})
const p1=document.getElementById("p1");
const p2=document.getElementById("p2");
const p3=document.getElementById("p3");
const p4=document.getElementById("p4");

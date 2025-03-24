
console.log('javascript is loaded')
const nav=document.querySelector('.navbar')
const studydestination=document.querySelector('.study');
const navlist=document.querySelector('.navlist');
const demo=document.querySelector('.demo')
const hamburger=document.querySelector('.hamburger')
const sidebar=document.querySelector('.sidebar');
const studies=document.querySelector('.studies');

const servicesList=document.querySelector('.serviceslist');
const services=document.querySelector('.services')

/*services.addEventListener('click',()=>{
    servicesList.classList.toggle('serviceslisttoggle')
    demo.classList.remove('.demotoggle')
    navlist.classList.toggle('listtoggle')
    nav.classList.toggle('navtoggle')
    alert('working')
})*/
if (services && servicesList && demo && navlist && nav) {
    services.addEventListener('click', () => {
        servicesList.classList.toggle('serviceslisttoggle');
        demo.classList.remove('demotoggle'); // ❌ Removed the dot (.)
        navlist.classList.toggle('listtoggle');
        nav.classList.toggle('navtoggle');
        
    });
} else {
    console.warn("Some elements are missing. JavaScript event listener not applied.");
}
studies.addEventListener('click',()=>{
    demo.classList.toggle('demotoggle')
    sidebar.classList.toggle('sidebarhidden')
})

studydestination.addEventListener('click',()=>{
    navlist.classList.toggle('listtoggle')
   nav.classList.toggle('navtoggle')
   servicesList.classList.remove('serviceslisttoggle')
   demo.classList.toggle('demotoggle')
  
    
})

hamburger.addEventListener('click', () => {
    document.querySelector('.menu').classList.toggle('menutoggle');
    document.querySelector('.cross').classList.toggle('crosstoggle');
    nav.classList.toggle('navtoggle');
    sidebar.classList.toggle('sidebartoggle');
});









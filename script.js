
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
const companybtn=document.querySelector('.companybtn')
const company=document.querySelector('.company')

companybtn.addEventListener('click',()=>{
    company.classList.toggle('comp');
})

document.addEventListener("scroll", ()=>{
    const div = document.getElementById("myDiv");
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    
    if (scrollPosition > windowHeight) {
        setTimeout(() => {
            div.style.display = "flex";
        }, 0); // Delay of 2 seconds before showing the div
    } else {
        div.style.display = "none";
    }
});



   


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

document.addEventListener("DOMContentLoaded", () => {
    const accordions = document.querySelectorAll(".accordion-btn");

    accordions.forEach((btn) => {
        btn.addEventListener("click", () => {
            const content = btn.nextElementSibling;
            const icon = btn.querySelector(".accordion-icon");

            // Toggle active state
            content.classList.toggle("hidden");
            icon.classList.toggle("rotate-180");

            // Close other open accordions
            document.querySelectorAll(".accordion-content").forEach((otherContent) => {
                if (otherContent !== content) {
                    otherContent.classList.add("hidden");
                }
            });

            document.querySelectorAll(".accordion-icon").forEach((otherIcon) => {
                if (otherIcon !== icon) {
                    otherIcon.classList.remove("rotate-180");
                }
            });
        });
    });
});








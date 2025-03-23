const nav=document.querySelector('.navbar')
const studydestination=document.querySelector('.study');
const navlist=document.querySelector('.navlist');
const demo=document.querySelector('.demo')
const hamburger=document.querySelector('.hamburger')
const sidebar=document.querySelector('.sidebar');
const studies=document.querySelector('.studies');

studies.addEventListener('click',()=>{
    demo.classList.toggle('demotoggle')
    sidebar.classList.toggle('sidebarhidden')
})

studydestination.addEventListener('click',()=>{
    navlist.classList.toggle('listtoggle')
   nav.classList.toggle('navtoggle')
   demo.classList.toggle('demotoggle')
    
})

hamburger.addEventListener('click', () => {
    document.querySelector('.menu').classList.toggle('menutoggle');
    document.querySelector('.cross').classList.toggle('crosstoggle');
    nav.classList.toggle('navtoggle');
    sidebar.classList.toggle('sidebartoggle');
});


document.querySelectorAll('.accordion-btn').forEach(button => {
    button.addEventListener('click', () => {
        const content = button.nextElementSibling;
        content.classList.toggle('hidden');
    });
});

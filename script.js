
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
    navlist.classList.toggle('listtoggle')
    nav.classList.toggle('navtoggle')
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
document.addEventListener("DOMContentLoaded", function () {
    const countryLinks = document.querySelectorAll(".country");

    countryLinks.forEach(link => {
        link.addEventListener("click", function () {
            // Remove the orange color from all links
            countryLinks.forEach(item => item.style.color = "");

            // Set the clicked link color to orange
            this.style.color = "orange";
        });
    });
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


    const swiper = new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 20,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        640: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        }
      }
    });


    /*7 step guide */
    const steps = [
        {
          title: "Career Counseling",
          desc: "Get expert advice to choose the right career path."
        },
        {
          title: "Profile Evaluation",
          desc: "Assess your academic and personal profile for eligibility."
        },
        {
          title: "University Shortlisting",
          desc: "Find the best universities that match your goals."
        },
        {
          title: "Application & Admission",
          desc: "Apply to your Preferred Universities or Institutions."
        },
        {
          title: "Test Preparation",
          desc: "Ace your exams with personalized preparation."
        },
        {
          title: "Visa Guidance",
          desc: "Get assistance with documentation and visa interview."
        },
        {
          title: "Pre-Departure Support",
          desc: "Be ready to take off with our pre-departure help."
        },
      ];
  
      let currentStep = 0;
  
      const stepNumber = document.getElementById("stepNumber");
      const stepTitle = document.getElementById("stepTitle");
      const stepDesc = document.getElementById("stepDesc");
      const prevBtn = document.getElementById("prevBtn");
      const nextBtn = document.getElementById("nextBtn");
  
      function updateStep() {
        stepNumber.textContent = currentStep + 1;
        stepTitle.textContent = steps[currentStep].title;
        stepDesc.textContent = steps[currentStep].desc;
  
        // Disable buttons on bounds
        prevBtn.disabled = currentStep === 0;
        nextBtn.disabled = currentStep === steps.length - 1;
  
        prevBtn.classList.toggle("opacity-50", currentStep === 0);
        nextBtn.classList.toggle("opacity-50", currentStep === steps.length - 1);
      }
  
      prevBtn.addEventListener("click", () => {
        if (currentStep > 0) {
          currentStep--;
          updateStep();
        }
      });
  
      nextBtn.addEventListener("click", () => {
        if (currentStep < steps.length - 1) {
          currentStep++;
          updateStep();
        }
      });
  
      updateStep(); 
      /*universitye all*/
    
    document.addEventListener("DOMContentLoaded", function () {
      const universities = [
        { name: "Uppsala University, Uppsala", url: "www.uu.se/en" },
        { name: "University of Padua, Padua", url: "www.unipd.it/en" },
        { name: "University of Dubrovnik, Dubrovnik", url: "https://www.unidu.hr/" },
        { name: "Modul University, Vienna", url: "www.modul.ac.at" },
        { name: "University of Birmingham, Dubai Campus", url: "www.birmingham.ac.uk/dubai/index.aspx" },
        { name: "National University of Singapore (SCALE and ISS courses)", url: "www.nus.edu.sg/" },
        { name: "INSEEC Business School, Paris", url: "https://www.inseec.com/en/" },
        { name: "University of Zurich, Zürich (Only PG)", url: "https://www.uzh.ch/cmsssl/en.html" },
        { name: "University of Nicosia, Nicosia", url: "www.unic.ac.cy" },
        { name: "University of Ecology and Management in Warsaw, Warsaw", url: "https://wseiz.pl/en/" },
        { name: "National Research Nuclear University (MEPhI), Moscow", url: "https://mephi.ru/" },
        { name: "University of Alberta, Edmonton, Alberta(Only UG)", url: "https://www.ualberta.ca/en/index.html" },
        { name: "International College of Liberal Arts, Kofu", url: "https://www.icla.ygu.ac.jp/en/" },
        { name: "Aalto University, Espoo", url: "www.aalto.fi/en" },
        { name: "University of Connecticut, Storrs, Connecticut (Public Ivy)", url: "uconn.edu" },
        { name: "Constructor University", url: "www.jacobs-university.de" },
        { name: "University of Antwerp, Antwerp", url: "https://www.uantwerpen.be/en/" },
        { name: "George Mason University, Korea Campus", url: "https://masonkorea.gmu.edu/" },
        { name: "International University of Monaco, Monaco", url: "https://www.monaco.edu/" },
        { name: "David Tvildiani Medical University, Tbilisi", url: "https://www.dtmu.ge/" },
        { name: "Trinity College Dublin, Dublin", url: "www.tcd.ie" },
        { name: "The University of New South Wales, Sydney", url: "www.unsw.edu.au" },
        { name: "University of Auckland, Auckland", url: "https://www.auckland.ac.nz/en.html" },
        { name: "University of Twente, Enschede", url: "www.utwente.nl/en" },
        { name: "Monash University, Malaysia Campus", url: "www.monash.edu.my" },
      ];

      const totalPages = 36;
      let currentPage = 1;

      const renderUniversities = () => {
        const container = document.getElementById("university-list");
        container.innerHTML = "";
        universities.forEach((uni) => {
          container.innerHTML += `
            <div class="flex justify-between items-center border  p-4 rounded bg-white shadow-sm">
              <div>
                <h2 class="font-semibold text-lg">${uni.name}</h2>
                <a href="https://${uni.url}" class="text-sm text-blue-500 hover:underline">${uni.url}</a>
              </div>
              <img src="/mnt/data/Container.png" alt="University Logo" class="h-10 w-10 object-contain" />
            </div>
          `;
        });
      };

      const renderPagination = () => {
        const container = document.getElementById("pagination");
        container.innerHTML = "";

        const addButton = (label, page, active = false) => {
          const button = document.createElement("button");
          button.textContent = label;
          button.className = `w-8 h-8 rounded-full text-sm border ${
            active ? 'bg-black text-white font-bold' : 'border-black text-black'
          }`;
          button.onclick = () => {
            currentPage = page;
            renderUniversities();
            renderPagination();
          };
          container.appendChild(button);
        };

        const prev = document.createElement("button");
        prev.textContent = "←";
        prev.className = "w-8 h-8 rounded-full border border-black text-black text-sm";
        prev.onclick = () => {
          if (currentPage > 1) {
            currentPage--;
            renderUniversities();
            renderPagination();
          }
        };
        container.appendChild(prev);

        for (let i = 1; i <= totalPages; i++) {
          if (i === 1 || i === totalPages || Math.abs(i - currentPage) <= 1) {
            addButton(i, i, i === currentPage);
          } else if (i === currentPage - 2 || i === currentPage + 2) {
            const span = document.createElement("span");
            span.textContent = "...";
            span.className = "text-black";
            container.appendChild(span);
          }
        }

        const next = document.createElement("button");
        next.textContent = "→";
        next.className = "w-8 h-8 rounded-full border border-black text-black text-sm";
        next.onclick = () => {
          if (currentPage < totalPages) {
            currentPage++;
            renderUniversities();
            renderPagination();
          }
        };
        container.appendChild(next);
      };

      renderUniversities();
      renderPagination();
    });
  
  /*faq accrodian*/

  function toggleAccordion(button) {
    const content = button.nextElementSibling;
    const icon = button.querySelector('.toggle-icon');

    const isOpen = !content.classList.contains('hidden');

    if (isOpen) {
      content.classList.add('hidden');
      icon.textContent = '+';
    } else {
      content.classList.remove('hidden');
      icon.textContent = '−'; // minus sign
    }
  }

/*shorship accordian*/


  const buttons = document.querySelectorAll('[data-accordion-button]');

  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const content = btn.nextElementSibling;
      const icon = btn.querySelector('.accordion-icon');

      const isOpen = !content.classList.contains('hidden');

      // Close all
      document.querySelectorAll('[data-accordion-content]').forEach((el) => el.classList.add('hidden'));
      document.querySelectorAll('.accordion-icon').forEach((ic) => ic.classList.remove('rotate'));

      if (!isOpen) {
        content.classList.remove('hidden');
        icon.classList.add('rotate');
      }
    });
  });

  /*scholarship accrodain
  
  const buttons = document.querySelectorAll('[data-accordion-button]');

buttons.forEach((btn) => {
btn.addEventListener('click', () => {
const content = btn.nextElementSibling;
const icon = btn.querySelector('.accordion-icon');

const isOpen = !content.classList.contains('hidden');

// Close all
document.querySelectorAll('[data-accordion-content]').forEach((el) => el.classList.add('hidden'));
document.querySelectorAll('.accordion-icon').forEach((ic) => ic.classList.remove('rotate'));

if (!isOpen) {
content.classList.remove('hidden');
icon.classList.add('rotate');
}
});
});
*/

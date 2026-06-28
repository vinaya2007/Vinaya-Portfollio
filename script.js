/*==========================================
            LOADER
==========================================*/

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    loader.style.opacity = "0";

    loader.style.pointerEvents = "none";

    setTimeout(() => {

        loader.style.display = "none";

    }, 500);

});

/*==========================================
        AOS INITIALIZATION
==========================================*/

AOS.init({

    duration: 900,

    once: true,

    offset: 80

});

/*==========================================
            TYPING EFFECT
==========================================*/

new Typed(".typing", {

    strings: [

        "AI Enthusiast",

        "AI Full Stack Developer",

        "Aspiring Software Engineer",

        "Aspiring AI/ML Engineer"

    ],

    typeSpeed: 70,

    backSpeed: 45,

    backDelay: 1500,

    loop: true

});

/*==========================================
        CUSTOM CURSOR
==========================================*/

const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {

    cursor.style.left = e.clientX + "px";

    cursor.style.top = e.clientY + "px";

});

/*==========================================
        SCROLL PROGRESS BAR
==========================================*/

const progressBar = document.getElementById("progress-bar");

window.addEventListener("scroll", () => {

    const totalHeight =

        document.documentElement.scrollHeight -

        window.innerHeight;

    const progress =

        (window.scrollY / totalHeight) * 100;

    progressBar.style.width = progress + "%";

});

/*==========================================
        ACTIVE NAVBAR
==========================================*/

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

/*==========================================
        SMOOTH SCROLL
==========================================*/

document.querySelectorAll('a[href^="#"]')

.forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        document.querySelector(

            this.getAttribute("href")

        ).scrollIntoView({

            behavior:"smooth"

        });

    });

});

/*==========================================
        HERO IMAGE TILT
==========================================*/

VanillaTilt.init(

    document.querySelectorAll(".hero-image"),

{

    max:18,

    speed:500,

    glare:true,

    "max-glare":0.25

});


/*==========================================
        ANIMATED COUNTERS
==========================================*/

const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (!entry.isIntersecting) return;

        const counter = entry.target;
        const target = parseFloat(counter.dataset.target);

        let count = 0;

        const speed = target / 80;

        const update = () => {

            count += speed;

            if (count < target) {

                counter.innerHTML =
                    target % 1 !== 0
                    ? count.toFixed(1)
                    : Math.ceil(count);

                requestAnimationFrame(update);

            } else {

                counter.innerHTML =
                    target % 1 !== 0
                    ? target.toFixed(1)
                    : target;

            }

        };

        update();

        counterObserver.unobserve(counter);

    });

});

counters.forEach(counter => {

    counterObserver.observe(counter);

});


/*==========================================
        PROJECT FILTER
==========================================*/

const filterButtons = document.querySelectorAll(".filter-btn");

const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn => btn.classList.remove("active"));

        button.classList.add("active");

        const filter = button.dataset.filter;

        projectCards.forEach(card => {

            if (
                filter === "all" ||
                card.classList.contains(filter)
            ) {

                card.style.display = "block";

                setTimeout(() => {

                    card.style.opacity = "1";
                    card.style.transform = "scale(1)";

                },100);

            }

            else{

                card.style.opacity = "0";
                card.style.transform = "scale(.9)";

                setTimeout(() => {

                    card.style.display = "none";

                },300);

            }

        });

    });

});


/*==========================================
        MOBILE MENU
==========================================*/

const menuBtn = document.querySelector(".menu-btn");

const nav = document.querySelector(".nav-links");

menuBtn.addEventListener("click",()=>{

    nav.classList.toggle("show");

});


/*==========================================
        NAVBAR SCROLL EFFECT
==========================================*/

const header = document.querySelector(".header");

window.addEventListener("scroll",()=>{

    if(window.scrollY>80){

        header.style.background="rgba(5,8,22,.9)";

        header.style.boxShadow="0 8px 25px rgba(0,0,0,.3)";

    }

    else{

        header.style.background="rgba(8,10,25,.55)";

        header.style.boxShadow="none";

    }

});


/*==========================================
        BUTTON RIPPLE EFFECT
==========================================*/

const buttons = document.querySelectorAll(".btn");

buttons.forEach(button=>{

button.addEventListener("click",function(e){

const ripple=document.createElement("span");

const rect=this.getBoundingClientRect();

const size=Math.max(rect.width,rect.height);

ripple.style.width=size+"px";

ripple.style.height=size+"px";

ripple.style.left=e.clientX-rect.left-size/2+"px";

ripple.style.top=e.clientY-rect.top-size/2+"px";

ripple.classList.add("ripple");

this.appendChild(ripple);

setTimeout(()=>{

ripple.remove();

},600);

});

});


/*==========================================
        SCROLL TO TOP BUTTON
==========================================*/

const topButton=document.createElement("div");

topButton.className="scroll-top";

topButton.innerHTML='<i class="fas fa-arrow-up"></i>';

document.body.appendChild(topButton);

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

topButton.classList.add("show");

}

else{

topButton.classList.remove("show");

}

});

topButton.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});


/*==========================================
        MOUSE SPOTLIGHT
==========================================*/

const glow=document.createElement("div");

glow.className="mouse-glow";

document.body.appendChild(glow);

document.addEventListener("mousemove",(e)=>{

glow.style.left=e.clientX+"px";

glow.style.top=e.clientY+"px";

});


/*==========================================
        PARALLAX GLOW
==========================================*/

const glowItems=document.querySelectorAll(".background-glow");

window.addEventListener("mousemove",(e)=>{

const x=e.clientX/window.innerWidth;

const y=e.clientY/window.innerHeight;

glowItems.forEach((item,index)=>{

const speed=(index+1)*25;

item.style.transform=

`translate(${x*speed}px,${y*speed}px)`;

});

});


/*==========================================
        EMAIL JS — CHANGE 3: Activated
==========================================*/

emailjs.init("YOUR_PUBLIC_KEY"); /* Replace with your EmailJS public key */

(function(){

    const form = document.querySelector(".contact-form");
    if(!form) return;

    /* Add name attributes to form fields */
    const fields = form.querySelectorAll("input, textarea");
    const names = ["from_name","from_email","subject","message"];
    fields.forEach((f,i)=>{ if(names[i]) f.setAttribute("name", names[i]); });

    /* Toast helper */
    function showToast(msg, success){
        const toast = document.createElement("div");
        toast.textContent = msg;
        toast.style.cssText = `
            position:fixed;bottom:30px;right:30px;z-index:99999;
            padding:16px 28px;border-radius:14px;font-weight:600;
            font-size:15px;color:#fff;
            background:${success
                ? "linear-gradient(135deg,#22D3EE,#8B5CF6)"
                : "linear-gradient(135deg,#ef4444,#b91c1c)"};
            box-shadow:0 10px 30px rgba(0,0,0,.4);
            transition:opacity .4s;
        `;
        document.body.appendChild(toast);
        setTimeout(()=>{ toast.style.opacity="0"; }, 3200);
        setTimeout(()=>{ toast.remove(); }, 3700);
    }

    form.addEventListener("submit", function(e){
        e.preventDefault();

        /* Basic validation */
        const name  = form.querySelector("[name='from_name']").value.trim();
        const email = form.querySelector("[name='from_email']").value.trim();
        const msg   = form.querySelector("[name='message']").value.trim();

        if(!name || !email || !msg){
            showToast("Please fill in all required fields.", false);
            return;
        }
        if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
            showToast("Please enter a valid email address.", false);
            return;
        }

        const submitBtn = form.querySelector("button");
        submitBtn.disabled = true;
        submitBtn.textContent = "Sending...";

        emailjs.sendForm(
            "YOUR_SERVICE_ID",   /* Replace with your EmailJS Service ID */
            "YOUR_TEMPLATE_ID",  /* Replace with your EmailJS Template ID */
            this
        )
        .then(()=>{
            showToast("Message sent successfully! 🎉", true);
            form.reset();
        })
        .catch(()=>{
            showToast("Something went wrong. Please try again.", false);
        })
        .finally(()=>{
            submitBtn.disabled = false;
            submitBtn.textContent = "Send Message";
        });
    });

})();


/*==========================================
        CONSOLE MESSAGE
==========================================*/

console.log("%cWelcome Recruiter 👋","color:#22D3EE;font-size:22px;font-weight:bold;");

console.log("%cPortfolio developed by Vinaya V.","color:#8B5CF6;font-size:16px;");

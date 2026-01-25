// Mobile Menu
const menuBtn=document.querySelector(".menu-btn");
const navLinks=document.querySelector(".nav-links");
menuBtn.addEventListener("click",()=>{navLinks.classList.toggle("active")})

// Contact form
const contactForm=document.querySelector(".contact-form");
contactForm?.addEventListener("submit",e=>{
    e.preventDefault()
    const name=e.target[0].value
    const email=e.target[1].value
    const message=e.target[2].value
    let messages=JSON.parse(localStorage.getItem("messages"))||[]
    messages.push({name,email,message})
    localStorage.setItem("messages",JSON.stringify(messages))
    alert("Message sent successfully!")
    e.target.reset()
})
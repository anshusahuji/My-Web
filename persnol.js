/*=============== SHOW MENU ===============*/
const navMenu =document.getElementById('nav-menu');
const navToggle =document.getElementById('nav-toggle');
const navClose =document.getElementById('nav-close');

if(navToggle){
    navToggle.addEventListener('click',()=>{
        navMenu.classList.add('show-menu');
    });
}

if(navClose){
    navClose.addEventListener('click',()=>{
        navMenu.classList.remove('show-menu');
    });
}


/*=============== REMOVE MENU MOBILE ===============*/


const navLink =document.querySelectorAll('.nav__link');
 const linkction = ()=>{
    const navMenu =document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');


}
navLink.forEach(element => element.addEventListener('click', linkction));
    



/*=============== SHADOW HEADER ===============*/
const scrollHeader =() =>{
    const header = document.getElementById('header');
    this.scrollY >=50? header.classList.add('shadow-header'):header.classList.remove('shadow-header')
}
window.addEventListener('scroll', scrollHeader);


/*=============== EMAIL JS ===============*/

 const contactForm = document.getElementById('contact-form'),
      contactMessage= document.getElementById('contact-message')


 const sendEmail = (e) =>{
   e.preventDefault();
//   // serviceID - templateID - #form -publicKey
   emailjs.sendForm('service_3ys7mys','template_p4o6j45','#contact-form','6G2CiqU-aQ7YyZHEP')
   .then(() =>{
   contactMessage.textContent ='Message sent successfully ✅'
  // remove message after five secaund
    setTimeout(() =>{
        contactMessage.textContent =''
    },5000)
  // Clear input fields


   })
 }
 contactForm.addEventListener('submit',sendEmail)

// function sendMail(){
//     (function(){
//         emailjs.init("6G2CiqU-aQ7YyZHEP");
//     })();

//     var params ={
//         name: document.querySelector("#name").value,
//         email: document.querySelector("#email").value,
//         subject: document.querySelector("#subject").value,
//         message: document.querySelector("#Message").value,
     
//     };
//     var serviceID ="service_3ys7mys";
//     var templateID ="template_o1mtlh8";

//     emailjs.send(serviceID, templateID,params)
//     .then(res =>{
//         alert("success");
//     })
// }




/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp =()=>{
    const scrollUp =document.getElementById('scroll-up')
    this.scrollY >= 350 ?scrollUp.classList.add('show-scroll')
    :scrollUp.classList.remove('show-scroll');
}

window.addEventListener('scroll',scrollUp)



/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

const sections =document.getElementById('section[id]')
const scrollActive = () =>{
    const scrollDown =window.scrollY

    sections.forEach(current =>{
        const sectionHeight =current.offsetHeight,
            sectionTop = current.offsetTop =58,
            sectionId = current.getAttribute('id'),
            sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']');

            if(scrollDown >sectionTop && scrollDown <= sectionTop+sectionHeight){
                sectionsClass.classList.add('active-link')
            
            }else{
                sectionsClass.classList.remove('active-link')
            }
    })
}

/*=============== DARK LIGHT THEME ===============*/ 

//  const themeButton =document.getElementById('theme-button')

//  const darkTheme ='dark-theme'
//  const iconTheme = 'ri-sun-line'

// // // previously  selected topic (if user selected)

//  const selectedTheme = localStorage.getItem('selected-theme')
//  const selectedIcon = localStorage.getItem('selected-icon')

// //e obtain  the currenct  theme that the interface has by valedathing the dark  theme classes

//  const getcurrentTheme = () => document.body.classList.contains(darkTheme)? 'dark' : 'light';
//  const getcurrentIcon = () => themeButton.classList.contains(iconTheme)? 'ri-moon-line' :'ri-sun-line'


//  if(selectedTheme){
//      document.body.classList[selectedTheme === 'dark' ? 'add': 'remove'](darkTheme)
//     themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add': 'remove'](iconTheme)
//  }


//  themeButton.addEventListener('click', () =>{
//      document.body.classList.toggle(darkTheme)
//      themeButton.classList.toggle(iconTheme)


//      localStorage.setItem(selectedTheme, getcurrentTheme())
//     localStorage.setItem(selectedIcon, getcurrentIcon())
//  })

// const themeButtons =document.getElementById('theme-button');
// const body =document.querySelector('body');

// /*=============== SCROLL REVEAL ANIMATION ===============*/


// themeButtons.addEventListener('click', function(){
//     themeButtons.classList.toggle('ri-sun-line');

//     if(themeButtons,this.classList.toggle('ri-moon-line')){
//         body.style.background = 'white';
//         body.style.color ='black';
//         body.style.transition ='2s';
//     }else{
//         body.style.background = 'black';
//         body.style.color ='White';
//         body.style.transition ='2s';
//     }
       
    
// })
//! /*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin:'top',
   distance:'60px',
   duration:2000,
   delay:300,
//     // reset:true // Animation repeat 
})

sr.reveal(`.home__perfil ,.about__image, .contact__mail`, {origin:'right'})
sr.reveal(`.home__name, .home__info,
.about__container .section__title-1,.about__info`, {origin:'left'})
sr.reveal(`.home__perfil ,.about__image`, {origin:'right'})
sr.reveal(`.services__card ,.projects__card`, {interval:100})

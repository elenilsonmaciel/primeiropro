/*ABRE E FECHA O MENU AO CLICAR NO ICONE*/
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll("nav .toggle")
for(const element of toggle) {
    element.addEventListener('click', function() {
        nav.classList.toggle('show')
    }) 
}

/* QUANDO CLICAR EM UM ITEM DO MENU FECHAR O OUTRO */
const links = document.querySelectorAll('nav ul li a')
for(const link of links) {
    link.addEventListener('click', function(){
        nav.classList.remove('show')
    })
}

/* MUDAR O HEADER DA PÁGINA QUANDO DER UM SCROLL*/
const header = document.querySelector("#header")
const navheight = header.offsetHeight 
window.addEventListener('scroll', function(){
    if(window.scrollY >= navheight){
        /*SCROLL É MAIOR QUE A ALTURA DO HEADER*/
        header.classList.add('scroll')
    }else{
        /*MENOR QUE A ALTURA DO HEADER*/
        header.classList.remove('scroll')
    }
})

/* TESTIMONIALS CAROUSEL SLIDER SWIPER*/
const swiper = new Swiper('.swiper-container', {
slidesPerView: 1,
pagination: {
    el: '.swiper-pagination'
},
mousewheel: true,
keyboard: true,
breakpoints: {
    767: {
        slidesPerView: 2,
        setWrapperSize: true,
    }
    
}

})

/* SCROLLREVEAL: MOSTRAR ELEMENTOS QUANDO DER SCROLL NA PÁGINA */

const ScrollReveal = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,
    reset: true, 
})

scrollReveal.reveal(
    `#home .text, #home .image,
    #about .text, #about .image,
    #services header, #services .card,
    #testimonials header, #testimonials .testimonials,
    #contact .text, #contact .links
    footer .brand, footer .social
    `, {interval: 100 })

    /* BOTAO VOLTAR PARA O TOPO*/

 const backToTopButton = document.serySelector('.bacK-to-top')
 window.addEventListener('scroll', function(){
     if(window.scrolly >= 560){
         backToTopButton.classList.add('show')
     }   else {
         backToTopButton.classList.remove('show')
        }
     }

     /* MENU ATIVO CONFORME A SEÇÃO VISÍVEL NA PÁGINA */

     const sections = document.querySelectorAll('main section[id]')
     function activateMenuAtCurrentSection(){
         const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4
         for(const section of sections){
             const sectionTop = section.offsetTop
             const sectionHeight = section.offsetHeight
             const sectionId = section.getAttribute('id')
             const checkpointStart = checkpoint >=sectionTop
             const checkpointEnd = checkpoint <=sectionTop + sectionHeight
             if(checkpointStart && checkpointEnd) {
                 document
                 .querySelector('nav ul li a[href*=' +sectionId + ']')
                 .classList.add('active')

             } else {

                document
                .querySelector('nav ul li a[href*=' +sectionId + ']')
                .classList.remove('active')

             }
             
         }

          
     }

     /* WHEN SCROLL */
     window.addEventListener('scroll', function(){
         chanfeHeaderWhenScroll()
         backToTop()
        })
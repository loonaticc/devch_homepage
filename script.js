let pageMode = document.querySelector('navbar .btn-mode');
let mobNav = document.querySelector('.mobile-navbar');
let logo = document.querySelector('#logo');
let moon = document.querySelector('#moon')
let sun =  document.querySelector('#sun')
let hamIcon = document.querySelector('#ham-icon')

function darkmodeTransition(){
        document.body.classList.toggle('dark-mode');
        logo.classList.toggle('dark-img');
        moon.classList.toggle('on')
        sun.classList.toggle('on')
        logo.src = (logo.classList.contains('dark-img'))?
                   "alarado-icon-homepage-dark.svg":"alarado-icon-homepage.svg"
        
        if(moon.classList.contains('on')){
            moon.src = 'Moon_fill.svg'
        }
        else{
            moon.src = 'Moon_fill_light.svg'
        }
    
        sun.src = (sun.classList.contains('on'))? 'Sun_fill.svg':'sun_light.svg'
    
}

pageMode.addEventListener('click',darkmodeTransition)
document.querySelector('.mobile-navbar .btn-mode').addEventListener('click',darkmodeTransition)

hamIcon.addEventListener('click',()=>{
   mobNav.classList.add('show');
})

document.querySelector('.fa-xmark').addEventListener('click',()=>{
    
    mobNav.classList.remove('show');
 })
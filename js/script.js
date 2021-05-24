//******set date******//
const date = document.getElementById('date');
date.innerHTML = new Date().getFullYear();

//******nav toggle ******//
const navBtn = document.getElementById('nav-toggle');
const links = document.getElementById('nav-links');

// add event listener

navBtn.addEventListener("click",()=>{
    links.classList.toggle('show-links')
})

//******nav fixed ******//
const navBar = document.querySelector('.navbar');
window.addEventListener('scroll',()=>{
    if (window.pageYOffset > 62 ){
        navBar.classList.add('fixed');
    }
    else{
        navBar.classList.remove('fixed');
    }
})

//******smooth scroll ******//

const scrollLinks = document.querySelectorAll('.scroll-link');
scrollLinks.forEach(link=>{
    link.addEventListener("click",(e)=>{
        e.preventDefault();
        links.classList.remove('show-links')
        const id = e.target.getAttribute('href').slice(1);
        const el = document.getElementById(id);
        //console.log(el);
        // positon
        let position;
        if(navBar.classList.contains('fixed')){
            position = el.offsetTop - 62;
        }
        else{
            position = el.offsetTop - (62 * 2);
        }
        if(window.innerWidth<992){
            if(navBar.classList.contains('fixed')){
                position = el.offsetTop - 62;
            }
            else{
                position = el.offsetTop - (334 + 62);
            }
        }
        // window scrollTo
        window.scrollTo({
            left:0,
            top:position,
            behavior: "smooth" 
        });

    })
})
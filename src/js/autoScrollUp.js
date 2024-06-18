'use strict'
  
//прокрутка страницы 
  const arrowUp = document.querySelector(".arrow-up"); 
  window.addEventListener("scroll", ()=>{
    if (window.scrollY > 700) {
      arrowUp.classList.add("arrow-up__show");
    } else {
      arrowUp.classList.remove("arrow-up__show");
    }
  });   
  arrowUp.addEventListener('click', (e)=> {
    e.preventDefault();

    window.scrollTo(0, 0);
  });

  'use strict'

  const tabs = document.querySelectorAll('.offers__item');
  const tabsContent = document.querySelectorAll('.offer__description');
  const tabsParent = document.querySelector('.offers__list');
  const btnTabHide = document.querySelectorAll('.offers__arrow'); 
  hideTabContent();
  function hideTabContent() {
    tabsContent.forEach(item => {
      item.classList.remove('offer__description-active');    
    });
    tabs.forEach(item => {
      item.classList.remove('offers__item-active');
    });  
    hideBtnTabHide(btnTabHide, 'offers__arrow-hidden');  
  }
  function hideBtnTabHide() {
    btnTabHide.forEach(item => {
      item.classList.add('offers__arrow-hidden');    
    });
  } 
  function showTabContent(i = 0) {
    tabsContent[i].classList.add('offer__description-active');
    tabs[i].classList.add('offers__item-active');
    btnTabHide[i].classList.remove('offers__arrow-hidden'); 
  }    
  tabsParent.addEventListener('click', (e) => {
    e.preventDefault();
    const target = e.target;  

    if (target && target.classList.contains('offers__item')) {   
      tabs.forEach((item, i) => {        
        if (target === item) {
          hideTabContent();
          showTabContent(i);
        }
      });
    }
    const arrow = target.closest('.offers__arrow');
    if (target && arrow) {
      btnTabHide.forEach((item) => {
        if (arrow === item) {
          hideTabContent();
          hideBtnTabHide();
        }
      });
    }
  });
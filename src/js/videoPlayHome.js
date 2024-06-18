    'use strict'
    const videoPlayBtnHome = document.querySelector('.exposition__video-btn');
    const videoWrappHome = document.querySelector('.exposition__video-wrapp');
    videoPlayBtnHome.addEventListener('click', (e) => {
      e.preventDefault();
      videoWrappHome.innerHTML = `
      <iframe width="100%" height="100%" src="https://www.youtube.com/embed/mDWlTX-yM1A" 
      title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; 
      clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
      </iframe>
      `
    })
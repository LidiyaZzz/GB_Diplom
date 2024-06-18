    'use strict'

    const videoPlayBtnAbout = document.querySelector('.offersDescr__video-btn');
    const videoWrappAbout = document.querySelector('.offersDescr__video-wrapp');
    videoPlayBtnAbout.addEventListener('click', (e) => {
      e.preventDefault();
      videoWrappAbout.innerHTML = `
      <iframe width="100%" height="100%" src="https://www.youtube.com/embed/038r5j-EEOs?si=a8Q7s9llS-6Gh6w9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      `
    })
'use strict'

    // развертка статьи
    const articleItem = document.querySelectorAll('.articles__item');
    const articleTextParents = document.querySelectorAll('.article__content');
    const articlesList = document.querySelector('.articles__list');
    const articleFullTexts = document.querySelectorAll('.article__text');
    const articleBtnNext = document.querySelector('.article__btn-next');
    const articleBtnToList = document.querySelector('.article__btn-toList');
    const article = document.querySelector('.article');  
    hideActive();
    showActive();
    createDivForCutText();
    changeFullText();
    function hideActive() {
      articleItem.forEach(item => {
        item.classList.remove('articles__item-active');    
      });
      articleTextParents.forEach(item => {
        item.classList.remove('article__content-active');
      });
      article.classList.remove('article-expand');
      articlesList.classList.remove('articles__list-hidden');
    }
    function showActive(i = 0) {
      articleItem[i].classList.add('articles__item-active');
      articleTextParents[i].classList.add('article__content-active');
    }
    function cutText(textString) {
      let text = textString.replace(/\s+/g, ' ').trim();
      if (text.length > 260) {
        return `${text.slice(0, 260)}...`;
      } else {
        return text;
      }    
    }
    function createDivForCutText() {
      articleTextParents.forEach((parent, i) => {
        let newParagraph = document.createElement('p');
        newParagraph.classList.add('article__text-cut');
        parent.append(newParagraph);
        newParagraph.textContent = cutText(articleFullTexts[i].textContent);
      });    
    }
    function changeFullText() {
      articleFullTexts.forEach(fullText => {
        fullText.style.display = 'none';
      });
    }  
    articlesList.addEventListener('click', (e) => {
      e.preventDefault();  
      const target = e.target;  
      const listItem = target.closest('.articles__item');  
      if (target && listItem) {
        articleItem.forEach((item, i) => {        
          if (listItem === item) {
            hideActive(articleItem, 'articles__item-active', articleTextParents, 'article__content-active');
            showActive(i, articleItem, 'articles__item-active', articleTextParents, 'article__content-active');
          }
        });
      }
    });
    articleBtnNext.addEventListener('click', (e) => {
      e.preventDefault();
      articleTextParents.forEach((parentText, i) => {
        if (parentText.classList.contains('article__content-active')) {
              articleFullTexts[i].style.display = 'block';
              parentText.querySelector('.article__text-cut').style.display = 'none';
              article.classList.add('article-expand');
              articlesList.classList.add('articles__list-hidden');
              articleBtnNext.classList.add('article__btn-hidden');
              articleBtnToList.classList.remove('article__btn-hidden');
        }
      });
    })
    articleBtnToList.addEventListener('click', (e) => {
      e.preventDefault();  
      articleTextParents.forEach((parentText, i) => {
        if (parentText.classList.contains('article__content-active')) {          
          if (article.classList.contains('article-expand') && articlesList.classList.contains('articles__list-hidden')) {
              articleFullTexts[i].style.display = 'none';
              parentText.querySelector('.article__text-cut').style.display = 'block';
              article.classList.remove('article-expand');
              articlesList.classList.remove('articles__list-hidden');
              articleBtnNext.classList.remove('article__btn-hidden');
              articleBtnToList.classList.add('article__btn-hidden');
          }
        }
      });      
    });


    
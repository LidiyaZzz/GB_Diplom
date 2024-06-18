const offersList = document.querySelector('.articlesList__list');
const offersContent = document.querySelectorAll('.articlesList__content');// Получаем блоки описания услуг

// Установка по умолчанию
offersList.querySelector(`li[data-articlesSelect="Все"]`).classList.add('list-select-active');
offersContent.forEach((content) => {
    console.log(content.dataset);
    content.classList.remove('articlesList__content--unvisible');    
});

// Обработчик события клика
offersList.addEventListener('click', (event) => {
    if (event.target.tagName === 'LI') {        
        offersList.querySelector('.list-select-active').classList.remove('list-select-active');// Удаление класса у предыдущего пункта списка        
        event.target.classList.add('list-select-active');// Добавление класса к нажатому пункту списка
        if (event.target.dataset.articlesselect === 'Все') {
            offersContent.forEach((content) => {content.classList.remove('articlesList__content--unvisible')});
        } else {
            offersContent.forEach((content) => {
                if (content.dataset.articlesselect === event.target.dataset.articlesselect) {
                    content.classList.add('articlesList__content--visible');
                    content.classList.remove('articlesList__content--unvisible');
                } else {
                    content.classList.remove('articlesList__content--visible');
                    content.classList.add('articlesList__content--unvisible');
                }
            });
        }
    }
});
const offersList = document.querySelector('.offersDescr__list');
const offersContent = document.querySelectorAll('.offersDescr__content');// Получаем блоки описания услуг

// Установка по умолчанию
offersList.querySelector(`li[data-offersSelect="Суставная"]`).classList.add('list-select-active');
offersContent.forEach((content) => {
    console.log(content.dataset);
    if (content.dataset.offersselect === 'Суставная') {
        content.classList.remove('offersDescr__content--unvisible');
       
    } else {
        content.classList.add('offersDescr__content--unvisible');
    }
});

// Обработчик события клика
offersList.addEventListener('click', (event) => {
    if (event.target.tagName === 'LI') {        
        offersList.querySelector('.list-select-active').classList.remove('list-select-active');// Удаление класса у предыдущего пункта списка        
        event.target.classList.add('list-select-active');// Добавление класса к нажатому пункту списка

        // Установка классов для блоков описания услуг
        offersContent.forEach((content) => {
            if (content.dataset.offersselect === event.target.dataset.offersselect) {
                content.classList.add('offersDescr__content--visible');
                content.classList.remove('offersDescr__content--unvisible');
            } else {
                content.classList.remove('offersDescr__content--visible');
                content.classList.add('offersDescr__content--unvisible');
            }
        });
    }
});
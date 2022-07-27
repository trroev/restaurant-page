const createMain = () => {
    const main = document.createElement('div');
    main.classList.add('main');

    const scallopDish = document.createElement('img');
    scallopDish.src = './images/scallop.png';
    scallopDish.alt = 'scallop dish';

    main.appendChild(scallopDish);
    return main;
};

const renderHomePage = () => {
    const main = document.querySelector('.main');
    main.textContent = '';
    main.appendChild(createMain());
};

export default renderHomePage
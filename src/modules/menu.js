const createMenu = () => {
    const menu = document.createElement('div');
    menu.classList.add('menu');
    menu.textContent = 'Eggplant';
    
    return menu;
}

const renderMenuPage = () => {
    const main = document.querySelector('.main');
    main.textContent = '';
    main.appendChild(createMenu());
};

export default renderMenuPage
const createMenu = () => {
    const menu = document.createElement('div');
    menu.classList.add('menu');

    const menuDescription = document.createElement('h3');
    menuDescription.textContent = ('Chef\'s tasting: $195/person');

    const crabSalad = document.createElement('img');
    crabSalad.src = '../dist/images/crab-salad.jpeg';
    crabSalad.alt = 'crab salad';
    const crabDescription = document.createElement('p');
    crabDescription.textContent = ('Crab, Nasturtium, Soft Herbs');

    const quail = document.createElement('img');
    quail.src = '../dist/images/lamb.jpeg';
    quail.alt = 'quail and carrot';
    const quailDescription = document.createElement('p');
    quailDescription.textContent = ('Quail, Celeriac, Carrot, Sorrel');

    const iceCream = document.createElement('img');
    iceCream.src = '../dist/images/ice-cream.jpeg';
    iceCream.alt = 'ice cream';
    const iceCreamDescription = document.createElement('p');
    iceCreamDescription.textContent = ('Vanilla, Raspberry, Date, Pea Shoots');
    
    menu.appendChild(menuDescription);
    menu.appendChild(crabSalad);
    menu.appendChild(crabDescription);
    menu.appendChild(quail);
    menu.appendChild(quailDescription);
    menu.appendChild(iceCream);
    menu.appendChild(iceCreamDescription);
    return menu;
}

const renderMenuPage = () => {
    const main = document.querySelector('.main');
    main.textContent = '';
    main.appendChild(createMenu());
};

export default renderMenuPage
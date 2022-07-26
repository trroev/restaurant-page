const createHeader = () => {
    const header = document.createElement('div');
    header.classList.add('header');
    header.textContent = 'Eggplant';

    return header;
};

const createNav = () => {
    const nav = document.createElement('nav');
    nav.classList.add('nav');
    
    const homeButton = document.createElement('button');
    homeButton.classList.add('nav-button');
    homeButton.textContent = 'Home';
    const menuButton = document.createElement('button');
    menuButton.classList.add('nav-button');
    menuButton.textContent = 'Menu';
    const aboutButton = document.createElement('button');
    aboutButton.classList.add('nav-button');
    aboutButton.textContent = 'About';

    nav.appendChild(homeButton);
    nav.appendChild(menuButton);
    nav.appendChild(aboutButton);

    return nav;
}

const createMain = () => {
    const main = document.createElement('div');
    main.classList.add('main');

    const scallopDish = document.createElement('img');
    scallopDish.src = '../dist/images/scallop.png';

    main.appendChild(scallopDish);
    return main;
}

const createFooter = () => {
    const footer = document.createElement('div');
    footer.classList.add('footer');

    const copyright = document.createElement('p');
    copyright.innerHTML = '© 2022 <a href="https://github.com/trroev">trroev</a>'

    footer.appendChild(copyright)

    return footer;
}

const renderHomePage = (() => {
    const content = document.querySelector('#content');
    
    const header = createHeader();
    content.appendChild(header)

    const nav = createNav();
    content.appendChild(nav)

    const main = createMain();
    content.appendChild(main);

    const footer = createFooter();
    content.appendChild(footer);


    content.appendChild(header);
    header.appendChild(nav);
    content.appendChild(main);
    content.appendChild(footer);
})();

export { renderHomePage };
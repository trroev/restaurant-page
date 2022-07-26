// const createHeader = () => {
//     const header = document.createElement('div');
//     header.classList.add('header');
//     header.textContent = 'Eggplant';

//     return header;
// };

// const createNav = () => {
//     const nav = document.createElement('nav');
//     nav.classList.add('nav');
    
//     const homeButton = document.createElement('button');
//     homeButton.classList.add('nav-button');
//     homeButton.textContent = 'Home';
//     homeButton.addEventListener('click', (e) => {
//         if (e.target.classList.contains('active')) return;
//         setActiveButton(homeButton);
//         renderHomePage();
//     });

//     const menuButton = document.createElement('button');
//     menuButton.classList.add('nav-button');
//     menuButton.textContent = 'Menu';
//     menuButton.addEventListener('click', (e) => {
//         if (e.target.classList.contains('active')) return;
//         setActiveButton(menuButton);
//         renderMenuPage();
//     });

//     const aboutButton = document.createElement('button');
//     aboutButton.classList.add('nav-button');
//     aboutButton.textContent = 'About';
//     aboutButton.addEventListener('click', (e) => {
//         if (e.target.classList.contains('active')) return;
//         setActiveButton(aboutButton);
//         renderAboutPage();
//     });

//     nav.appendChild(homeButton);
//     nav.appendChild(menuButton);
//     nav.appendChild(aboutButton);

//     return nav;
// };

// const setActiveButton = (button) => {
//     const buttons = document.querySelectorAll('.button-nav');

//     buttons.forEach((button) => {
//         if (button !== this) {
//             button.classList.remove('active');
//         }
//     });
//     button.classList.add('active');
// };

const createMain = () => {
    const main = document.createElement('div');
    main.classList.add('main');

    const scallopDish = document.createElement('img');
    scallopDish.src = '../dist/images/scallop.png';
    scallopDish.alt = 'scallop dish';

    main.appendChild(scallopDish);
    return main;
};

// const createFooter = () => {
//     const footer = document.createElement('div');
//     footer.classList.add('footer');

//     const copyright = document.createElement('p');
//     copyright.innerHTML = '© 2022 <a href="https://github.com/trroev">trroev</a>'

//     footer.appendChild(copyright)

//     return footer;
// };

const renderHomePage = () => {
    const main = document.querySelector('.main');
    main.textContent = '';
    main.appendChild(createMain());
    // const content = document.querySelector('#content');
    
    // const header = createHeader();
    // content.appendChild(header)

    // const nav = createNav();
    // header.appendChild(nav)

    // const main = createMain();
    // content.appendChild(main);

    // const footer = createFooter();
    // content.appendChild(footer);
};

export default renderHomePage
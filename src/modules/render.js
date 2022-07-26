import renderHomePage from "./home";
import renderMenuPage from "./menu";
import renderAboutPage from "./about";

const createHeader = () => {
    const header = document.createElement('div');
    header.classList.add('header');
    header.textContent = 'Eggplant';
    header.appendChild(createNav());

    return header;
};

const createNav = () => {
    const nav = document.createElement('nav');
    nav.classList.add('nav');
    
    const homeButton = document.createElement('button');
    homeButton.classList.add('nav-button');
    homeButton.textContent = 'Home';
    // homeButton.addEventListener('click', (e) => {
    //     if (e.target.classList.contains('active')) return;
    //     setActiveButton(homeButton);
    //     renderHomePage();
    // });

    const menuButton = document.createElement('button');
    menuButton.classList.add('nav-button');
    menuButton.textContent = 'Menu';
    // menuButton.addEventListener('click', (e) => {
    //     if (e.target.classList.contains('active')) return;
    //     setActiveButton(menuButton);
    //     renderMenuPage();
    // });

    const aboutButton = document.createElement('button');
    aboutButton.classList.add('nav-button');
    aboutButton.textContent = 'About';
    // aboutButton.addEventListener('click', (e) => {
    //     if (e.target.classList.contains('active')) return;
    //     setActiveButton(aboutButton);
    //     renderAboutPage();
    // });

    nav.appendChild(homeButton);
    nav.appendChild(menuButton);
    nav.appendChild(aboutButton);

    return nav;
};

// function setActiveButton(button) {
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

    return main;
};

const createFooter = () => {
    const footer = document.createElement('div');
    footer.classList.add('footer');

    const copyright = document.createElement('p');
    copyright.innerHTML = '© 2022 <a href="https://github.com/trroev">trroev</a>'

    footer.appendChild(copyright)

    return footer;
};

const renderPage = () => {
    const content = document.querySelector('#content');
    
    const header = createHeader();
    content.appendChild(header)

    const main = createMain();
    content.appendChild(main);

    const footer = createFooter();
    content.appendChild(footer);

    // setActiveButton(document.querySelector('.button-nav'));
    renderHomePage();
};

export default renderPage
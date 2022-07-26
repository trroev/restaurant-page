const aboutPage = () => {
    // const main = document.querySelector('.main');
    const contact = document.createElement('div');
    contact.classList.add('contact');

    const phoneNumber = document.createElement('p');
    phoneNumber.textContent = '📞 666.666.6666';

    const address = document.createElement('p');
    address.textContent = '123 main st'

    const location = document.createElement('img');
    location.src = '../dist/images/location.png';
    location.alt = 'Eggplant restuarant location';

    contact.appendChild(phoneNumber);
    contact.appendChild(address);
    contact.appendChild(location);
    return contact;
};

const renderAboutPage = () => {
    const main = document.querySelector('.main');
    main.textContent = '';
    main.appendChild(aboutPage());
};

export default renderAboutPage
const aboutPage = () => {
    const contact = document.createElement('div');
    contact.classList.add('contact');

    const phoneNumber = document.createElement('p');
    phoneNumber.textContent = 'Reservations: 333.666.9999';

    const address = document.createElement('p');
    address.textContent = '123 Main St'

    const location = document.createElement('img');
    location.classList.add('map');
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
function contactInfo() {
    const mainArea = document.querySelector('.mainArea');

    while (mainArea.firstChild) {
        mainArea.removeChild(mainArea.firstChild)
    }

    const headingPlace = document.createElement('div');
    headingPlace.classList.add('headingText');
    headingPlace.textContent = 'Contact Us';
    mainArea.appendChild(headingPlace);

    const contact = document.createElement('div');
    contact.classList.add('contact');
    const contactName = document.createElement('div');
    contactName.classList.add('contactName');
    contactName.textContent = 'Our restaurant can be found:';
    const contactPlace = document.createElement('div');
    contactPlace.classList.add('contactPlace');
    contactPlace.textContent = 'Go outside and go to street Street until you find to be tired. Then we find you. Additionally you can call 911 or something';
    contact.appendChild(contactName);
    contact.appendChild(contactPlace);

    mainArea.appendChild(contact)
}

export {
    contactInfo,
}
function menuBar() {
    const mainDiv = document.getElementById('content');

    const nav = document.createElement('div');
    nav.classList.add('navBar');

    const homeBtn = document.createElement('div');
    homeBtn.classList.add('navBtn');
    homeBtn.setAttribute('id', 'home');
    homeBtn.textContent = 'Home';
    nav.appendChild(homeBtn);

    const menuBtn = document.createElement('div');
    menuBtn.classList.add('navBtn');
    menuBtn.setAttribute('id', 'menu');
    menuBtn.textContent = 'Menu';
    nav.appendChild(menuBtn);

    const contactBtn = document.createElement('div');
    contactBtn.classList.add('navBtn');
    contactBtn.setAttribute('id', 'contact');
    contactBtn.textContent = 'Contact Us';
    nav.appendChild(contactBtn);

    mainDiv.appendChild(nav);
}

export {
    menuBar,
}
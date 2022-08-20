function mainPage() {
    const mainDiv = document.getElementById('content');

    const mainArea = document.createElement('div');
    mainArea.classList.add('mainArea');

    const headingPlace = document.createElement('div');
    headingPlace.classList.add('headingText');
    headingPlace.textContent = 'The Robotic Restaurant';
    mainArea.appendChild(headingPlace);

    mainDiv.appendChild(mainArea);
}

export {
    mainPage,
};
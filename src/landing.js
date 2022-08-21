function mainPage() {
    const mainDiv = document.getElementById('content');
    const checker = document.querySelector('.mainArea')
    if (checker) {
        document.getElementById('content').removeChild(checker)
    }
    const mainArea = document.createElement('div');
    mainArea.classList.add('mainArea');


    const headingPlace = document.createElement('div');
    headingPlace.classList.add('headingText');
    headingPlace.textContent = 'The Robotic Restaurant';
    mainArea.appendChild(headingPlace);

    const infoDiv = document.createElement('div')
    infoDiv.classList.add('infoDiv');
    infoDiv.textContent = "This is the most amazing experience ever! We have lot's of text for place holder, but We don't want to use it all here. If you interested, check other places! Lorem ipsum of sorts?"
    mainArea.appendChild(infoDiv);

    const hoursDiv = document.createElement('div');
    hoursDiv.classList.add('hoursDiv');
    const hoursText = document.createElement('div');
    hoursText.textContent = 'Work hours'
    hoursDiv.appendChild(hoursText);
    const hoursSunday = document.createElement('div');
    hoursSunday.classList.add('hours');
    hoursSunday.textContent = 'Sunday: 1pm - 11pm'
    hoursDiv.appendChild(hoursSunday);
    const hoursMonday = document.createElement('div');
    hoursMonday.classList.add('hours');
    hoursMonday.textContent = 'Monday: 10am - 10pm';
    hoursDiv.appendChild(hoursMonday);
    const hoursTuesday = document.createElement('div');
    hoursTuesday.classList.add('hours');
    hoursTuesday.textContent = 'Tuesday: 10am - 10pm';
    hoursDiv.appendChild(hoursTuesday);
    const hoursWednesday = document.createElement('div');
    hoursWednesday.classList.add('hours');
    hoursWednesday.textContent = 'Wednesday: 10am - 10pm';
    hoursDiv.appendChild(hoursWednesday);
    const hoursThursday = document.createElement('div');
    hoursThursday.classList.add('hours');
    hoursThursday.textContent = 'Thursday: 10am - 10pm';
    hoursDiv.appendChild(hoursThursday);
    const hoursFriday = document.createElement('div');
    hoursFriday.classList.add('hours');
    hoursFriday.textContent = 'Friday: 10am - 10pm';
    hoursDiv.appendChild(hoursFriday);
    const hoursSaturday = document.createElement('div');
    hoursSaturday.classList.add('hours');
    hoursSaturday.textContent = 'Saturday: 10am - 10pm';
    hoursDiv.appendChild(hoursSaturday);

    const locationDiv = document.createElement('div');
    locationDiv.classList.add('locationDiv')
    const locationText = document.createElement('div');
    locationText.classList.add('locationText');
    locationText.textContent = 'Location:';
    locationDiv.appendChild(locationText);
    const locationLocation = document.createElement('div');
    locationLocation.classList.add('locationLocation');
    locationLocation.textContent = '123 Street st., City city, Country';
    locationDiv.appendChild(locationLocation);

    mainArea.appendChild(hoursDiv);
    mainArea.appendChild(locationDiv);
    mainDiv.appendChild(mainArea);
}

export {
    mainPage,
};
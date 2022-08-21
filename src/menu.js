import { mainPage } from "./landing";

function foodPage() {
    const mainArea = document.querySelector('.mainArea');

    while (mainArea.firstChild) {
        mainArea.removeChild(mainArea.firstChild)
    }

    const headingPlace = document.createElement('div');
    headingPlace.classList.add('headingText');
    headingPlace.textContent = 'Menu';
    mainArea.appendChild(headingPlace);

    const menuBeverages = document.createElement('div');
    menuBeverages.classList.add('menuChoice');
    menuBeverages.textContent = 'Beverages'
    mainArea.appendChild(menuBeverages);

    const drinkChoice1 = document.createElement('div');
    drinkChoice1.classList.add('choice');
    const drinkChoice1Name = document.createElement('div');
    drinkChoice1Name.classList.add('choiceName');
    drinkChoice1Name.textContent = 'not a BEER';
    const drinkChoice1Text = document.createElement('div');
    drinkChoice1Text.classList.add('choiceText');
    drinkChoice1Text.textContent = 'Some words about the drink that is not a beer';
    const drinkChoice1Price = document.createElement('div');
    drinkChoice1Price.classList.add('choicePrice');
    drinkChoice1Price.textContent = '3.5 eur';
    drinkChoice1.appendChild(drinkChoice1Name);
    drinkChoice1.appendChild(drinkChoice1Text);
    drinkChoice1.appendChild(drinkChoice1Price);

    const drinkChoice2 = document.createElement('div');
    drinkChoice2.classList.add('choice');
    const drinkChoice2Name = document.createElement('div');
    drinkChoice2Name.classList.add('choiceName');
    drinkChoice2Name.textContent = 'popular brand soda';
    const drinkChoice2Text = document.createElement('div');
    drinkChoice2Text.classList.add('choiceText');
    drinkChoice2Text.textContent = 'Pepsi or Coke? Beer is much cheaper tough!';
    const drinkChoice2Price = document.createElement('div');
    drinkChoice2Price.classList.add('choicePrice');
    drinkChoice2Price.textContent = '5.5 eur';
    drinkChoice2.appendChild(drinkChoice2Name);
    drinkChoice2.appendChild(drinkChoice2Text);
    drinkChoice2.appendChild(drinkChoice2Price);

    const menuFood = document.createElement('div');
    menuFood.classList.add('menuChoice');
    menuFood.textContent = 'Dishes';

    const foodChoice1 = document.createElement('div');
    foodChoice1.classList.add('choice');
    const foodChoice1Name = document.createElement('div');
    foodChoice1Name.classList.add('choiceName');
    foodChoice1Name.textContent = 'Ham and Cheese';
    const foodChoice1Text = document.createElement('div');
    foodChoice1Text.classList.add('choiceText');
    foodChoice1Text.textContent = 'Ham and cheese on your cheap paper plate. We ran out of bread';
    const foodChoice1TPrice = document.createElement('div');
    foodChoice1TPrice.classList.add('choicePrice');
    foodChoice1TPrice.textContent = '9.5 eur';
    foodChoice1.appendChild(foodChoice1Name);
    foodChoice1.appendChild(foodChoice1Text);
    foodChoice1.appendChild(foodChoice1TPrice);

    const foodChoice2 = document.createElement('div');
    foodChoice2.classList.add('choice');
    const foodChoice2Name = document.createElement('div');
    foodChoice2Name.classList.add('choiceName');
    foodChoice2Name.textContent = 'Sausage on a stick';
    const foodChoice2Text = document.createElement('div');
    foodChoice2Text.classList.add('choiceText');
    foodChoice2Text.textContent = 'It looks much worse than it sounds! Deal with it and then pay for it';
    const foodChoice2TPrice = document.createElement('div');
    foodChoice2TPrice.classList.add('choicePrice');
    foodChoice1TPrice.textContent = '9.5 eur';
    foodChoice2.appendChild(foodChoice2Name);
    foodChoice2.appendChild(foodChoice2Text);
    foodChoice2.appendChild(foodChoice2TPrice);

    mainArea.appendChild(drinkChoice1);
    mainArea.appendChild(drinkChoice2);
    mainArea.appendChild(menuFood);
    mainArea.appendChild(foodChoice1);
    mainArea.appendChild(foodChoice2);
}

export { foodPage }
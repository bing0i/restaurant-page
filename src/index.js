import {getIntroTabContents} from './getIntroTabContents.js';
import {getContactTabContents} from './getContactTabContents';
import {getMenuTabContents} from './getMenuTabContents';

let divContent = document.getElementById('content');

const switchTab = () => {    
    let img = document.createElement('img');
    img.src = './restaurant.jpeg';
    img.alt = 'Source: https://unsplash.com/s/photos/restaurant';

    let divTabButtons = document.createElement('div');
    divTabButtons.id = 'divTabButtons';

    let contactTab = getTab('Contact', getContactTabContents);
    let menuTab = getTab('Menu', getMenuTabContents);
    let introTab = getTab('Introduction', getIntroTabContents)

    divTabButtons.appendChild(img);
    divTabButtons.appendChild(introTab);
    divTabButtons.appendChild(contactTab);
    divTabButtons.appendChild(menuTab);

    divContent.appendChild(divTabButtons);

    introTab.click();
}

const getTab = (text, getContexts) => {
    let tab = document.createElement('button');
    tab.className = 'tabButton';
    tab.textContent = text;
    tab.addEventListener('click', () => {
        removeTabContents();
        removeTabEffects();
        tab.style.borderBottom = '2px solid red';
        tab.style.color = 'red';
        divContent.appendChild(getContexts());
    });
    return tab;
}

const removeTabContents = () => {
    if (divContent.lastChild.id === 'divTabContents')
        divContent.removeChild(divContent.lastChild);
}

const removeTabEffects = () => {
    const tabs = Array.from(document.querySelectorAll('.tabButton'));
    for (let i = 0; i < tabs.length; ++i) {
        tabs[i].style.borderStyle = 'none';
        tabs[i].style.color = '#a6a9ae';
    }

}

// divContent.appendChild(initPage());
switchTab();
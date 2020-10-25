import {initPage} from './initPage.js';
import {getContactTabContents} from './getContactTabContents';
import {getMenuTabContents} from './getMenuTabContents';

let divContent = document.getElementById('content');

const switchTab = () => {
    let contactTab = getTab('Contact', getContactTabContents);
    let menuTab = getTab('Menu', getMenuTabContents);

    divContent.appendChild(contactTab);
    divContent.appendChild(menuTab);
}

const getTab = (text, getContext) => {
    let tab = document.createElement('button');
    tab.className = 'tabButton';
    tab.textContent = text;
    tab.addEventListener('click', () => {
        removeTab();
        divContent.appendChild(getContext());
    });
    return tab;
}

const removeTab = () => {
    if (divContent.lastChild.nodeName === 'DIV')
        divContent.removeChild(divContent.lastChild);
}

initPage('content');
switchTab();
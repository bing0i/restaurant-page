const getContactTabContents = () => {
    let divTab = document.createElement('div');

    let p = document.createElement('p');
    p.textContent = '+65352356523reeeeeeeeeeeeeeee';

    divTab.appendChild(p);
    
    return divTab;
}

export {getContactTabContents}
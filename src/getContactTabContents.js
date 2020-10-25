const getContactTabContents = () => {
    let divTabContents = document.createElement('div');
    divTabContents.id = 'divTabContents';

    let p1 = document.createElement('p');
    p1.textContent = 'Address: 000 Aaaaa Rd, Aaaaaaaa, Aaaa, 00000';
    let p2 = document.createElement('p');
    p2.textContent = 'Tel: +1 (000) 000 000';

    divTabContents.appendChild(p1);
    divTabContents.appendChild(p2);
    
    return divTabContents;
}

export {getContactTabContents}
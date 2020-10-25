const getMenuTabContents = () => {
    let divTabContents = document.createElement('div');
    divTabContents.id = 'divTabContents';

    for (let i = 1; i <= 5; ++i) {
        let p1 = document.createElement('p');
        p1.textContent = 'Item ' + i + ' - $0.00';

        let p2 = document.createElement('p');
        p2.textContent = 'Aaa aaaa aa aaaaaaaa aa a aaaaaaaaa aa';
        p2.style.fontStyle = 'italic';
        p2.style.color = '#a6a9ae';
        p2.style.fontSize = '18px';
        p2.style.marginBottom = '20px';
        
        divTabContents.appendChild(p1);
        divTabContents.appendChild(p2);
    }

    return divTabContents;
}

export {getMenuTabContents}
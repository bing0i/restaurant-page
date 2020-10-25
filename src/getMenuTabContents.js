const getMenuTabContents = () => {
    let divTab = document.createElement('div');

    for (let i = 1; i <= 5; ++i) {
        let p = document.createElement('p');
        p.textContent = 'Item ' + i;
        divTab.appendChild(p);
    }

    return divTab;
}

export {getMenuTabContents}
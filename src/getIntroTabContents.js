const getIntroTabContents = () => {
    let divTabContents = document.createElement('div');
    divTabContents.id = 'divTabContents';

    let a = document.createElement('a');
    a.href = 'https://en.wikipedia.org/wiki/Restaurant';
    a.textContent = 'Wikipedia.';
    a.target = '_blank';

    let p = document.createElement('p');
    p.textContent = `A restaurant, or an eatery, is a business that prepares and serves food and drinks to customers. 
    Meals are generally served and eaten on the premises, but many restaurants also offer take-out 
    and food delivery services. Restaurants vary greatly in appearance and offerings, including 
    a wide variety of cuisines and service models ranging from inexpensive fast food restaurants 
    and cafeterias, to mid-priced family restaurants, to high-priced luxury establishments. Source: `;
    p.appendChild(a);
    
    divTabContents.appendChild(p);
    
    return divTabContents;
}

export {getIntroTabContents}
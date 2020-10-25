const initPage = id => {
    let divContent = document.getElementById(id);

    let h1 = document.createElement('h1');
    h1.textContent = 'Restaurant';

    let img = document.createElement('img');
    img.src = '../images/restaurant.jpeg';
    img.alt = 'Restaurant (source: Google)';

    let p = document.createElement('p');
    p.textContent = `A restaurant, or an eatery, is a business that prepares and serves food and drinks to customers. 
        Meals are generally served and eaten on the premises, but many restaurants also offer take-out 
        and food delivery services. Restaurants vary greatly in appearance and offerings, including 
        a wide variety of cuisines and service models ranging from inexpensive fast food restaurants 
        and cafeterias, to mid-priced family restaurants, to high-priced luxury establishments. `;

    let a = document.createElement('a');
    a.href = 'https://en.wikipedia.org/wiki/Restaurant';
    a.textContent = 'Wikipedia';
    p.appendChild(a);
    
    divContent.appendChild(h1);
    divContent.appendChild(img);
    divContent.appendChild(p);
}

export {initPage}
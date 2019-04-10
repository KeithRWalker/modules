import util from '../helpers/util.js' ;
let cart = [];

const getCart = () => {
    return cart;
};

const setCart = (book) => {
    cart.push(book);
};

const buyEvent = (e) => {
    e.preventDefault();
    const myCart = cart;
    // //////////////////////////a = 0/b = object/current thing of array
    const total = myCart.reduce((a, b) => {return a + b.price}, 0);
    /////////////////////////// So when called this adds the price to a(0), and returns a.
    
    window.alert(`You Owe ${total.toFixed(2)}`);
};

const cartToDom = () => {
    const myCart = getCart();
    let domString = `<div class="row">`;
    domString += `<h2>Cart:</h2>`;
    domString += `</div><div class="row d-flex flex-wrap">`;
    myCart.forEach((book) => {
      domString += `<div class="card col-2">`;
      domString += `  <img src=${book.image} class="card-img-top" alt="...">`;
      domString += `  <div class="card-body">`;
      domString += `    <h5 class="card-title">${book.title}</h5>`;
      domString += `    <p class="card-text">${book.price}</p>`;
      domString += `    <button id="purchase-btn" class="btn btn-secondary">Purchase</button>`
      domString += `  </div>`;
      domString += `</div>`;
    });
    domString += `</div>`;
    util.printToDom('cart-container', domString);
    document.getElementById('purchase-btn').addEventListener('click', buyEvent);
};

export default { setCart, cartToDom };
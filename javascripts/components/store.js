//////bookImport provides getBook() which gives us the bookInfo object (title, image, price)///////////// 
import bookImport from  '../helpers/book.js';

// imports the cart array from cart.js
import cart from './cart.js'

///////util provides the printToDom()/////////
import util from '../helpers/util.js';

const makeStore = () => {
    const getBook = bookImport.getBook();
    let domString = `   <div class="col card">
                        <h6>Book Title:${getBook.title}</h6>
                        <img src="${getBook.image}">
                        <p>${getBook.price}</p>
                        <button class="btn btn-danger" id="cartBtn">Add To Cart</button>
                        </div>  
                    `;
    util.printToDom('storeCon', domString);
    document.getElementById('cartBtn').addEventListener('click', addToCartEvent);
};

const addToCartEvent = (e) => {
    e.preventDefault();
    const getBook = bookImport.getBook();
    cart.setCart(getBook);
    cart.cartToDom();
};

export default { makeStore };
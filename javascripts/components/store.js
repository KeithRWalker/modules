///////util provides the printToDom()/////////
import util from '../helpers/util.js';
//////bookImport provides getBook() which gives us the bookInfo object (title, image, price)///////////// 
import bookImport from  '../helpers/book.js';

const makeStore = () => {
    const getBook = bookImport.getBook();
    let domString = `   
                        <h6>Book Title:${getBook.title}</h6>
                        <img src="${getBook.image}">
                        <p>${getBook.price}</p>
                        <button class="btn btn-danger" id="cartBtn">Add To Cart</button>   
                    `;
    util.printToDom('storeCon', domString);
    document.getElementById('cartBtn').addEventListener('click', addToCartEvent);
};

const addToCartEvent = (e) => {
    e.preventDefault();
    const getBook = bookImport.getBook();
    console.log(getBook);   
}

export default { makeStore };
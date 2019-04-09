///////util provides the printToDom()/////////
import util from '../helpers/util.js';
//////bookImport provides getBook() which gives us the bookInfo object (title, image, price)///////////// 
import bookImport from  '../helpers/book.js';

const makeStore = () => {
    const getBook = bookImport.getBook();
    const bookTitle = getBook.title;
    const bookPrice = getBook.price;
    const bookImg = getBook.image;
    let domString = `   
                        <h6>Book:${bookTitle}</h6>
                        <img src="${bookImg}">
                        <p>${bookPrice}</p>
                        <button class="btn btn-danger">Add To Cart</button>   
                    `;
    util.printToDom('storeCon', domString);
};

export default { makeStore };
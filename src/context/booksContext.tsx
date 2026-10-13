import React, { createContext } from 'react';

const BooksContext = createContext({});


const BooksProvider= () => {
    const [readBooks, setReadBooks] = React.useState([]);
    const [wishlistBooks, setWishlistBooks] = React.useState([]);


const sharedState = {
    readBooks,
    setReadBooks,
    wishlistBooks,
    setWishlistBooks,
};


    return (
        <BooksContext.Provider value={sharedState}></BooksContext.Provider>
    );
};

export default BooksProvider;
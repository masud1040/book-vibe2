"use client";

import React, { createContext } from 'react';

export const BooksContext = createContext({});


const BooksProvider= ({children}:{children:React.ReactNode}) => {
    const [readBooks, setReadBooks] = React.useState([]);
    const [wishlistBooks, setWishlistBooks] = React.useState([]);


const sharedState = {
    readBooks,
    setReadBooks,
    wishlistBooks,
    setWishlistBooks,
};


    return (
        <BooksContext.Provider value={sharedState}>
            {children}
        </BooksContext.Provider>
    );
};

export default BooksProvider;
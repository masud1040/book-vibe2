"use client";


import { BooksContext } from "@/context/booksContext";
import { IBook } from "@/type/type";
import { useContext } from "react";


const WishlistButton = ({ book }: { book: IBook}) => {

    const { wishlistBooks, setWishlistBooks}= useContext(BooksContext);
   

    const handleWishlistBook = () => {
        setWishlistBooks([...wishlistBooks, book]);
         console.log("Button clicked:", book.bookName);
     
    
    };

  return (
    <button
     onClick={() => handleWishlistBook()}
     className="btn btn-outline btn-sm p-4"
    >
      Wishlist
    </button>
  );
};

export default WishlistButton;

"use client";


import { BooksContext } from "@/context/booksContext";
import { IBook } from "@/type/type";
import { useContext } from "react";


const ReadButton = ({ book }: { book: IBook}) => {

    const { readBooks, setReadBooks}= useContext(BooksContext);
   

    const handleReadBook = () => {
        setReadBooks([...readBooks, book]);
         console.log("Button clicked:", book.bookName);
     
    
    };

  return (
    <button
     onClick={() => handleReadBook()}
     className="btn btn-outline btn-sm p-4"
    >
      Read
    </button>
  );
};

export default ReadButton;

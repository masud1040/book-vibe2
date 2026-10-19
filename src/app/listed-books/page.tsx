
// "use client";

// import { BooksContext } from "@/context/booksContext";
// import { useContext } from "react";

// const WhishlistBooks = () => {

    
 
  
// };

// export default WhishlistBooks;



import React from "react";

import { IBook } from "@/type/type";
import Bookscard from "@/homepage/Bookscard";

const getBooks = async () => {
  const res = await fetch("http://localhost:3000/booksData.json");
  const data = await res.json();
  return data;
};

const WhishlistBooks = async () => {
  const booksData: IBook[] = await getBooks();

  return (
    <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <h2 className="mb-8 text-center text-3xl font-bold">
        Books
      </h2>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {booksData.map((book) => (
          <Bookscard book={book} key={book.bookId} />
        ))}
      </div>
    </section>
  );
};

export default WhishlistBooks;

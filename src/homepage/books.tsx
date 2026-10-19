
import React from "react";
import Bookscard from "./Bookscard";
import { IBook } from "@/type/type";
import Link from "next/link";

const getBooks = async () => {
  const res = await fetch("http://localhost:3000/booksData.json");
  const data = await res.json();
  return data;
};

const Books = async () => {
  const booksData: IBook[] = await getBooks();

  return (
    <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <h2 className="mb-8 text-center text-3xl font-bold">
        Books
      </h2>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {booksData.slice(0,6).map((book) => (
          <Bookscard book={book} key={book.bookId} />
        ))}
      </div>
      <div className="mt-10 flex justify-center">
  <Link href="/listed-books"
          className="btn btn-primary btn-sm"
        >
          View All Books
      </Link>
      </div>
  
    </section>
  );
};

export default Books;

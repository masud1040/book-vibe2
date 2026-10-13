
import { IBook } from "@/type/type";
import React from "react";
import Image from "next/image";
import Link from "next/link";

interface BookProps {
  book: IBook;
}

const Bookscard = ({ book }: BookProps) => {
  return (
    <Link
      href={`/books/${book.bookId}`}
    >
        <div className="rounded-xl border border-gray-200 p-3">
      <div className="flex h-32 items-center justify-center rounded-lg bg-gray-100 sm:h-36">
        <Image
          src={book.image}
          alt={book.bookName}
          width={150}
          height={150}
          className="h-full w-full object-contain p-3"
        />
      </div>

      <div className="mt-3 flex flex-wrap gap-2">
        {book.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-green-50 px-3 py-1 text-xs text-green-600"
          >
            {tag}
          </span>
        ))}
      </div>

      <h2 className="mt-3 text-base font-bold">
        {book.bookName}
      </h2>

      <p className="mt-2 text-xs text-gray-600">
        By : {book.author}
      </p>

      <div className="mt-4 flex items-center justify-between border-t border-dashed border-gray-200 pt-3 text-xs text-gray-600">
        <span>{book.category}</span>

        <span className="flex items-center gap-1">
          {Number(book.rating).toFixed(2)}
          <span className="text-base">☆</span>
        </span>
      </div>
    </div>
    </Link>


  );
};

export default Bookscard;

import { IBook } from "@/type/type";
import Image from "next/image";
import React from "react";

interface IBookProps {
  params: Promise<{
    id: string;
  }>;
}

const getBooks = async () => {
  const res = await fetch("http://localhost:3000/booksData.json");
  const data = await res.json();
  return data;
};

const Page = async ({ params }: IBookProps) => {
  const { id } = await params;

  const booksData: IBook[] = await getBooks();
  const book = booksData.find(
    (item) => item.bookId === Number(id)
  );

  if (!book) {
    return <div className="p-10 text-center">Book not found</div>;
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className="flex items-center justify-center rounded-xl bg-gray-100 p-6">
          <Image
            src={book.image}
            alt={book.bookName}
            width={350}
            height={450}
            className="h-auto max-h-[400px] w-auto object-contain"
          />
        </div>

        <div>
          <h1 className="text-3xl font-bold">{book.bookName}</h1>

          <p className="mt-3 text-gray-600">
            By: {book.author}
          </p>

          <p className="mt-5 border-y py-3">
            {book.category}
          </p>

          <p className="mt-4 text-sm leading-6 text-gray-600">
            <span className="font-bold text-black">Review: </span>
            {book.review}
          </p>

          <div className="mt-4 flex flex-wrap items-center gap-3">
            <span className="font-semibold">Tags:</span>

            {book.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-green-50 px-3 py-1 text-sm text-green-600"
              >
                #{tag}
              </span>
            ))}
          </div>


          <div className="mt-5 space-y-3 border-t pt-4 text-sm">
            <p className="flex justify-between gap-4">
              <span className="text-gray-500">Number of Pages:</span>
              <span className="font-semibold">{book.totalPages}</span>
            </p>

            <p className="flex justify-between gap-4">
              <span className="text-gray-500">Publisher:</span>
              <span className="font-semibold">{book.publisher}</span>
            </p>

            <p className="flex justify-between gap-4">
              <span className="text-gray-500">Year of Publishing:</span>
              <span className="font-semibold">
                {book.yearOfPublishing}
              </span>
            </p>

            <p className="flex justify-between gap-4">
              <span className="text-gray-500">Rating:</span>
              <span className="font-semibold">⭐ {book.rating}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;

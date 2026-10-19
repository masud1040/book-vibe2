
"use client";

import { BooksContext } from "@/context/booksContext";
import Image from "next/image";
import Link from "next/link";
import { useContext, useMemo, useState } from "react";

type SortBy = "rating" | "totalPages" | "year";
type SortOrder = "asc" | "desc";

const ListedBooks = () => {
  const context = useContext(BooksContext);

  if (!context) {
    throw new Error("ListedBooks must be inside BooksProvider");
  }

  const { readBooks, wishlistBooks } = context;

  const [activeTab, setActiveTab] = useState<"read" | "wishlist">("read");
  const [sortBy, setSortBy] = useState<SortBy>("rating");
  const [sortOrder, setSortOrder] = useState<SortOrder>("desc");

  const books = activeTab === "read" ? readBooks : wishlistBooks;

  // Sorting functionality
  const sortedBooks = useMemo(() => {
    return [...books].sort((a, b) => {
      let valueA: number;
      let valueB: number;

      switch (sortBy) {
        case "rating":
          valueA = Number(a.rating) || 0;
          valueB = Number(b.rating) || 0;
          break;

        case "totalPages":
          valueA = Number(a.totalPages) || 0;
          valueB = Number(b.totalPages) || 0;
          break;

        case "year":
          valueA = Number(a.yearOfPublishing) || 0;
          valueB = Number(b.yearOfPublishing) || 0;
          break;
      }

      return sortOrder === "asc"
        ? valueA - valueB
        : valueB - valueA;
    });
  }, [books, sortBy, sortOrder]);

  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Page heading */}
      <div className="mb-7">
        <h1 className="text-2xl font-bold tracking-tight text-base-content sm:text-3xl">
          Bookshelf
        </h1>

        <p className="mt-1 text-sm text-base-content/60">
          Keep track of the books you want to read and have finished.
        </p>
      </div>

      {/* Toolbar: Book count and sorting */}
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-base-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              className="h-5 w-5"
            >
              <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v16H6.5A2.5 2.5 0 0 0 4 21.5z" />
              <path d="M4 5.5v16M8 7h8M8 11h7" />
            </svg>
          </div>

          <div>
            <p className="text-sm text-base-content/60">
              {activeTab === "read"
                ? "Books marked as read"
                : "Your wishlist"}
            </p>

            <p className="text-lg font-semibold">
              {books.length} {books.length === 1 ? "Book" : "Books"}
            </p>
          </div>
        </div>

        {/* Sorting controls */}
        <div className="flex flex-wrap items-center gap-2">
          <label className="text-sm font-medium text-base-content/70">
            Sort by
          </label>

          <select
            aria-label="Sort books by"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as SortBy)}
            className="select select-bordered select-sm w-36 bg-base-100 sm:w-40"
          >
            <option value="rating">Rating</option>
            <option value="totalPages">Total Pages</option>
            <option value="year">Publishing Year</option>
          </select>

          <select
            aria-label="Sort direction"
            value={sortOrder}
            onChange={(e) =>
              setSortOrder(e.target.value as SortOrder)
            }
            className="select select-bordered select-sm w-36 bg-base-100 sm:w-40"
          >
            <option value="asc">Low to High</option>
            <option value="desc">High to Low</option>
          </select>
        </div>
      </div>

      {/* Tabs */}
      <div role="tablist" className="tabs tabs-bordered mb-5">
        <button
          type="button"
          role="tab"
          aria-selected={activeTab === "read"}
          onClick={() => setActiveTab("read")}
          className={`tab gap-2 ${
            activeTab === "read" ? "tab-active font-semibold" : ""
          }`}
        >
          Read Books

          <span className="badge badge-sm badge-ghost">
            {readBooks.length}
          </span>
        </button>

        <button
          type="button"
          role="tab"
          aria-selected={activeTab === "wishlist"}
          onClick={() => setActiveTab("wishlist")}
          className={`tab gap-2 ${
            activeTab === "wishlist" ? "tab-active font-semibold" : ""
          }`}
        >
          Wishlist Books

          <span className="badge badge-sm badge-ghost">
            {wishlistBooks.length}
          </span>
        </button>
      </div>

      {/* Empty state */}
      {sortedBooks.length === 0 ? (
        <div className="rounded-xl border border-dashed border-base-300 px-5 py-16 text-center">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-base-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="h-7 w-7 text-base-content/60"
            >
              <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v16H6.5A2.5 2.5 0 0 0 4 21.5z" />
              <path d="M4 5.5v16" />
            </svg>
          </div>

          <h2 className="text-lg font-semibold">
            {activeTab === "read"
              ? "No books in your reading list"
              : "Your wishlist is empty"}
          </h2>

          <p className="mx-auto mt-2 max-w-sm text-sm leading-6 text-base-content/60">
            {activeTab === "read"
              ? "Explore the collection and mark a book as read to see it here."
              : "Add books to your wishlist so you can find them easily later."}
          </p>
        </div>
      ) : (
        /* Book list */
        <div className="space-y-4">
          {sortedBooks.map((book) => (
            <article
              key={book.bookId}
              className="card card-side flex-col gap-3 rounded-xl border border-base-300 bg-base-100 p-3 transition-colors hover:border-base-content/25 sm:flex-row sm:items-center sm:gap-5 sm:p-4"
            >
              {/* Book cover */}
              <figure className="h-44 w-full shrink-0 overflow-hidden rounded-lg bg-base-200 sm:h-32 sm:w-28">
                <Image
                  src={book.image}
                  alt={book.bookName}
                  className="h-full w-full object-contain p-3"
                  width={100}
                  height={100}
                />
              </figure>

              {/* Book information */}
              <div className="min-w-0 flex-1">
                <h2 className="text-lg font-bold leading-snug text-base-content">
                  {book.bookName}
                </h2>

                <p className="mt-1 text-sm text-base-content/65">
                  By: {book.author}
                </p>

                {/* Tags and publishing year */}
                <div className="mt-3 flex flex-wrap items-center gap-2">
                  <span className="text-xs font-semibold">Tag</span>

                  {book.tags?.map((tag: string) => (
                    <span
                      key={tag}
                      className="badge badge-success badge-outline badge-sm"
                    >
                      {tag}
                    </span>
                  ))}

                  {book.yearOfPublishing != null && (
                    <span className="flex items-center gap-1.5 text-xs text-base-content/60 sm:ml-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        className="h-4 w-4"
                      >
                        <circle cx="12" cy="12" r="9" />
                        <path d="M12 7v5l3 2" />
                      </svg>

                      Year: {book.yearOfPublishing}
                    </span>
                  )}
                </div>

                {/* Publisher and pages */}
                <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-base-content/60">
                  {book.publisher && (
                    <span className="flex items-center gap-1.5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        className="h-4 w-4"
                      >
                        <path d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-5h6v5M9 9h.01M15 9h.01M9 12h.01M15 12h.01" />
                      </svg>

                      Publisher: {book.publisher}
                    </span>
                  )}

                  {book.totalPages != null && (
                    <span className="flex items-center gap-1.5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        className="h-4 w-4"
                      >
                        <path d="M5 4h14v16H5zM8 8h8M8 12h8M8 16h5" />
                      </svg>

                      Pages: {book.totalPages}
                    </span>
                  )}
                </div>

                <div className="my-3 border-t border-base-200" />

                {/* Category, rating and details */}
                <div className="flex flex-wrap items-center gap-2">
                  {book.category && (
                    <span className="badge badge-info badge-soft badge-sm">
                      Category: {book.category}
                    </span>
                  )}

                  {book.rating != null && (
                    <span className="badge badge-warning badge-soft badge-sm">
                      Rating: {book.rating}
                    </span>
                  )}

                  <Link
                    href={`/books/${book.bookId}`}
                    className="btn btn-success btn-sm ml-0 sm:ml-1"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}

      {/* List footer */}
      {sortedBooks.length > 0 && (
        <p className="mt-5 text-right text-xs text-base-content/50">
          Showing {sortedBooks.length}{" "}
          {sortedBooks.length === 1 ? "book" : "books"}
        </p>
      )}
    </main>
  );
};

export default ListedBooks;

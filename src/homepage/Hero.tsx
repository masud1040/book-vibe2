
import React from "react";
import hero from "@/assets/hero_img.jpg";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="mx-auto mt-4 max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col-reverse items-center gap-6 rounded-2xl bg-[#f3f3f3] px-6 py-8 sm:px-10 md:min-h-[310px] md:flex-row md:justify-between md:px-16">
        <div className="w-full text-center md:w-1/2 md:text-left">
          <h2 className="mx-auto max-w-md font-serif text-3xl font-bold leading-tight text-black sm:text-4xl md:mx-0">
            Books to freshen up
            <br className="hidden sm:block" />
            your bookshelf
          </h2>

          <Link
            href="/listed-books"
            className="mt-6 inline-block rounded-md bg-green-600 px-5 py-3 text-sm font-semibold text-white hover:bg-green-700"
          >
            View The List
          </Link>
        </div>

        <div className="w-full md:w-1/2">
          <Image
            src={hero}
            alt="Featured book"
            width={500}
            height={500}
            priority
            className="mx-auto h-48 w-auto object-contain sm:h-56 md:h-64"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

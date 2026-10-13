
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavBar = () => {
  const pathname = usePathname();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Listed Books', href: '/listed-books' },
    { name: 'Read Books', href: '/read-books' },
  ];

  const isActive = (href) =>
    pathname === href;

  return (
    <header className="sticky top-0 z-50 border-b border-base-200 bg-base-100/95 shadow-sm backdrop-blur-md">
      <nav className="navbar mx-auto min-h-20 max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Logo */}
        <div className="navbar-start gap-2">
          <Link
            href="/"
            className="flex items-center gap-2.5"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-600 text-white shadow-md shadow-emerald-600/20">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 7v14" />
                <path d="M3 18V5a1 1 0 0 1 1-1h3a5 5 0 0 1 5 5 5 5 0 0 1 5-5h3a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-3a5 5 0 0 0-5 2 5 5 0 0 0-5-2H4a1 1 0 0 1-1-1Z" />
              </svg>
            </div>

            <div>
              <h1 className="text-2xl font-extrabold tracking-tight text-base-content">
                Book<span className="text-emerald-600">Vibe</span>
              </h1>
              <p className="hidden text-xs tracking-wide text-base-content/60 sm:block">
                Discover your next story
              </p>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal items-center gap-1 px-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`rounded-lg px-4 py-2.5 font-semibold transition-all duration-200 ${
                    isActive(link.href)
                      ? 'bg-emerald-50 text-emerald-700'
                      : 'text-base-content/70 hover:bg-base-200 hover:text-emerald-700'
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Desktop Actions */}
        <div className="navbar-end gap-2">
          <div className="hidden items-center gap-2 sm:flex">
            <Link
              href="/login"
              className="btn btn-ghost rounded-xl px-4 font-semibold"
            >
              Login
            </Link>

            <Link
              href="/register"
              className="btn rounded-xl border-0 bg-emerald-600 px-5 text-white shadow-sm hover:bg-emerald-700"
            >
              Register
            </Link>
          </div>

          {/* Mobile Menu */}
          <div className="dropdown dropdown-end lg:hidden">
            <button
              tabIndex={0}
              aria-label="Open navigation menu"
              className="btn btn-square btn-ghost rounded-xl"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

            <ul
              tabIndex={0}
              className="menu dropdown-content z-50 mt-3 w-60 gap-1 rounded-2xl border border-base-200 bg-base-100 p-3 shadow-xl"
            >
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`rounded-xl py-3 font-medium ${
                      isActive(link.href)
                        ? 'bg-emerald-50 text-emerald-700'
                        : ''
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}

              <li className="mt-2 border-t border-base-200 pt-2 sm:hidden">
                <Link href="/login">Login</Link>
              </li>
              <li className="sm:hidden">
                <Link
                  href="/register"
                  className="bg-emerald-600 text-white hover:bg-emerald-700"
                >
                  Register
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;

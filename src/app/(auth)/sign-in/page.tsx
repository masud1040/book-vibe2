
"use client";

import Link from "next/link";
import { FaGoogle } from "react-icons/fa";

const Login = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const email = formData.get("email");
    const password = formData.get("password");

    console.log({ email, password });

    // Connect your login authentication here
  };

  const handleGoogleLogin = () => {
    // Connect Google authentication here
    console.log("Google login clicked");
  };

  return (
    <main className="flex min-h-[calc(100vh-64px)] items-center justify-center bg-base-200/50 px-4 py-10">
      <div className="w-full max-w-md">
        <div className="rounded-2xl border border-base-300 bg-base-100 p-6 shadow-sm sm:p-9">
          {/* Heading */}
          <div className="mb-7 text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-success/10 text-success">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                className="h-6 w-6"
              >
                <path d="M12 3 20 7v5c0 5-3.4 7.8-8 9-4.6-1.2-8-4-8-9V7z" />
                <path d="m9 12 2 2 4-4" />
              </svg>
            </div>

            <h1 className="text-2xl font-bold tracking-tight text-base-content">
              Welcome back
            </h1>

            <p className="mt-2 text-sm text-base-content/60">
              Log in to continue your reading journey.
            </p>
          </div>

          {/* Google login */}
          <button
            type="button"
            onClick={handleGoogleLogin}
            className="btn btn-outline w-full border-base-300 bg-base-100 font-medium normal-case hover:bg-base-200"
          >
            <FaGoogle className="text-lg text-[#4285F4]" />
            Continue with Google
          </button>

          {/* Divider */}
          <div className="my-6 flex items-center gap-3">
            <div className="h-px flex-1 bg-base-300" />
            <span className="text-xs text-base-content/50">
              OR CONTINUE WITH EMAIL
            </span>
            <div className="h-px flex-1 bg-base-300" />
          </div>

          {/* Login form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <fieldset className="fieldset">
              <legend className="fieldset-legend text-sm font-medium">
                Email address
              </legend>

              <label className="input input-bordered flex w-full items-center gap-3 focus-within:outline-success">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  className="h-5 w-5 shrink-0 text-base-content/40"
                >
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="m3 7 9 6 9-6" />
                </svg>

                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  className="grow"
                  autoComplete="email"
                  required
                />
              </label>
            </fieldset>

            <fieldset className="fieldset">
              <div className="flex items-center justify-between gap-2">
                <legend className="fieldset-legend text-sm font-medium">
                  Password
                </legend>

                <Link
                  href="/forgot-password"
                  className="text-xs font-medium text-success hover:underline"
                >
                  Forgot password?
                </Link>
              </div>

              <label className="input input-bordered flex w-full items-center gap-3 focus-within:outline-success">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  className="h-5 w-5 shrink-0 text-base-content/40"
                >
                  <rect x="4" y="10" width="16" height="11" rx="2" />
                  <path d="M8 10V7a4 4 0 1 1 8 0v3" />
                </svg>

                <input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  className="grow"
                  autoComplete="current-password"
                  required
                />
              </label>
            </fieldset>

            {/* Remember me */}
            <label className="flex cursor-pointer items-center gap-2 py-1 text-sm text-base-content/70">
              <input
                type="checkbox"
                name="remember"
                className="checkbox checkbox-success checkbox-sm"
              />
              Remember me
            </label>

            <button
              type="submit"
              className="btn btn-success mt-2 w-full font-semibold normal-case"
            >
              Log In
            </button>
          </form>

          {/* Signup link */}
          <p className="mt-6 text-center text-sm text-base-content/60">
            Don&apos;t have an account?{" "}
            <Link
              href="/sign-up"
              className="font-semibold text-success hover:underline"
            >
              Sign up
            </Link>
          </p>
        </div>

        <p className="mt-5 text-center text-xs text-base-content/50">
          Your reading journey starts where you left off.
        </p>
      </div>
    </main>
  );
};

export default Login;

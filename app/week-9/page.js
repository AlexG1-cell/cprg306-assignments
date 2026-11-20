// Name: Alex Ghebremicael Assignment 9

"use client";

import Link from "next/link";
import { useUserAuth } from "./_utils/auth-context";

export default function Page() {
  // user is null when nobody is signed in
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  // Firebase only stores displayName when the account is first made, so when it is
  // empty I read the name GitHub sends back each time I sign in
  const name =
    user?.displayName || user?.providerData?.[0]?.displayName || "Alex Ghebremicael";

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 bg-slate-100 px-6 py-24 text-center">
      <h1 className="text-3xl font-semibold text-slate-800">Week 9</h1>

      {!user ? (
        // signed out, so I only show the login button
        <button
          type="button"
          onClick={gitHubSignIn}
          className="rounded-md bg-teal-600 px-5 py-3 font-semibold text-white hover:bg-teal-700"
        >
          Sign in with GitHub
        </button>
      ) : (
        // signed in, so I show who it is, the link and the logout button
        <div className="flex flex-col items-center gap-4">
          <p className="text-slate-700">
            Welcome, {name}
          </p>

          <Link
            href="/week-9/shopping-list"
            className="font-semibold text-teal-700 hover:underline"
          >
            Go to Shopping List
          </Link>

          <button
            type="button"
            onClick={firebaseSignOut}
            className="rounded-md bg-slate-200 px-5 py-3 font-semibold text-slate-700 hover:bg-slate-300"
          >
            Sign out
          </button>
        </div>
      )}
    </main>
  );
}

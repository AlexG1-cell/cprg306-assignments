// Name: Alex Ghebremicael Assignment 9

import { AuthContextProvider } from "./_utils/auth-context";

// I wrap every week-9 page so they all share the same user
export default function Layout({ children }) {
  return <AuthContextProvider>{children}</AuthContextProvider>;
}

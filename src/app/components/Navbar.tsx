// Import stuff from next
import Link from "next/link";

// Import stuff from next-auth
import { auth, signIn, signOut } from "@/app/auth";

const Navbar: React.FC = async () => {
  // Get the session from next-auth
  const session = await auth();

  return (
    <header className="px-5 py-3 bg-white shadow-sm font-work-sans">
      <nav className="flex justify-between items-center">
        {/* Text based Logo */}
        <Link href="/">
          <span className="text-2xl font-bold text-rose-600 border-b-4 border-b-stone-900 font-work-sans">
            Pitch
          </span>
          <span className="text-2xl font-bold text-stone-900 border-b-4 border-b-rose-600 font-work-sans">
            Place
          </span>
        </Link>

        {/* Show when logged in */}
        <div className="flex items-center gap-5 text-black">
          {session && session?.user ? (
            <>
              {/* Link to the create page */}
              <Link href="/startup/create">
                <span className="max-sm:hidden">Create</span>
              </Link>

              {/* Logout */}
              <form
                action={async () => {
                  "use server";

                  await signOut({ redirectTo: "/" });
                }}
              >
                <button type="submit">
                  <span className="max-sm:hidden">Logout</span>
                </button>
              </form>

              {/* Link to the user page */}
              <Link href={`/user/${session?.user?.id}`}>
                <span>{session?.user?.name}</span>
              </Link>
            </>
          ) : (
            // Login
            <form
              action={async () => {
                "use server";

                await signIn("github");
              }}
            >
              <button type="submit">Login</button>
            </form>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

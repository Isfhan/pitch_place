// Import stuff from next
import Image from "next/image";
import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <header className="px-5 py-3  bg-blue-300 shadow-sm font-work-sans">
      <nav className="flex justify-between items-center">
        <Link href="/">
          <Image
            src="/images/logo.png"
            alt="logo"
            width={250}
            height={30}
            className="w-10"
          />
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;

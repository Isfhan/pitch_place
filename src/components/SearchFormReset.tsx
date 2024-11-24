"use client";

// import stuff from next
import Link from "next/link";

// import icons
import { X } from "lucide-react";

const SearchFormReset = () => {
  const handleReset = () => {
    const form = document.querySelector(".search-form") as HTMLFormElement;

    if (form) {
      form.reset();
    }
  };

  return (
    <button type="reset" onClick={handleReset}>
      <Link href="/" className="search-btn text-white">
        <X className="size-5" />
      </Link>
    </button>
  );
};

export default SearchFormReset;

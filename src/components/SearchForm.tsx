// Import stuff from next
import Form from "next/form";

// Import components
import SearchFormReset from "@/components/SearchFormReset";

// Import icons
import { Search } from "lucide-react";

const SearchForm = ({ query }: { query?: string }) => {
  return (
    <Form action="/" className="search-form">
      <input
        name="query"
        defaultValue={query}
        className="search-input"
        placeholder="Search Startups"
      />
      <div className="flex gap-2">
        {query && <SearchFormReset />}

        <button type="submit" className="search-btn text-white">
          <Search className="size-5" />
        </button>
      </div>
    </Form>
  );
};

export default SearchForm;

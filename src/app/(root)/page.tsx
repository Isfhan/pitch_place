// Import components
import SearchForm from "@/components/SearchForm";
import StartupCard, { StartupTypeCard } from "@/components/StartupCard";

// Import stuff from sanity
import { sanityFetch, SanityLive } from "@/sanity/lib/live";
import { STARTUP_QUERY } from "@/sanity/lib/queries";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  // Get the search query
  const query = (await searchParams).query || "";

  // Set the search query if it exists
  const params = { search: query || null };

  // Fetch all startups from Sanity
  const { data: posts } = await sanityFetch({
    query: STARTUP_QUERY,
    params,
  });

  return (
    <>
      <section className="pink_container">
        <h1 className="heading">
          Pitch Your Startup, Connect with Entrepreneur
        </h1>
        <p className="sub-heading !max-w-3xl drop-shadow-2xl shadow-stone-900">
          Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competitions
        </p>

        {/* Search Form */}
        <SearchForm query={query} />
      </section>

      <section className="section_container">
        {/* Search Results */}
        <p className="text-30-semibold">
          {query ? `Search results for "${query}"` : "All Startups"}
        </p>

        {/* Startup Cards Component */}
        <ul className="mt-7 card_grid">
          {posts.length > 0 ? (
            posts.map((post: StartupTypeCard) => (
              <StartupCard key={post._id} post={post} />
            ))
          ) : (
            <li className="no-results">No Startups Found</li>
          )}
        </ul>
      </section>
      {/* Sanity Live Preview will be injected here */}
      <SanityLive />
    </>
  );
}

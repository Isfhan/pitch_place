import SearchForm from "@/components/SearchForm";

export default async function Home({
  searchParams,
}: {
  searchParams: { query?: string };
}) {
  // Get the search query
  const query = await searchParams.query;

  return (
    <section className="pink_container">
      <h1 className="heading">Pitch Your Startup, Connect with Entrepreneur</h1>
      <p className="sub-heading !max-w-3xl drop-shadow-2xl shadow-stone-900">
        Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competitions
      </p>

      {/* Search Form */}
      <SearchForm query={query} />
    </section>
  );
}

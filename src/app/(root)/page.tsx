import SearchForm from "@/components/SearchForm";
import StartupCard, { StartupTypeCard } from "@/components/StartupCard";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  // Get the search query
  const query = (await searchParams).query || "";

  // Dummy data for posts
  const posts: StartupTypeCard[] = [
    {
      _id: "1",
      category: "Technology",
      title: "Technology Startup 1",
      description: "Description 1",
      image: "https://picsum.photos/800/600?random=1",
      author: { _id: "1", name: "John Doe", image: "" },
      views: 100,
      _createdAt: new Date(),
    },
    {
      _id: "2",
      category: "Business",
      title: "Business Startup 2",
      description: "Description 2",
      image: "https://picsum.photos/800/600?random=2",
      author: { _id: "1", name: "John Doe", image: "" },
      views: 200,
      _createdAt: new Date(),
    },
    {
      _id: "3",
      category: "Technology",
      title: "Technology Startup 3",
      description: "Description 3",
      image: "https://picsum.photos/800/600?random=3",
      author: { _id: "1", name: "John Doe", image: "" },
      views: 300,
      _createdAt: new Date(),
    },
    {
      _id: "4",
      category: "Business",
      title: "Business Startup 4",
      description: "Description 4",
      image: "https://picsum.photos/800/600?random=4",
      author: { _id: "1", name: "John Doe", image: "" },
      views: 400,
      _createdAt: new Date(),
    },
  ];

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
    </>
  );
}

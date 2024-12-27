// Import stuff from next
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

// Import stuff from sanity
import { STARTUP_BY_ID_QUERY } from "@/sanity/lib/queries";
import { formatDate } from "@/lib/utils";
import { client } from "@/sanity/lib/client";

// Import components
import View from "@/components/View";

// Import third-party packages
import markdownit from "markdown-it";

const md = markdownit();

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  // Extract the startup ID from params promise
  const { id } = await params;

  // Fetch startup details
  const post = await client.fetch(STARTUP_BY_ID_QUERY, { id });

  // Return 404 if startup details not found
  if (!post) return notFound();

  // Parse markdown to html
  const parsedContent = md.render(post?.pitch || "");

  return (
    <>
      {/* Pink Container */}
      <section className="pink_container !min-h-[230px]">
        <p className="tag">{formatDate(post?._createdAt)}</p>
        <h1 className="heading">{post.title}</h1>
        <p className="sub-heading !max-w-5xl">{post.description}</p>
      </section>

      <section className="section_container">
        {/* Startup Image */}
        {post.image && (
          <Image
            src={post.image}
            width={800}
            height={600}
            alt="startup image"
            className="w-full h-auto rounded-xl"
          />
        )}

        <div className="space-y-5 mt-10 max-w-4xl mx-auto">
          <div className="flex-between gap-5">
            <Link
              href={`/user/${post.author?._id}`}
              className="flex gap-2 items-center mb-3"
            >
              {/* Author Image */}
              {post.author?.image && (
                <Image
                  src={post.author.image}
                  alt="avatar"
                  width={64}
                  height={64}
                  className="rounded-full drop-shadow-lg"
                />
              )}

              {/* Display Author Details */}
              <div>
                <p className="text-20-medium">{post.author?.name}</p>
                <p className="text-16-medium !text-black-300">
                  @{post.author?.username}
                </p>
              </div>
            </Link>

            {/* Display Category */}
            <p className="category-tag">{post.category}</p>
          </div>

          <h3 className="text-30-bold">Pitch Details</h3>

          {/* Display Startup Pitch */}
          {parsedContent ? (
            <article
              className="prose max-w-4xl font-work-sans break-all"
              dangerouslySetInnerHTML={{ __html: parsedContent }}
            />
          ) : (
            <p className="no-result">No details provided</p>
          )}
        </div>
        <hr className="divider" />
      </section>

      {/* Display total views using View Component */}
      <View id={post._id} totalViews={post.views || 1} />
    </>
  );
};

export default page;

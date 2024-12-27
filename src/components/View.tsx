import Ping from "@/components/Ping";
import { writeClient } from "@/sanity/lib/write-client";

const View = async ({ id, totalViews }: { id: string; totalViews: number }) => {
  // Increment the view count after the page has been rendered
  await writeClient
    .patch(id)
    .set({ views: totalViews + 1 })
    .commit();

  return (
    <div className="view-container">
      <div className="absolute -top-2 -right-2">
        <Ping />
      </div>

      <p className="view-text">
        <span className="font-black">Views: {totalViews || "0"}</span>
      </p>
    </div>
  );
};

export default View;

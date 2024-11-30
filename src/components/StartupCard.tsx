import { formatDate } from "@/lib/utils";
import { EyeIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

export type StartupTypeCard = {
  _id: string;
  category: string;
  title: string;
  description: string;
  image: string;
  author: {
    _id: string;
    name: string;
    image: string;
  };
  _createdAt: Date;
  views: number;
};


const StartupCard = ({ post }: { post: StartupTypeCard }) => {
  // Destructure post object
  const {
    _id,
    category,
    title,
    description,
    image,
    author: { _id: authorId, name: authorName, image: authorImage },
    _createdAt,
    views,
  } = post;

  return (
    <li className="startup-card group">
      <div className="flex-between">
        {/* Display Date */}
        <p className="startup_card_date">{formatDate(_createdAt)}</p>

        {/* Display Views */}
        <div className="flex gap-1.5">
          <EyeIcon className="size-6 text-primary" />
          <span className="text-16-medium">{views}</span>
        </div>
      </div>

      <div className="flex-between mt-5 gap-5">
        <div className="flex-1">
          {/* Display Author Name */}
          <Link href={`/user/${authorId}`}>
            <p className="text-16-medium line-clamp-1">{authorName}</p>
          </Link>

          {/* Display Title */}
          <Link href={`/startup/${_id}`}>
            <h3 className="text-26-semibold line-clamp-1">{title}</h3>
          </Link>
        </div>

        {/* Display Author Image */}
        <Link href={`/user/${authorId}`}>
          <Image
            src={"https://placehold.co/48x48.png"}
            alt={authorName}
            width={48}
            height={48}
            className="rounded-full"
          />
        </Link>
      </div>

      {/* Display Description and Image */}
      <Link href={`/startup/${_id}`}>
        <p className="startup-card_desc">{description}</p>
        <Image
          src={image}
          alt={title}
          width={800}
          height={600}
          className="startup-card_img"
        />
      </Link>

      <div className="flex-between gap-3 mt-5">
        <Link href={`/?query=${category?.toLowerCase()}`}>
          <p className="text-16-medium">{category}</p>
        </Link>
        <Button className="startup-card_btn" asChild>
          <Link href={`/startup/${_id}`}>Details</Link>
        </Button>
      </div>
    </li>
  );
};

export default StartupCard;

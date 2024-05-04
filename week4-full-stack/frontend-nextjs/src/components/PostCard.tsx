import type { Post as PostType } from "@/lib/type";
import Image from "next/image";

export default function PostCard({ item }: { item: PostType }) {
  const { content, image, createdAt, user } = item;

  // const postDate = new Date(createdAt);
  const postDate = createdAt;

  return (
    <section className="flex flex-col gap-4 rounded-lg border-2 border-[#000400] bg-white p-6">
      <div className="flex items-center gap-4">
        <img
          className="rounded-full border-2 border-[#000400]"
          src={user.photo}
          alt={`This is photo of ${user.name}.`}
        />
        <div>
          <span className="block font-bold">{user.name}</span>
          <span className="block text-xs text-[#9B9893]">
            {postDate}
          </span>
        </div>
      </div>
      <p>{content}</p>
      {image && <img src={image} alt="The photo uploaded by user in post" />}
    </section>
  );
}

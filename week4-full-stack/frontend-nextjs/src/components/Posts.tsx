"use client";

import SearchBar from "@/components/SearchBar";
import PostCard from "@/components/PostCard";
import type { Post as PostType } from "@/lib/type";
import { getPosts } from "@/lib/searchPosts";

import { useState, useEffect } from "react";

interface Porps {
  className: string;
  initialPosts: PostType[];
}

export default function Posts({ className, initialPosts }: Porps) {
  const [posts, setPosts] = useState(initialPosts);

//   useEffect(() => {
//     const updatePosts = async () => {
//       const updatedPosts = await getPosts("asc");
//       setPosts(updatedPosts);
//     };

//     console.log(posts)
//     updatePosts();
//   }, []);

  return (
    <div className={`${className}`}>
      <SearchBar className="mb-4 w-full" />
      <div className="flex flex-col gap-4">
        {posts.map((item: PostType) => (
          <PostCard key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
}

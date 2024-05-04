import AddPostButton from "@/components/AddPostButton";
import Header from "../components/Header";
import Image from "next/image";
import { IconBell, IconThumbUp } from "@tabler/icons-react";
import Posts from "@/components/Posts";
import { getPosts } from "@/lib/searchPosts";
import { Post as PostType } from "@/lib/type";

export default async function Page() {
  const posts: PostType[] = await getPosts("asc");

  return (
    <>
      <Header className={"mb-12"} />
      <main className="mx-auto flex max-w-4xl items-start justify-between gap-[27px] ">
        <Posts className="w-[65%]" initialPosts={posts} />
        <section className="w-[35%] border-2 border-[#000400] bg-white px-6 py-8">
          <AddPostButton className="mb-6" />
          <div className="flex flex-col gap-[22px]">
            <div className="flex items-center gap-4">
              {/* Add API Later */}
              <Image
                src="/images/user99.png"
                alt="your thumbnail"
                height={50}
                width={50}
                className="rounded-full border-2 border-[#000400]"
              />
              <span className="font-notoSans font-bold">萊特勒</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex size-[50px] items-center justify-center rounded-full border-2 border-[#000400] bg-[#E2EDFA]">
                <IconBell />
              </div>
              <span className="font-notoSans font-bold">追蹤名單</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex size-[50px] items-center justify-center rounded-full border-2 border-[#000400] bg-[#E2EDFA]">
                <IconThumbUp />
              </div>
              <span className="font-notoSans font-bold">追蹤名單</span>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

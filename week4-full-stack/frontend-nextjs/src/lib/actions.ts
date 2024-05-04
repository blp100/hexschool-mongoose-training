"use server";
import { getPosts } from "./searchPosts";

export const searchHandler = async (formData: FormData) => {
  const timeSort = formData.get("assignee[value]")?.toString();
  const query = formData.get("query")?.toString();

  const data = await getPosts(timeSort, query);
  
};



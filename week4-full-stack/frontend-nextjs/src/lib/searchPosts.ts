export async function getPosts(
  timeSort: string | null = null,
  query: string | null = null
) {
  const fetchUrl = "http://localhost:3005/posts";
  const queryUrl = `?${timeSort ? `timeSort=${timeSort}` : ""}${query ? `&q=${query}` : ""}`;

  const response = await fetch(
    queryUrl === "?" ? fetchUrl : `${fetchUrl}${queryUrl}`,
    {
      cache: "force-cache",
    }
  );

  if (!response.ok) throw Error;

  const { data } = await response.json();

  return data;
}

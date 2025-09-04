import { getQueryClient, trpc } from "@/trpc/server";

export default function Home() {
  const queryClient = getQueryClient();
  const categories = queryClient.fetchQuery(
    trpc.categories.getMany.queryOptions()
  );

  return <div>{JSON.stringify(categories, null, 2)}</div>;
}

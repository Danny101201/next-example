import { getUsers } from "@/action/user";
import { Users } from "@/components/Users";
import { HydrationBoundary, QueryClient, dehydrate } from "@tanstack/react-query";
export default async function Home() {

  const queryClient = new QueryClient()

  await queryClient.prefetchQuery({
    queryKey: ['users'],
    queryFn: () => getUsers(),
  })
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Users />
    </HydrationBoundary>
  )
}

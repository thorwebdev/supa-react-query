// `app` directory
import useCountryQuery from "@/hooks/use-country-query";
import useSupabaseServer from "@/utils/server-supabase";
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";
import { cookies } from "next/headers";
import Country from "../country";

export default async function Page({ params }: { params: { id: number } }) {
  const cookieStore = cookies();
  const supabase = useSupabaseServer(cookieStore);
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(
    useCountryQuery({ countryId: params.id, client: supabase })
  );

  return (
    // Neat! Serialization is now as easy as passing props.
    // HydrationBoundary is a Client Component, so hydration will happen there.
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Country id={params.id} />
    </HydrationBoundary>
  );
}

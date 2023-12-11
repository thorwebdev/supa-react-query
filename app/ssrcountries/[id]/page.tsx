import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import useCountryQuery from "@/hooks/use-country-query";
import useSupabaseServer from "@/utils/supabase-server";
import { cookies } from "next/headers";
import Country from "../country";

export default async function CountryPage({
  params,
}: {
  params: { id: number };
}) {
  const queryClient = new QueryClient();
  const cookieStore = cookies();
  const supabase = useSupabaseServer(cookieStore);

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

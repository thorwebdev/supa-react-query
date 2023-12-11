import { getCountryById } from "@/queries/get-country-by-id";
import { TypedSupabaseClient } from "@/utils/supabase";

function useCountryQuery({
  countryId,
  client,
}: {
  countryId: number;
  client: TypedSupabaseClient;
}) {
  const queryKey = ["country", countryId];

  const queryFn = async () => {
    return getCountryById(client, countryId).then((result) => result.data);
  };

  return { queryKey, queryFn };
}

export default useCountryQuery;

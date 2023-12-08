import { getCountryById } from "@/queries/get-country-by-id";
import useSupabase from "./useSupabase";
import { useQuery } from "@tanstack/react-query";

function useCountryQuery(countryId: number) {
  const client = useSupabase();
  const queryKey = ["country", countryId];

  const queryFn = async () => {
    return getCountryById(client, countryId).then((result) => result.data);
  };

  return useQuery({ queryKey, queryFn });
}

export default useCountryQuery;

"use client";

import useCountryQuery from "@/hooks/use-country-query";
import useSupabase from "@/hooks/useSupabase";
import { useQuery } from "@tanstack/react-query";

export default function CountryPage({ params }: { params: { id: number } }) {
  const supabase = useSupabase();
  const {
    data: country,
    isLoading,
    isError,
  } = useQuery(useCountryQuery({ countryId: params.id, client: supabase }));

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError || !country) {
    return <div>Error</div>;
  }

  return (
    <div>
      <h1>{country.name}</h1>
    </div>
  );
}

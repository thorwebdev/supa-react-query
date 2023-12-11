// app/posts/posts.jsx
"use client";

import useCountryQuery from "@/hooks/use-country-query";
import useSupabase from "@/hooks/useSupabase";
import { useQuery } from "@tanstack/react-query";

export default function Country({ id }: { id: number }) {
  const supabase = useSupabase();
  // This useQuery could just as well happen in some deeper
  // child to <Posts>, data will be available immediately either way
  const { data } = useQuery(
    useCountryQuery({ countryId: id, client: supabase })
  );

  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}

import { TypedSupabaseClient } from "@/utils/supabase";

export function getCountryById(client: TypedSupabaseClient, countryId: number) {
  return client
    .from("countries")
    .select(
      `
      id,
      name
    `
    )
    .eq("id", countryId)
    .throwOnError()
    .single();
}

// `app` directory
import useSupabaseServer from "@/utils/server-supabase";
import { cookies } from "next/headers";

async function getData({
  id,
  cookieStore,
}: {
  id: number;
  cookieStore: ReturnType<typeof cookies>;
}) {
  const supabase = useSupabaseServer(cookieStore);
  const { data } = await supabase
    .from("countries")
    .select()
    .eq("id", id)
    .throwOnError();
  return data;
}

export default async function Page({ params }: { params: { id: number } }) {
  const cookieStore = cookies();
  const data = await getData({ id: params.id, cookieStore });
  return <pre>{JSON.stringify({ data }, null, 2)}</pre>;
}

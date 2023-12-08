"use client";

import useCountryQuery from "@/hooks/use-country-query";

export default function CountryPage({ params }: { params: { id: number } }) {
  const { data: country, isLoading, isError } = useCountryQuery(params.id);

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

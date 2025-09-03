import { Station } from "@/lib/types/Station";
import { client } from "./client";

export const getStations = async (query: string): Promise<Station[]> => {
  const results = await client.locations(query, {
    results: 10,
  });

  return results
    .filter((s) => s.id && s.name)
    .map((result) => ({
      id: result.id!,
      name: result.name!,
    }));
};

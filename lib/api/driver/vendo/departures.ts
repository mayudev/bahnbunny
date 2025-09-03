import { client } from "./client";

export const getDepartures = async () => {
  const s = await client.departures("8000261", {});
  console.log(s);
};

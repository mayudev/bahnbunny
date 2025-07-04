import { createClient } from "db-vendo-client";
import { profile as dbnavprofile } from "db-vendo-client/p/dbnav/index.js";

const client = createClient(dbnavprofile, "bahnbunny/0.0.0", {
  enrichStations: false,
});

export const getDepartures = async () => {
  await client.departures("8000261", {});
};

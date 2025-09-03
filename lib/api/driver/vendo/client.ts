import { createClient } from "db-vendo-client";
import { profile as dbnavprofile } from "db-vendo-client/p/dbnav/index.js";

export const client = createClient(dbnavprofile, "bahnbunny/0.0.0", {
  enrichStations: false,
});

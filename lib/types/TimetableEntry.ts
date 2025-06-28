import { Line } from "./Line";
import { PlannedActualSet } from "./misc";
import { Station } from "./Station";

export type TimetableEntry = {
  arrival?: PlannedActualSet<number>;
  departure?: PlannedActualSet<number>;
  platform?: PlannedActualSet<string>;
  origin?: Station;
  destination?: Station;
  line: Line;
};

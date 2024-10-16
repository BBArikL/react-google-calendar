import { CSSObject } from "@emotion/react";
import { DateTime } from "luxon";
import { CSSProperties } from "react";

export interface EventProps {
  name: string;
  startTime: DateTime;
  endTime: DateTime;
  description?: string;
  location?: string;
  eventStyles?: CSSProperties | CSSObject;
  eventCircleStyles?: CSSProperties | CSSObject;
  eventTextStyles?: CSSProperties | CSSObject;
  tooltipStyles?: CSSProperties | CSSObject;
  calendarName?: string;
  color?: string;
}

export interface EventState {
  startTime: DateTime;
  endTime: DateTime;
  showTooltip: boolean;
}

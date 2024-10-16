import { CSSObject } from "@emotion/react";
import { DateTime } from "luxon";
import { CSSProperties } from "react";

export interface MultiEventProps {
  name: string;
  startTime: DateTime;
  endTime: DateTime;
  length?: number;
  description?: string;
  location?: string;
  calendarName?: string;
  tooltipStyles?: CSSProperties | CSSObject;
  multiEventStyles?: CSSProperties | CSSObject;
  color?: string;
  arrowLeft?: boolean;
  arrowRight?: boolean;
}

export interface MultiEventState {
  startTime: DateTime;
  endTime: DateTime;
  color: string;
  darkColor: string;
  showTooltip: boolean;
  allDay: boolean;
}

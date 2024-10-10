import { CSSObject } from '@emotion/react';
import { DateTime } from 'luxon';
import { CSSProperties } from 'react';
export interface TooltipProps {
  showTooltip: boolean;
  name: string;
  startTime: DateTime;
  endTime: DateTime;
  description?: string;
  location?: string;
  calendarName?: string;
  closeTooltip: () => void;
  tooltipStyles?: CSSProperties | CSSObject;
}

export interface TooltipState {
  timeDisplay: string;
  eventURL: string;
}

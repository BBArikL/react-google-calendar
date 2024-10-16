import { DateTime, Zone } from 'luxon';

export interface CalendarProps {
  apiKey: string;
  calendars: {
    calendarId: string,
    color?: string,
  }[];
  language?: string;
  styles?: object;
  showArrow?: boolean;
  showFooter?: boolean;
}

export interface CalendarState {
  monthNames: string[];
  days: string[];
  today: DateTime;
  current: DateTime;
  calendars: {
    calendarId: string,
    color?: string,
  }[];
  events: any[];
  singleEvents: any[];
  userTimezone: Zone;
  showArrow: boolean;
  showFooter: boolean;
  processedCalendars: string[];
}

import { DateTime } from 'luxon';
/** determines whether event is an all day event
 * @param {DateTime} startTime start of event
 * @param {DateTime} endTime end of event
 * @return {boolean} Whether or not it is an all day event
 */
export declare function isAllDay(startTime: DateTime, endTime: DateTime): boolean;
/** get google calendar link to copy event
 * @param {DateTime} startTime start of event
 * @param {DateTime} endTime end of event
 * @param {string} name name of event
 * @param {string} description description of event
 * @param {string} location location of event
 * @param {boolean} allDay whether or not it is an all day event
 * @return {string} url of the link
 */
export declare function getCalendarURL(startTime: DateTime, endTime: DateTime, name: string, description?: string, location?: string, allDay?: boolean): string;
/** determines whether or not it is rendered as a single event or multi event (based on google calendar way)
 * true if duration is at least 24 hours or ends after 12pm on the next day
 * @param {DateTime} startTime
 * @param {DateTime} endTime
 * @return {boolean} whether or not it is a single event
 */
export declare function isMultiEvent(startTime: DateTime, endTime: DateTime): boolean;
export declare function pSBC(p: number, c0: string, c1?: any, l?: any): string | null;
export declare function to_datetime(time: string | number | Date | DateTime): DateTime;

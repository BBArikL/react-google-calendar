import { DateTime } from 'luxon';
import { default as React } from 'react';
import { CalendarProps, CalendarState } from './types';
import { EventProps } from './types/event';
import { MultiEventProps } from './types/multiEvent';
export default class Calendar extends React.Component<CalendarProps, CalendarState> {
    constructor(props: CalendarProps);
    componentDidMount(): Promise<void>;
    processEvents(items: any[], calendarName: string, color: string): any[];
    lastMonth(): void;
    nextMonth(): void;
    clearEvents(): void;
    renderDays(): import("@emotion/react/jsx-runtime").JSX.Element[];
    renderDates(eventsEachDay: any[]): any[];
    getRenderEvents(events: any[], singleEvents: any[]): never[][];
    drawMultiEvent(eventsEachDay: any[], props: MultiEventProps): void;
    renderMultiEventBlock(eventsEachDay: any[], startDate: any, length: number, props: any, arrowLeft: boolean, arrowRight: boolean): void;
    renderSingleEvent(eventsEachDay: any[], date: number, event: EventProps): void;
    static getDatesFromRRule(str: string, eventStart: DateTime, betweenStart: DateTime, betweenEnd: DateTime): Date[];
    render(): import("@emotion/react/jsx-runtime").JSX.Element;
}

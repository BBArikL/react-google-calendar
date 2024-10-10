import { DateTime } from 'luxon';
import { default as React } from 'react';
import { TooltipProps, TooltipState } from './types/tooltip';
export default class Tooltip extends React.Component<TooltipProps, TooltipState> {
    constructor(props: TooltipProps);
    static getTimeDisplay(startTime: DateTime, endTime: DateTime, allDay: boolean): string;
    render(): import("@emotion/react/jsx-runtime").JSX.Element;
}

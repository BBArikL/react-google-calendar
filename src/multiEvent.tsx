/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";

import "./index.css";
import Tooltip from "./tooltip";
import { MultiEventProps, MultiEventState } from "./types/multiEvent";
import { isAllDay, pSBC, to_datetime } from "./utils/helper";

export default class MultiEvent extends React.Component<
  MultiEventProps,
  MultiEventState
> {
  constructor(props: MultiEventProps) {
    super(props);

    let color = this.props.color || "#4786ff";
    let start_time = to_datetime(this.props.startTime);
    let end_time = to_datetime(this.props.endTime);

    this.state = {
      startTime: start_time,
      endTime: end_time,
      color: color,
      darkColor: pSBC(-0.35, color) ?? "#FFFF",
      allDay: isAllDay(start_time, end_time),
      showTooltip: false,
    };

    this.toggleTooltip = this.toggleTooltip.bind(this);
    this.closeTooltip = this.closeTooltip.bind(this);
  }

  closeTooltip() {
    this.setState({ showTooltip: false });
  }

  toggleTooltip() {
    this.setState({ showTooltip: !this.state.showTooltip });
  }

  render() {
    const leftArrow = css`
      margin-left: 8px;
      border-top-left-radius: 0px;
      border-bottom-left-radius: 0px;
      &:before {
        content: "";
        position: absolute;
        left: 0;
        bottom: 0;
        width: 0;
        height: 0;
        border-right: 8px solid ${this.state.color};
        border-top: 13px solid transparent;
        border-bottom: 13px solid transparent;
      }
      &:hover::before {
        cursor: pointer;
        border-right-color: ${this.state.darkColor};
      }
    `;

    const rightArrow = css`
      margin-right: 8px;
      border-top-right-radius: 0px;
      border-bottom-right-radius: 0px;
      &:after {
        content: "";
        position: absolute;
        right: 0;
        bottom: 0;
        width: 0;
        height: 0;
        border-left: 8px solid ${this.state.color};
        border-top: 13px solid transparent;
        border-bottom: 13px solid transparent;
      }
      &:hover::after {
        cursor: pointer;
        border-left-color: ${this.state.darkColor};
      }
    `;

    return (
      <div
        className="event"
        // @ts-ignore
        tabIndex="0"
        onBlur={this.closeTooltip}
        css={css`
          width: ${"calc(" +
          this.props.length +
          "00% + " +
          ((this.props.length || 1) - 1) +
          "px)"};
          &:focus {
            outline: none;
          }
          position: relative;
        `}
      >
        <>
          <div
            css={[
              css`
                width: ${
                // @ts-ignore
                "calc(100% - " +
                8 *
                (Number(this.props.arrowLeft || false) +
                  Number(this.props.arrowRight || false)) +
                "px)"
                };
                    border-radius: 3px;
                    background: ${this.state.color};
                    &:hover {
                      background: ${this.state.darkColor};
                    }
                    ${this.props.arrowLeft && leftArrow}
                    ${this.props.arrowRight && rightArrow}
                  `,
              // @ts-ignore
              this.props.multiEventStyles,
            ]}
            onClick={this.toggleTooltip}
          >
            <div
              className="event-text"
              css={{
                padding: "3px 0px",
                color: "white",
                marginLeft: this.props.arrowLeft ? "2px" : "5px",
                marginRight: this.props.arrowRight ? "0px" : "5px",
                overflowX: "hidden",
                whiteSpace: "nowrap",
                position: "relative",
                textAlign: "left",
                "&:hover": {
                  cursor: "pointer",
                },
              }}
            >
              {this.state.allDay
                ? ""
                : this.state.startTime.toFormat("h:mma ")}
              <span css={{ fontWeight: "500" }}>{this.props.name}</span>
            </div>
          </div>
        </>
        <Tooltip
          name={this.props.name}
          startTime={to_datetime(this.props.startTime)}
          endTime={to_datetime(this.props.endTime)}
          description={this.props.description}
          location={this.props.location}
          tooltipStyles={this.props.tooltipStyles}
          showTooltip={this.state.showTooltip}
          closeTooltip={this.closeTooltip}
          calendarName={this.props.calendarName}
        />
      </div>
    );
  }
}

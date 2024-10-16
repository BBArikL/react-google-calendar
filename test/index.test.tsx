/**
 * @jest-environment jsdom
 */

import { act } from "@testing-library/react";
import { DateTime } from "luxon";
import React from "react";
import { createRoot } from "react-dom/client";
import { describe, expect, test } from "vitest";

import Calendar from "../src/index";

describe("simple end to end test", () => {
  test("test full render", () => {
    let container = document.createElement("div");
    document.body.appendChild(container);
    let root = createRoot(container);
    let calendars = [
      { calendarId: "09opmkrjova8h5k5k46fedmo88@group.calendar.google.com" },
    ];

    act(() => {
      root.render(
        // @ts-ignore
        <Calendar apiKey={process.env.GOOGLE_API_KEY} calendars={calendars} />,
      );
    });
  });
});

describe("Use rrule to get recurrences", () => {
  test("proper amount of events", () => {
    let recurrenceString = "RRULE:FREQ=WEEKLY;WKST=SU;COUNT=5;BYDAY=SU";
    let eventStart = DateTime.fromFormat(
      "2020-05-31 17:00",
      "yyyy-MM-dd HH:mm",
    );
    let betweenStart = DateTime.fromISO("2020-06-01");
    let betweenEnd = DateTime.fromISO("2020-07-01");
    let dates = Calendar.getDatesFromRRule(
      recurrenceString,
      eventStart,
      betweenStart,
      betweenEnd,
    );
    expect(dates.length).toBe(4);
  });

  test("proper amount of events 2", () => {
    let recurrenceString = "RRULE:FREQ=WEEKLY;WKST=SU;COUNT=5;BYDAY=SU";
    let eventStart = DateTime.fromISO("2020-05-31");
    let betweenStart = DateTime.fromISO("2020-05-01");
    let betweenEnd = DateTime.fromISO("2020-06-01");
    let dates = Calendar.getDatesFromRRule(
      recurrenceString,
      eventStart,
      betweenStart,
      betweenEnd,
    );
    expect(dates.length).toBe(1);
  });

  test("all day that ends exactly at the beginning of the next month", () => {
    let recurrenceString = "RRULE:FREQ=WEEKLY;BYDAY=TH";
    let eventStart = DateTime.fromISO("2020-05-29");
    let betweenStart = DateTime.fromISO("2020-07-01").minus({ day: 1 });
    let betweenEnd = DateTime.fromISO("2020-08-01");
    let dates = Calendar.getDatesFromRRule(
      recurrenceString,
      eventStart,
      betweenStart,
      betweenEnd,
    );
    expect(dates.length).toBe(5);
  });

  test("all day that ends exactly at the beginning of the next month 2", () => {
    let recurrenceString = "RRULE:FREQ=WEEKLY;BYDAY=TH";
    let eventStart = DateTime.fromISO("2020-05-31");
    let betweenStart = DateTime.fromISO("2020-08-01").minus({ day: 1 });
    let betweenEnd = DateTime.fromISO("2020-09-01");
    let dates = Calendar.getDatesFromRRule(
      recurrenceString,
      eventStart,
      betweenStart,
      betweenEnd,
    );
    expect(dates.length).toBe(4);
  });

  test("Doesn't break when exdate is passed in", () => {
    let recurrenceString = "EXDATE;TZID=America/New_York:20181011T120000";
    let eventStart = DateTime.fromISO("2020-05-31");
    let betweenStart = DateTime.fromISO("2020-08-01").minus({ day: 1 });
    let betweenEnd = DateTime.fromISO("2020-09-01");
    Calendar.getDatesFromRRule(
      recurrenceString,
      eventStart,
      betweenStart,
      betweenEnd,
    );
  });
});

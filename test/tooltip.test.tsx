/**
 * @jest-environment jsdom
 */

import { act } from "@testing-library/react";
import { DateTime } from "luxon";
import React from "react";
import { createRoot } from "react-dom/client";
import { afterAll, beforeAll, describe, expect, test } from "vitest";

import Tooltip from "../src/tooltip";

describe("Tooltip Time Display", () => {
  test("one day event", () => {
    let startTime = DateTime.fromISO("2020-04-20T04:30:00+00:00").toUTC();
    let endTime = DateTime.fromISO("2020-04-20T15:30:00+00:00").toUTC();

    let output = Tooltip.getTimeDisplay(startTime, endTime, false);
    let expected = "Monday, April 20th\n4:30am - 3:30pm";

    expect(output).toEqual(expected);
  });

  test("one day all day event", () => {
    let startTime = DateTime.fromISO("2020-04-20").startOf("day");
    let endTime = DateTime.fromISO("2020-04-21").startOf("day");

    let output = Tooltip.getTimeDisplay(startTime, endTime, true);
    let expected = "Monday, April 20th";

    expect(output).toEqual(expected);
  });

  test("multiple day all day event", () => {
    let startTime = DateTime.fromISO("2020-03-20").startOf("day");
    let endTime = DateTime.fromISO("2020-03-25").startOf("day");

    let output = Tooltip.getTimeDisplay(startTime, endTime, true);
    let expected = "Mar 20th, 2020 - Mar 24th, 2020";

    expect(output).toEqual(expected);
  });

  test("multiple day event", () => {
    let startTime = DateTime.fromISO("2020-03-20T04:30:00+00:00").toUTC();
    let endTime = DateTime.fromISO("2020-03-25T15:30:00+00:00").toUTC();

    let output = Tooltip.getTimeDisplay(startTime, endTime, false);
    let expected = "Mar 20th, 2020, 4:30am -\nMar 25th, 2020, 3:30pm";

    expect(output).toEqual(expected);
  });
});

let container;
let root;

beforeAll(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
  root = createRoot(container);
});

afterAll(() => {
  document.body.removeChild(container);
  container = null;
  root.unmount();
});

describe("Tooltip Rendering", () => {
  test("correct event name", () => {
    let props = {
      name: "Test Event",
      startTime: DateTime.now(),
      endTime: DateTime.now(),
    };
    act(() => {
      // @ts-ignore
      root.render(<Tooltip showTooltip={false} {...props} />);
    });

    expect(container.querySelector(".tooltip-text").textContent).toEqual(
      expect.stringContaining("Test Event"),
    );
  });

  test("correctly has no description", () => {
    let props = {
      name: "Test Event",
      startTime: DateTime.now(),
      endTime: DateTime.now(),
    };
    act(() => {
      // @ts-ignore
      root.render(<Tooltip showTooltip={false} {...props} />);
    });

    expect(container.querySelector(".description")).toBeNull();
  });

  test("correct description", () => {
    let props = {
      name: "Test Event",
      startTime: DateTime.now(),
      endTime: DateTime.now(),
      description: "some description",
    };
    act(() => {
      // @ts-ignore
      root.render(<Tooltip showTooltip={false} {...props} />);
    });

    expect(container.querySelector(".description").textContent).toEqual(
      "some description",
    );
  });

  test("correctly has no location", () => {
    let props = {
      name: "Test Event",
      startTime: DateTime.now(),
      endTime: DateTime.now(),
    };
    act(() => {
      // @ts-ignore
      root.render(<Tooltip showTooltip={false} {...props} />);
    });

    expect(container.querySelector(".location")).toBeNull();
  });

  test("correct location", () => {
    let props = {
      name: "Test Event",
      startTime: DateTime.now(),
      endTime: DateTime.now(),
      location: "A location",
    };
    act(() => {
      // @ts-ignore
      root.render(<Tooltip showTooltip={false} {...props} />);
    });

    expect(container.querySelector(".location").textContent).toEqual(
      "A location",
    );
  });

  test("correctly has no calendarName", () => {
    let props = {
      name: "Test Event",
      startTime: DateTime.now(),
      endTime: DateTime.now(),
    };
    act(() => {
      // @ts-ignore
      root.render(<Tooltip showTooltip={false} {...props} />);
    });

    expect(container.querySelector(".calendarName")).toBeNull();
  });

  test("correct calendarName", () => {
    let props = {
      name: "Test Event",
      startTime: DateTime.now(),
      endTime: DateTime.now(),
      calendarName: "Calendar",
    };
    act(() => {
      // @ts-ignore
      root.render(<Tooltip showTooltip={false} {...props} />);
    });

    expect(container.querySelector(".calendarName").textContent).toEqual(
      "Calendar",
    );
  });
});

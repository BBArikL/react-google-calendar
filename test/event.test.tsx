/**
 * @jest-environment jsdom
 */

import { act } from "@testing-library/react";
import { DateTime } from "luxon";
import React from "react";
import { createRoot } from "react-dom/client";
import { afterAll, beforeAll, describe, expect, test } from "vitest";

import Event from "../src/event";

let basicProps = {
  borderColor: "black",
  hoverColor: "red",
  textColor: "blue",
  circleColor: "green",
};

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

describe("Event Component", () => {
  test("opens and closes properly on click", () => {
    let props = {
      name: "Test Event",
      startTime: DateTime.now(),
      endTime: DateTime.now(),
    };

    act(() => {
      root.render(<Event {...basicProps} {...props} />);
    });

    expect(
      window.getComputedStyle(container.querySelector(".tooltip")).visibility,
    ).toEqual("hidden");

    act(() => {
      container
        .querySelector(".event-text")
        .dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });

    expect(
      window.getComputedStyle(container.querySelector(".tooltip")).visibility,
    ).toEqual("visible");

    act(() => {
      container
        .querySelector(".event-text")
        .dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });

    expect(
      window.getComputedStyle(container.querySelector(".tooltip")).visibility,
    ).toEqual("hidden");
  });
});

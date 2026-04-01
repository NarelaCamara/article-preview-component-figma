import { render, screen } from "@testing-library/react";
import { vi } from "vitest";
import { Tooltip } from "./Tooltip";

// Mock GSAP
vi.mock("gsap", () => ({
  default: {
    from: vi.fn(),
    to: vi.fn(),
    set: vi.fn(),
    utils: {
      selector: vi.fn(() => vi.fn()),
    },
    matchMedia: vi.fn(() => ({
      add: vi.fn(),
    })),
  },
}));

vi.mock("@gsap/react", () => ({
  useGSAP: vi.fn(),
}));

describe("Tooltip", () => {
  it("renders the tooltip with SHARE text and social buttons when share is true", () => {
    render(<Tooltip share={true} />);

    expect(screen.getByText("SHARE")).toBeInTheDocument();
    expect(screen.getByAltText("facebook")).toBeInTheDocument();
    expect(screen.getByAltText("twiter")).toBeInTheDocument();
    expect(screen.getByAltText("pinterest")).toBeInTheDocument();
  });

  it("renders nothing when share is false", () => {
    render(<Tooltip share={false} />);

    expect(screen.queryByText("SHARE")).not.toBeInTheDocument();
  });
});

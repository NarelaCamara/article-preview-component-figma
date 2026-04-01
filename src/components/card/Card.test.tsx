import { render, screen } from "@testing-library/react";
import { vi } from "vitest";
import { Card } from "./Card";

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

describe("Card", () => {
  const defaultProps = {
    cover: "cover.jpg",
    title: "Test Title",
    description: "Test Description",
    profileImage: "profile.jpg",
    name: "John Doe",
    date: "2023-01-01",
  };

  it("renders the card with correct content", () => {
    render(<Card {...defaultProps} />);

    expect(screen.getByAltText("cover")).toBeInTheDocument();
    expect(screen.getByText(defaultProps.title)).toBeInTheDocument();
    expect(screen.getByText(defaultProps.description)).toBeInTheDocument();
    expect(screen.getByAltText("user profile")).toBeInTheDocument();
    expect(screen.getByText(defaultProps.name)).toBeInTheDocument();
    expect(screen.getByText(defaultProps.date)).toBeInTheDocument();
  });

  it("renders the cover image with correct src", () => {
    render(<Card {...defaultProps} />);
    const img = screen.getByAltText("cover");
    expect(img).toHaveAttribute("src", defaultProps.cover);
  });

  it("renders the profile image with correct src", () => {
    render(<Card {...defaultProps} />);
    const img = screen.getByAltText("user profile");
    expect(img).toHaveAttribute("src", defaultProps.profileImage);
  });
});

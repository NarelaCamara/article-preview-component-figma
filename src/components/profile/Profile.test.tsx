import { render, screen, fireEvent } from "@testing-library/react";
import { vi } from "vitest";
import { Profile } from "./Profile";

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

describe("Profile", () => {
  const defaultProps = {
    profileImage: "profile.jpg",
    name: "John Doe",
    date: "2023-01-01",
  };

  it("renders the profile with correct content", () => {
    render(<Profile {...defaultProps} />);

    expect(screen.getByAltText("user profile")).toBeInTheDocument();
    expect(screen.getByText(defaultProps.name)).toBeInTheDocument();
    expect(screen.getByText(defaultProps.date)).toBeInTheDocument();
  });

  it("renders the profile image with correct src", () => {
    render(<Profile {...defaultProps} />);
    const img = screen.getByAltText("user profile");
    expect(img).toHaveAttribute("src", defaultProps.profileImage);
  });

  it("toggles share state when button is clicked", async () => {
    render(<Profile {...defaultProps} />);

    const button = screen.getByRole("button", { name: /share-button/i });

    // Initially, share should be false
    expect(screen.queryByTestId("tooltip-share-text")).not.toBeInTheDocument();

    // Click to share
    fireEvent.click(button);

    // Wait 1 second to simulate animation time
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // After click, tooltip SHARE text should be present
    expect(screen.getByTestId("tooltip-share-text")).toBeInTheDocument();
  });

  it("finds one of the social share buttons", () => {
    render(<Profile {...defaultProps} />);

    const facebookButton = screen.getByRole("button", {
      name: /share-facebook/i,
    });
    expect(facebookButton).toBeInTheDocument();
    expect(facebookButton).toHaveAttribute(
      "data-testid",
      "share-facebook-button",
    );
  });
});

import Footer from "@/components/Footer";
import { FOOTER_LINKS } from "@/lib/constants";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe(Footer.name, () => {
  beforeEach(() => {
    render(<Footer />);
  });

  it("renders a footer", () => {
    const heading = screen.getByTestId("footer");
    expect(heading).toBeInTheDocument();
  });

  it("renders copyright notice correctly", () => {
    const copyrightText = screen.getByTestId("copyright");
    expect(copyrightText).toBeInTheDocument();
  });

  FOOTER_LINKS.forEach(({ name, href }) => {
    it(`renders link to ${name} correctly`, () => {
      const linkElement = screen.getByText(name);
      expect(linkElement).toBeInTheDocument();
      expect(linkElement).toHaveAttribute("href", href);
    });
  });

  it("renders the CustomLink component with correct href and title", () => {
    const customLinkComponent = screen.getByText("Shoe Store");
    expect(customLinkComponent).toBeInTheDocument();
    expect(customLinkComponent).toHaveAttribute("href", "/");
  });
});

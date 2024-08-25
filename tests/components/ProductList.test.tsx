import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { useRouter } from "next/router";

import ProductList from "@/components/ProductList";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

const mockRouter = {
  push: jest.fn(),
};

beforeEach(() => {
  (useRouter as jest.Mock).mockReturnValue(mockRouter);
});

const mockShoes = [
  {
    id: "1",
    name: "Wild Rider Layers Unisex Sneakers",
    price: 121,
    image:
      "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/380697/02/sv01/fnd/IND/fmt/png/,Wild-Rider-Layers-Unisex-Sneakers",
    description:
      "With design elements inspired by the movement and motion of city life, the Wild Rider Layers Unisex. With design elements inspired by the movement and motion of city life, the Wild Rider Layers Unisex Sneakers brings a fresh new dimension to the iconic Rider family.",
    quantity: 45,
    rating: {
      rate: 4.2,
      count: 125,
    },
  },
  {
    id: "2",
    name: "Wild Rider Layers 2 Unisex Sneakers",
    price: 151,
    image:
      "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/380697/03/sv01/fnd/IND/fmt/png/Wild-Rider-Layers-Unisex-Sneakers",
    description:
      "With design elements inspired by the movement and motion of city life, the Wild Rider Layers Unisex. With design elements inspired by the movement and motion of city life, the Wild Rider Layers Unisex Sneakers brings a fresh new dimension to the iconic Rider family.",
    quantity: 32,
    rating: {
      rate: 4.6,
      count: 1250,
    },
  },
];

describe(ProductList.name, () => {
  it("renders title if it is given in the props", () => {
    render(<ProductList shoes={mockShoes} title="Test Title" />);
    expect(screen.getByText("Test Title")).toBeInTheDocument();
  });

  it("renders all the shoes passed in the props", () => {
    render(<ProductList shoes={mockShoes} />);
    mockShoes.forEach((shoe) => {
      expect(screen.getByAltText(shoe.name)).toBeInTheDocument();
    });
  });

  it("renders the product details for each shoe", () => {
    render(<ProductList shoes={mockShoes} showProductDetails={true} />);
    mockShoes.forEach((shoe) => {
      expect(screen.getByText(shoe.name)).toBeInTheDocument();
      expect(screen.getByText(`$${shoe.price}`)).toBeInTheDocument();
    });
  });

  it("does not render the product details if showProductDetails is set to false in the props", () => {
    render(<ProductList shoes={mockShoes} showProductDetails={false} />);
    mockShoes.forEach((shoe) => {
      expect(screen.queryByText(shoe.name)).toBeNull();
      expect(screen.queryByText(`$${shoe.price}`)).toBeNull();
    });
  });
});

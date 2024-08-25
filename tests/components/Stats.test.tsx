import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import Stats from "@/components/Stats";
import { useStoreLocalStorage } from "@/hooks/useStoreLocalStorage";
import { Order } from "@/models";

jest.mock("@/hooks/useStoreLocalStorage");

const orders: Order[] = [
  {
    id: "89cdc35f-e8b4-4e59-aa40-108308f3544a",
    firstName: "Divyansh",
    lastName: "Yadav",
    email: "divyanshyadav@gmail.com",
    shippingAddress: "Bengali Square",
    country: "India",
    city: "Indore",
    discountCode: "",
    items: [
      {
        shoe: {
          id: "3",
          name: "Wild Rider Layers Unisex3 sneakers",
          price: 161,
          image:
            "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/380697/01/sv01/fnd/IND/fmt/png/Wild-Rider-Layers-Unisex-Sneakers",
          description:
            "With design elements inspired by the movement and motion of city life, the Wild Rider Layers Unisex. With design elements inspired by the movement and motion of city life, the Wild Rider Layers Unisex Sneakers brings a fresh new dimension to the iconic Rider family.",
          quantity: 12,
          rating: {
            rate: 4.8,
            count: 132,
          },
        },
        quantity: 1,
      },
    ],
    totalAmount: 171,
    discountAmount: 0,
  },
  {
    id: "5e8d9364-1c58-4cfe-ae29-adbb7cdc0d8e",
    firstName: "Suyash",
    lastName: "Goylit",
    email: "suhaas@gehlot.com",
    shippingAddress: "Monaco",
    country: "India",
    city: "Indore",
    discountCode: "",
    items: [
      {
        shoe: {
          id: "3",
          name: "Wild Rider Layers Unisex3 sneakers",
          price: 161,
          image:
            "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/380697/01/sv01/fnd/IND/fmt/png/Wild-Rider-Layers-Unisex-Sneakers",
          description:
            "With design elements inspired by the movement and motion of city life, the Wild Rider Layers Unisex. With design elements inspired by the movement and motion of city life, the Wild Rider Layers Unisex Sneakers brings a fresh new dimension to the iconic Rider family.",
          quantity: 12,
          rating: {
            rate: 4.8,
            count: 132,
          },
        },
        quantity: 1,
      },
      {
        shoe: {
          id: "14",
          name: "Mirage Mox Brightly Packed Shoes",
          price: 271,
          image:
            "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/375168/01/sv01/fnd/IND/fmt/png/Mirage-Mox-Brightly-Packed-Shoes",
          description:
            "With design elements inspired by the movement and motion of city life, the Wild Rider Layers Unisex. With design elements inspired by the movement and motion of city life, the Wild Rider Layers Unisex Sneakers brings a fresh new dimension to the iconic Rider family.",
          quantity: 122,
          rating: {
            rate: 4.7,
            count: 125,
          },
        },
        quantity: 1,
      },
    ],
    totalAmount: 442,
    discountAmount: 0,
  },
  {
    id: "28c73593-70d4-435d-8dd7-30324b7d4d87",
    firstName: "Sanika",
    lastName: "Jambhekar",
    email: "sanika@gmail.com",
    shippingAddress: "Korea",
    country: "Korea",
    city: "Indore",
    discountCode: "xy9q1ly8yhh",
    items: [
      {
        shoe: {
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
        quantity: 1,
      },
      {
        shoe: {
          id: "3",
          name: "Wild Rider Layers Unisex3 sneakers",
          price: 161,
          image:
            "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/380697/01/sv01/fnd/IND/fmt/png/Wild-Rider-Layers-Unisex-Sneakers",
          description:
            "With design elements inspired by the movement and motion of city life, the Wild Rider Layers Unisex. With design elements inspired by the movement and motion of city life, the Wild Rider Layers Unisex Sneakers brings a fresh new dimension to the iconic Rider family.",
          quantity: 12,
          rating: {
            rate: 4.8,
            count: 132,
          },
        },
        quantity: 2,
      },
    ],
    totalAmount: 408.7,
    discountAmount: 44.3,
  },
  {
    id: "98cc435c-36b9-46d3-8e27-0af643159f18",
    firstName: "asd",
    lastName: "asd",
    email: "asd@asd.com",
    shippingAddress: "\nasd",
    country: "asd",
    city: "asd",
    items: [
      {
        shoe: {
          id: "4",
          name: "PUMA Serve Pro Lite Unisex shoes",
          price: 261,
          image:
            "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/374902/01/sv01/fnd/IND/fmt/png/PUMA-Serve-Pro-Lite-Unisex-Shoes",
          description:
            "With design elements inspired by the movement and motion of city life, the Wild Rider Layers Unisex. With design elements inspired by the movement and motion of city life, the Wild Rider Layers Unisex Sneakers brings a fresh new dimension to the iconic Rider family.",
          quantity: 22,
          rating: {
            rate: 4.5,
            count: 125,
          },
        },
        quantity: 1,
      },
    ],
    totalAmount: 271,
    discountAmount: 0,
  },
  {
    id: "be5e0e8b-d436-436c-a7b6-aa02dcb2db64",
    firstName: "ads",
    lastName: "asd",
    email: "asd@dsan.com",
    shippingAddress: "ads",
    country: "asd",
    city: "asd",
    items: [
      {
        shoe: {
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
        quantity: 1,
      },
    ],
    totalAmount: 10,
    discountAmount: 0,
  },
];

describe(Stats.name, () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders 'No orders placed' when there are no orders", () => {
    (useStoreLocalStorage as jest.Mock).mockReturnValue({ orders: [] });

    render(<Stats />);
    expect(screen.getByText("No orders placed")).toBeInTheDocument();
  });

  it("renders the correct statistics when there are orders", async () => {
    (useStoreLocalStorage as jest.Mock).mockReturnValue({ orders });

    render(<Stats />);

    // Numbers based on the mock orders you provided in localStorage
    expect(
      await screen.findByText("Total items purchased"),
    ).toBeInTheDocument();
    expect(await screen.findByText("8")).toBeInTheDocument();

    expect(screen.getByText("Total purchase amount")).toBeInTheDocument();
    expect(screen.getByText("$1302.7")).toBeInTheDocument();

    expect(screen.getByText("Total discount amount")).toBeInTheDocument();
    expect(screen.getByText("$44.3")).toBeInTheDocument();
  });

  it("renders the correct total discount codes used", () => {
    (useStoreLocalStorage as jest.Mock).mockReturnValue({ orders });

    render(<Stats />);

    // Number based on the mock orders you provided in localStorage
    expect(screen.getByText("Total discount codes used")).toBeInTheDocument();
    expect(screen.getByText("1")).toBeInTheDocument();
  });
});

import CheckoutForm from "@/components/CheckoutForm";
import "@testing-library/jest-dom";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { toast } from "sonner";

jest.mock("@/hooks/useStoreLocalStorage", () => ({
  useStoreLocalStorage: () => ({
    orders: [],
    discountCode: "TestDiscount",
  }),
}));

const removeFromCartMock = jest.fn();

jest.mock("@/lib/store", () => ({
  __esModule: true,
  default: () => ({
    cartItems: [
      {
        shoe: {
          id: "1",
          name: "Men's Casual Wear",
          price: 50,
          image: "/image-url",
        },
        quantity: 1,
      },
    ],
    removeFromCart: removeFromCartMock,
    addOrder: jest.fn(),
    clearCart: jest.fn(),
    setDiscountCode: jest.fn(),
  }),
}));

describe(CheckoutForm.name, () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders all form fields", () => {
    render(<CheckoutForm />);

    expect(
      screen.getByPlaceholderText(/Enter your first name/i),
    ).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText("Enter your last name"),
    ).toBeInTheDocument();
    expect(screen.getByPlaceholderText("john@doe.com")).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText("Enter here your address"),
    ).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText("Enter your country"),
    ).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Enter your city")).toBeInTheDocument();
  });

  it("updates form field values on change", () => {
    render(<CheckoutForm />);

    const firstNameInput = screen.getByPlaceholderText(
      /Enter your first name/i,
    ) as HTMLInputElement;

    fireEvent.change(firstNameInput, { target: { value: "John" } });
    expect(firstNameInput.value).toBe("John");
  });

  it("should apply a discount code successfully", async () => {
    const toastSuccessSpy = jest.spyOn(toast, "success");

    render(<CheckoutForm />);

    const discountCodeInput = screen.getByPlaceholderText(
      "Enter discount code",
    );
    fireEvent.change(discountCodeInput, { target: { value: "TestDiscount" } });

    const applyButton = screen.getByText("Apply");
    fireEvent.click(applyButton);

    await waitFor(() => {
      expect(toastSuccessSpy).toHaveBeenCalledWith(
        "Discount code applied successfully!",
      );
    });
  });

  it("should show error when invalid discount code applied", async () => {
    const toastErrorSpy = jest.spyOn(toast, "error");

    render(<CheckoutForm />);

    const discountCodeInput = screen.getByPlaceholderText(
      "Enter discount code",
    );
    fireEvent.change(discountCodeInput, { target: { value: "abc123" } });

    const applyButton = screen.getByText("Apply");
    fireEvent.click(applyButton);

    await waitFor(() => {
      expect(toastErrorSpy).toHaveBeenCalledWith("Invalid discount code!");
    });
  });

  it("should remove item from cart when remove button is clicked", async () => {
    render(<CheckoutForm />);

    const removeButton = screen.getByTestId("remove-1");
    fireEvent.click(removeButton);

    await waitFor(() => {
      expect(removeFromCartMock).toHaveBeenCalledWith("1");
    });
  });
});

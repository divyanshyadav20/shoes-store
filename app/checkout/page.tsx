import CheckoutForm from "@/components/CheckoutForm";

export const metadata = {
  title: "Checkout",
};

function CheckoutPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-12 lg:max-w-7xl lg:px-8">
      <h1 className="mb-5 text-4xl font-bold tracking-tight text-gray-900">
        Checkout
      </h1>

      <CheckoutForm />
    </div>
  );
}

export default CheckoutPage;

import { Hourglass, House, Truck } from "lucide-react";

const features = [
  {
    icon: <Hourglass size={100} strokeWidth={1} className="text-gray-600" />,
    title: "Shipping Within 24 Hours",
    description:
      "Your order will be shipped within 24 hours from the time since order is placed!",
  },
  {
    icon: <Truck size={100} strokeWidth={1} className="text-gray-600" />,
    title: "Free Delivery",
    description: "Free delivery on COD orders above $299.",
  },
  {
    icon: <House size={100} strokeWidth={1} className="text-gray-600" />,
    title: "Made In India",
    description:
      "Our products are 100% made in India. From raw fabric to the final product!",
  },
];

function Features() {
  return (
    <div className="border-t">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:pb-24 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              {feature.icon}
              <h4 className="mt-10 text-3xl font-bold tracking-tight text-gray-900">
                {feature.title}
              </h4>
              <p className="mt-4 text-lg text-gray-500">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Features;

"use client";

import { useStoreLocalStorage } from "@/hooks/useStoreLocalStorage";
import { Order } from "@/models";
import { useEffect, useState } from "react";

type Stat = {
  id: number;
  name: string;
  value: number;
  isAmount?: boolean;
};

function Stats() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [discountCodes, setDiscountCodes] = useState<string[]>([]);
  const [stats, setStats] = useState<Stat[]>([]);
  const { orders: ordersFromLS } = useStoreLocalStorage();

  function createStats() {
    const countOfItemsPurchased = ordersFromLS.reduce((acc, order) => {
      return acc + order.items.reduce((acc, item) => acc + item.quantity, 0);
    }, 0);
    const totalPurchaseAmount = ordersFromLS.reduce(
      (acc, order) => acc + order.totalAmount,
      0,
    );

    const discountCodes = ordersFromLS
      .filter((order) => !!order.discountCode)
      .map((order) => order.discountCode) as string[];

    const totalDiscountAmount = ordersFromLS.reduce(
      (acc, order) => acc + order.discountAmount,
      0,
    );

    const stats = [
      { id: 1, name: "Total items purchased", value: countOfItemsPurchased },
      {
        id: 2,
        name: "Total purchase amount",
        value: totalPurchaseAmount,
        isAmount: true,
      },
      {
        id: 3,
        name: "Total discount amount",
        value: totalDiscountAmount,
        isAmount: true,
      },
    ];

    setOrders(ordersFromLS);
    setStats(stats);

    if (discountCodes.length) {
      setDiscountCodes(discountCodes);
    }
  }

  useEffect(() => {
    createStats();
  }, []);

  const renderContent = () => {
    if (!orders.length) {
      return <div className="text-center text-xl">No orders placed</div>;
    }

    return (
      <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
        {stats.map((stat) => (
          <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
            <dt className="text-base leading-7 text-gray-600">{stat.name}</dt>
            <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
              {stat.isAmount ? `$${stat.value}` : stat.value}
            </dd>
          </div>
        ))}

        <div className="mx-auto flex max-w-xs flex-col gap-y-4">
          <dt className="text-base leading-7 text-gray-600">
            Total discount codes used
          </dt>
          <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            {discountCodes.length > 0 ? discountCodes.length : "0"}
          </dd>
        </div>
      </dl>
    );
  };

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">{renderContent()}</div>
    </div>
  );
}

export default Stats;

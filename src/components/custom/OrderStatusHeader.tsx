import { Order } from "@/types/types";

type Props = {
  order: Order;
};
const OrderStatusHeader = ({ order }: Props) => {
  const getExpectedDelivery = () => {
    const created = new Date(order.createdAt);

    created.setMinutes(
      created.getMinutes() + order.restaurant.estimatedDeliveryTime
    );

    const hours = created.getHours();
    const minutes = created.getMinutes();

    const paddedMinutes = minutes < 10 ? `0${minutes}` : minutes;

    return `${hours}:${paddedMinutes}`;
  };
  return (
    <>
      <h1 className="md:text-4xl text-3xl font-bold tracking-tighter flex flex-col gap-5 md:flex-row md:justify-between">
        <span>Order Status: {order.status}</span>
        <span>Expected By: {getExpectedDelivery()}</span>
      </h1>
    </>
  );
};

export default OrderStatusHeader;

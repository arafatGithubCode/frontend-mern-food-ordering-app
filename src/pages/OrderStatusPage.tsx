import { useGetMyOrders } from "@/api/OrderApi";
import OrderStatusDetail from "@/components/custom/OrderStatusDetail";
import OrderStatusHeader from "@/components/custom/OrderStatusHeader";
import Spinner from "@/components/custom/Spinner";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const OrderStatusPage = () => {
  const { orders, isLoading } = useGetMyOrders();

  if (isLoading) {
    return <Spinner />;
  }
  if (!orders || orders.length === 0) {
    return "No orders found";
  }

  return (
    <div className="space-y-10">
      {orders.map((order, index) => (
        <div
          key={`${index}-${new Date()}`}
          className="space-y-10 p-10 bg-gray-50 rounded-lg"
        >
          <OrderStatusHeader order={order} />
          <div className="grid gap-10 md:grid-cols-2">
            <OrderStatusDetail order={order} />
            <AspectRatio ratio={16 / 5}>
              <img
                src={order.restaurant.imageUrl}
                className="rounded-md object-cover h-full w-full"
              />
            </AspectRatio>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OrderStatusPage;

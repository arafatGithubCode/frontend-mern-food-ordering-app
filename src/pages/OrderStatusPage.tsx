import { useGetMyOrders } from "@/api/OrderApi";
import OrderStatusHeader from "@/components/custom/OrderStatusHeader";
import Spinner from "@/components/custom/Spinner";

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
      {orders.map((order) => (
        <div className="space-y-10 p-10 bg-gray-50 rounded-lg">
          <OrderStatusHeader order={order} />
        </div>
      ))}
    </div>
  );
};

export default OrderStatusPage;

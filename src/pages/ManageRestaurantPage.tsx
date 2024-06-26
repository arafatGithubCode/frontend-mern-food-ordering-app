import {
  useCreateMyRestaurant,
  useGetMyRestaurant,
  useUpdateMyRestaurant,
} from "@/api/MyRestaurantApi";
import { useGetMyOrders } from "@/api/OrderApi";
import OrderItemCard from "@/components/custom/OrderItemCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ManageRestaurantForm from "@/forms/manage-restaurant-form/ManageRestaurantForm";

const ManageRestaurantPage = () => {
  const { createRestaurant, isLoading: createLoadingRestaurant } =
    useCreateMyRestaurant();
  const { restaurant } = useGetMyRestaurant();
  const { updateRestaurant, isLoading: updateLoadingRestaurant } =
    useUpdateMyRestaurant();
  const { orders } = useGetMyOrders();

  const isEditing = !!restaurant;

  return (
    <>
      <Tabs defaultValue="orders">
        <TabsList>
          <TabsTrigger value="orders">Orders</TabsTrigger>
          <TabsTrigger value="manage-restaurant">Manage Restaurant</TabsTrigger>
        </TabsList>
        <TabsContent
          value="orders"
          className="space-y-5 bg-gray-50 p-10 rounded-lg"
        >
          <h2 className="text-2xl font-bold">
            {orders?.length}{" "}
            {orders?.length === 1 ? "active order" : "active orders"}
          </h2>
          {orders?.map((order, index) => (
            <OrderItemCard key={`${index}-${new Date()}`} order={order} />
          ))}
        </TabsContent>
        <TabsContent value="manage-restaurant">
          <ManageRestaurantForm
            restaurant={restaurant}
            onSave={isEditing ? updateRestaurant : createRestaurant}
            isLoading={createLoadingRestaurant || updateLoadingRestaurant}
          />
        </TabsContent>
      </Tabs>
    </>
  );
};

export default ManageRestaurantPage;

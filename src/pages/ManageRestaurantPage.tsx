import {
  useCreateMyRestaurant,
  useGetMyRestaurant,
  useUpdateMyRestaurant,
} from "@/api/MyRestaurantApi";
import ManageRestaurantForm from "@/forms/manage-restaurant-form/ManageRestaurantForm";

const ManageRestaurantPage = () => {
  const { createRestaurant, isLoading: createLoadingRestaurant } =
    useCreateMyRestaurant();
  const { restaurant } = useGetMyRestaurant();
  const { updateRestaurant, isLoading: updateLoadingRestaurant } =
    useUpdateMyRestaurant();

  const isEditing = !!restaurant;

  return (
    <>
      <ManageRestaurantForm
        restaurant={restaurant}
        onSave={isEditing ? updateRestaurant : createRestaurant}
        isLoading={createLoadingRestaurant || updateLoadingRestaurant}
      />
    </>
  );
};

export default ManageRestaurantPage;

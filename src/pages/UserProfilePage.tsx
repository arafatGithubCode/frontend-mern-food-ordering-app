import { useGetMyUser, useUpdateMyUser } from "@/api/MyUserApi";
import Spinner from "@/components/custom/Spinner";
import UserProfileForm from "@/forms/user-profile-form/UserProfileForm";

const UserProfilePage = () => {
  const { currentUser, isLoading: isGetUserLoading } = useGetMyUser();
  const { updateUser, isLoading: isUpdateUserLoading } = useUpdateMyUser();

  if (isGetUserLoading) {
    return <Spinner />;
  }
  if (!currentUser) {
    return (
      <span className="text-red-300">Unable to load current user profile</span>
    );
  }

  return (
    <>
      <UserProfileForm
        currentUser={currentUser}
        onSave={updateUser}
        isLoading={isUpdateUserLoading}
      />
    </>
  );
};

export default UserProfilePage;

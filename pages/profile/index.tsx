import { useUserMe } from '../../lib/services/user.service';

const ProfilePage = () => {
  const { data } = useUserMe();
  console.log(data);

  return <div>Profile</div>;
};

export default ProfilePage;

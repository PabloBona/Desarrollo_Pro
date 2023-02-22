import { useDispatch } from 'react-redux';
import { ActionButton } from '../../components/buttons/ActionButton';
import { Layout } from '../../components/layout/Layout';
import { useUserMe } from '../../lib/services/user.service';
import { changueStatus } from '../../store/features/ui/uiSlice';
import { NextPageWithLayout } from '../page';

const ProfilePage: NextPageWithLayout = () => {
  const dispatch = useDispatch();
  const { data } = useUserMe();
  return (
    <div>
      {JSON.stringify(data)}
      <ActionButton onClick={() => dispatch(changueStatus(true))}>
        Changue status
      </ActionButton>
    </div>
  );
};

ProfilePage.getLayout = (page) => {
  return <Layout>{page}</Layout>;
};

export default ProfilePage;

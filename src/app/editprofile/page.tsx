import EditProfileFrom from '../../components/UserProfile/editProfile/EditProfileFrom';
import getQueryClient from '../../lib/getQueryClient/getQueryclient';
import HydrateTodoList from '../../components/client/hydration/HydrateTodoList.clinet';
import { dehydrate } from '@tanstack/react-query';
import { getUserInfo } from '../../service/auth';

const EditProfile = async () => {
  const queryclient = getQueryClient();
  await queryclient.prefetchQuery(['userInfo'], () => getUserInfo());
  const dehydarate = dehydrate(queryclient);
  return (
    <>
      <div className='h-screen w-full flex flex-col'>
        <HydrateTodoList state={dehydarate}>
          <EditProfileFrom />
        </HydrateTodoList>
      </div>
    </>
  );
};

export default EditProfile;

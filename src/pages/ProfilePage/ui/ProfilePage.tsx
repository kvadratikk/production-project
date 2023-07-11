import { ProfileCard, fetchProfileData, profileReducer } from 'entities/Profile';
import { useEffect } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { ReducersList, useModuleLoader } from 'shared/lib/hooks/useModuleLoader/useModuleLoader';

const reducers: ReducersList = {
  profile: profileReducer,
};

const ProfilePage = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProfileData());
  }, [dispatch]);

  useModuleLoader({ reducers, removeAfterUnmount: true });

  return (
    <div>
      <ProfileCard />
    </div>
  );
};

export default ProfilePage;

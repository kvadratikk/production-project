import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';

import { Profile } from '../../types/profile';
import { getProfileForm } from '../../selectors/getProfileForm/getProfileForm';

export const updateProfileData = createAsyncThunk<Profile, void, ThunkConfig<string>>(
  'profile/updateProfileData',
  async (_, { extra, rejectWithValue, getState }) => {
    const form = getProfileForm(getState());

    try {
      const response = await extra.api.put<Profile>('/profile', form);

      if (!response.data) throw new Error();

      return response.data;
    } catch (e) {
      return rejectWithValue('error');
    }
  },
);

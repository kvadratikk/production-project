import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { fetchProfileData } from '../services/fetchProfileData/fetchProfileData';
import { Profile, ProfileSchema } from '../types/profile';

const initialState: ProfileSchema = {
  readonly: true,
  isLoading: false,
  error: null,
  data: null,
};

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProfileData.pending, (state) => {
        state.error = null;
        state.isLoading = true;
      })
      .addCase(fetchProfileData.fulfilled, (state, { payload }: PayloadAction<Profile>) => {
        state.isLoading = false;
        state.data = payload;
      })
      .addCase(fetchProfileData.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;

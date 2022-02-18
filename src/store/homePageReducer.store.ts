import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../constants';

type SliceState = {
  current_user: User;
  loadingRoot: boolean;
  showModal: boolean;
};

const initialState: SliceState = {
  loadingRoot: false,
  current_user: {
    id: '1',
    name: 'Bruno Farias',
    email: 'bruno_fariasd@hotmail.com',
    password: '123456',
    plan: 'free',
  },
  showModal: false,
};

const homePageReducer = createSlice({
  name: 'homePageReducer',
  initialState,
  reducers: {
    updateLoadingRoot(state, action: PayloadAction<boolean>) {
      state.loadingRoot = action.payload;
    },
    showModal(state) {
      state.showModal = !state.showModal;
      console.log(state.showModal);
    },
    updatePlanUser(state, action: PayloadAction<'free' | 'premium'>) {
      state.current_user.plan = action.payload;
    },
  },
});

export const { updateLoadingRoot, showModal, updatePlanUser } =
  homePageReducer.actions;

export default homePageReducer.reducer;

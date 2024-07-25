// reducers
// import modal from 'features/modal/modalSlice';
import user from 'features/user/userSlice';
import car from 'features/car/carSlice';

const rootReducer = {
  // modal,
  user,
  car,
};

export type RootState = ReturnType<any>;

export default rootReducer;

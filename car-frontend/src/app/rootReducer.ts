// reducers
// import modal from 'features/modal/modalSlice';
import user from 'features/user/userSlice';
// import forgotPassword from 'features/forgotPassword/forgotPasswordSlice';
// import post from 'features/post/postSlice';
// import history from 'features/history/historySlice';
// import comment from 'features/comment/commentSlice';

const rootReducer = {
  // modal,
  user,
  // forgotPassword,
  // post,
  // history,
  // comment,
};

export type RootState = ReturnType<any>;

export default rootReducer;

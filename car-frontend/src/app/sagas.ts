import { fork } from 'redux-saga/effects';

//watchers
import userWatchers from 'features/user/userWatchers';
// import forgotPasswordWatchers from 'features/forgotPassword/forgotPasswordWatchers';
// import postWatchers from 'features/post/postWatchers';
// import historyWatchers from 'features/history/historyWatchers';
// import commentWatchers from 'features/comment/commentWatchers';

export default function* startforman() {
  yield fork(userWatchers);
  // yield fork(forgotPasswordWatchers);
  // yield fork(postWatchers);
  // yield fork(historyWatchers);
  // yield fork(commentWatchers);
}

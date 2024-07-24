//services
import * as services from 'services/userService';

//actions
import * as actions from './userSlice';

import { returnSaga } from 'common/utils/sagaHelper';

export const registerUser = returnSaga(services.registerUser, actions.registerUser, actions.registerUserSuccess, actions.registerUserError);
export const loginUser = returnSaga(services.loginUser, actions.loginUser, actions.loginUserSuccess, actions.loginUserError);

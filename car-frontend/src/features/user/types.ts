export interface InitialState {
  registerUserPayload: Payload;
  loginUserPayload: Payload;
  user: Payload;
}

interface Payload {
  loading: boolean;
  data: null | any;
  error: null | any;
}

export interface IRegisterUserReq {
  name: string;
  email: string;
  password: string;
}

export interface ILoginUserReq {
  email: string;
  password: string;
}

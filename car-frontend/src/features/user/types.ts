export interface InitialState {
  registerUserPayload: Payload;
  loginUserPayload: Payload;
  registerUserPayloadSocial: Payload;
  loginUserPayloadSocial: Payload;
  user: Payload;
}

interface Payload {
  loading: boolean;
  data: null | any;
  error: null | any;
}

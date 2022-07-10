import useHTTP from '@/api/useHTTP';
import { BasicResp } from '@/api/types';

interface ParamSignUp {
  username: string;
  password: string;
  re_password: string;
}

export const reqUserSignUp = (params: ParamSignUp) => {
  //axios http
  return useHTTP<BasicResp<null>>({
    url: `/api/sign_up`,
    method: 'post',
    data: { ...params },
  });
};

interface ParamSignIn {
  username: string;
  password: string;
}

interface RespSignIn {
  nickname: string;
  userID: string;
  a_token: string;
  r_token: string;
}

export const reqUserSignIn = (params: ParamSignIn) => {
  //axios http
  return useHTTP<BasicResp<RespSignIn>>({
    url: `/api/sign_in`,
    method: 'post',
    data: { ...params },
  });
};

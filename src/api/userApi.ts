import useHTTP from '@/api/useHTTP';
import { BasicResp } from '@/api/types';

interface ParamSignUp {
  Username: string;
  Password: string;
  RePassword: string;
}

export const reqUserRegister = (params: ParamSignUp) => {
  //axios http
  return useHTTP<BasicResp<null>>({
    url: `/api/sign_up`,
    method: 'post',
  });
};

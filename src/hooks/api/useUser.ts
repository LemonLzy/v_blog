import { ParamSignUp, ParamUserDel, reqUserSignUp, reqUserDel } from '@/api/userApi';

const useUser = () => {
  const userAdd = (data: ParamSignUp) => {
    return reqUserSignUp(data);
  };
  const userDel = (data: ParamUserDel) => {
    return reqUserDel(data);
  };
  return {
    userAdd,
    userDel,
  };
};

export default useUser;

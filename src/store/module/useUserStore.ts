import { defineStore } from 'pinia';

export interface UserInfo {
  user_id: number;
  nickname: string;
  is_admin: number;
  a_token: string;
  r_token: string;
}

export const KEY_USER_ID = 'user';

const useUserStore = defineStore({
  id: KEY_USER_ID,
  state: (): Partial<UserInfo> => ({
    user_id: -1,
    nickname: '',
    is_admin: 0,
    a_token: '',
    r_token: '',
  }),

  actions: {
    setID(user_id: number) {
      this.$state.user_id = user_id;
    },
    setRole(is_admin: number) {
      this.$state.is_admin = is_admin;
    },
    setNickname(nickname: string) {
      this.$state.nickname = nickname;
    },
    setAToken(a_token: string) {
      this.$state.a_token = a_token;
    },
    setRToken(r_token: string) {
      this.$state.r_token = r_token;
    },
    sign_in(user: Partial<UserInfo>) {
      this.$state = {
        ...this.$state,
        ...user,
      };
    },
    sign_out() {
      this.$state = {};
    },
  },
});

//create
const instance = useUserStore();

instance.$subscribe((mutation, state) => {
  localStorage.setItem(instance.$id, JSON.stringify(state));
});

//init
const val = localStorage.getItem(instance.$id);
if (val) {
  instance.sign_in(JSON.parse(val));
}

export default useUserStore;

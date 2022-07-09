import { defineStore } from 'pinia';

export interface UserInfo {
  id: number;
  username: string;
  role: boolean;
  email: string;
  token: string;
}

export const KEY_USER_ID = 'user';

const useUserStore = defineStore({
  id: KEY_USER_ID,
  state: (): UserInfo => ({
    id: -1,
    username: '',
    role: false,
    email: '',
    token: '',
  }),

  actions: {
    setToken(token: string) {
      this.$state.token = token;
    },
    setID(id: number) {
      this.$state.id = id;
    },
    setRole(role: boolean) {
      this.$state.role = role;
    },
    setEmail(email: string) {
      this.$state.email = email;
    },
    login(user: Partial<UserInfo>) {
      this.$state = {
        ...this.$state,
        ...user,
      };
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
  instance.login(JSON.parse(val));
}

export default useUserStore;

import { dayjs } from 'element-plus';

const add = (n: number) => {
  return n + 1;
};

const formDate = (d: number) => {
  return dayjs(d).format('YYYY-MM-DD HH:mm:ss');
};

export { add, formDate };

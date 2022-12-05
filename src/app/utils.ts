import { dayjs } from 'element-plus';

const add = (n: number) => {
  return n + 1;
};

const formDate = (d: number) => {
  return dayjs(d).format('YYYY-MM-DD HH:mm:ss');
};

function conversionTimestamp(timestamp: string) {
  let date = new Date(Number(timestamp) * 1000); //时间戳为10位需*1000，时间戳为13位的话不需乘1000
  let Y = date.getFullYear() + '-';
  let M = (date.getMonth() < 9 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
  let D = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();

  return Y + M + D;
}

export { add, formDate, conversionTimestamp };

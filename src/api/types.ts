export interface BasicResp<T> {
  code: number;
  msg: string;
  data: T;
}

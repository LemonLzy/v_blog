import useHTTP from '@/api/useHTTP';
import { BasicResp } from '@/api/types';

export interface ImageUploadParam {
  file: File;
}

export interface ImageUploadResp {
  location: string;
}

export const reqImageUpload = (params: ImageUploadParam) => {
  //axios http
  return useHTTP<BasicResp<ImageUploadResp>>({
    url: `/api/upload_image`,
    method: 'post',
    data: { ...params },
    headers: { 'Content-Type': 'multipart/form-data' },
  });
};

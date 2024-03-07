import { IApps } from '@/types';
import { CommonResponse } from './commonResponse';
import { getData } from '@/api';

export const getAppConfigs = async (): Promise<IApps[]> => {
  const url: string = `${process.env.REACT_APP_S3_BUCKET_STATIC}/files/config/apps.json`;
  const response: CommonResponse<IApps[]> = await getData(url);
  console.log(response);
  return response;
};

// export const getAppConfigs = async (): Promise<IApps[]> => {
//   const url = `${process.env.REACT_APP_S3_BUCKET_STATIC}/files/config/apps.json?`;
//   const response: CommonResponse = await axios.get(url);
//   return response.data;
// };

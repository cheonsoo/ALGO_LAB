import axios from 'axios';
import { IPost } from '@/types';
import { getData } from '@/api';

export const getPostConfigs = async (): Promise<IPost[]> => {
  const url: string = `${process.env.REACT_APP_S3_BUCKET_STATIC}/files/config/posts.json`;
  const response = await getData(url);
  return response;
};

export const getPost = (path: string = ''): Promise<string> => {
  const url = `${process.env.REACT_APP_S3_BUCKET_STATIC}/posts${path}`;
  console.log('### post url: ', url);
  return axios
    .get(url)
    .then((res) => res.data)
    .then((data) => data);
};

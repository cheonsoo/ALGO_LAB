import react, { Dispatch } from 'react';
import { TYPE_GET_APPS, TypeAction } from '@/store/modules/apps/types';
import { TYPE_GET_POSTS } from '@/store/modules/posts/types';
import { getAppConfigs } from '@/api/apps';
import { getPostConfigs } from '@/api/posts';

export const getApps: any = () => {
  return (dispatch: Dispatch<TypeAction>) => {
    getAppConfigs().then((data) => dispatch({ type: TYPE_GET_APPS, payload: data }));
  };
};

// export const getAllConfigs: any = () => {
//   return (dispatch: Dispatch<TypeAction>) => {
//     // getAppConfigs().then((data) => dispatch({ type: TYPE_GET_APPS, payload: data }));
//     // getPostConfigs().then((data) => dispatch({ type: TYPE_GET_POSTS, payload: data }));

//     getAppConfigs()
//       .then((data) => dispatch({ type: TYPE_GET_APPS, payload: data }))
//       .then((data) => {
//         getPostConfigs().then((data) => dispatch({ type: TYPE_GET_POSTS, payload: data }));
//       });
//   };
// };

export const getAllConfigs: any = async () => (dispatch: Dispatch<TypeAction>) => {
  getDashboardList().then((data: any) => dispatch({ type: TYPE_GET_POSTS, payload: data }));
};

const getDashboardList: any = async () => {
  const apps = await getAppConfigs();
  const posts = await getPostConfigs();
  const merged = apps.concat(posts).sort(() => Math.random() - 0.5);
  console.log('### merged: ', merged);
  return merged;
};

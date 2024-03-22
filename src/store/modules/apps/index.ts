import { Dispatch } from 'react';
import { getAppConfigs } from '@/api/apps';
import { getPostConfigs } from '@/api/posts';

const TYPE_GET_APPS: string = 'GET_';
type TypeAction = ReturnType<typeof getApps>;

// export const getApps: any = () => {
//   return (dispatch: Dispatch<TypeAction>) => {
//     getAppConfigs().then((data) => dispatch({ type: TYPE_GET_APPS, payload: data }));
//   };
// };

export const getApps = async () => {
  const apps = await getAppConfigs();
  const posts = await getPostConfigs();
  const merged = apps.concat(posts).sort(() => Math.random() - 0.5);
  console.log('### merged: ', merged);

  return (dispatch: Dispatch<TypeAction>) => {
    dispatch({ type: TYPE_GET_APPS, payload: merged });
  };
};

const initialState: IInitialState = {
  list: []
};

type Action = ReturnType<typeof getApps>;

export interface IInitialState {
  list: object;
}
const appsReducer = (prevState = initialState, action: Action) => {
  switch (action.type) {
    case TYPE_GET_APPS:
      return { list: action.payload };
    default:
      return prevState;
  }
};

export default appsReducer;

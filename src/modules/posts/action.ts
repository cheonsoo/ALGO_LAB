import react, { Dispatch } from 'react';
// import { Dispatch } from 'redux';
import { createAction } from 'redux-actions';
import { TYPE_GET_POSTS, TYPE_GET_POST, TAction, TypeAction } from '@/modules/posts/types';
import { getPostConfigs } from '@/api/posts';

export const getPostsAction = createAction(TYPE_GET_POSTS);
export const getPostAction = createAction(TYPE_GET_POST);

export const getPosts: any = () => {
  return (dispatch: Dispatch<TypeAction>) => {
    getPostConfigs().then((data) => dispatch({ type: TYPE_GET_POSTS, payload: data }));
  };
};

export const getPostsActionImpl: any = () => (dispatch: Dispatch<TypeAction>) => {
  getPosts().then((data) => dispatch(getPostsAction(data)));
};

export const getPostActionImpl: any = (id: string, path: string) => (dispatch: Dispatch<TypeAction>) => {
  getPost(path).then((data) => dispatch(getPostAction({ id, data })));
};

import { combineReducers } from 'redux';
import { counter } from '@/modules/counter';
import { accordian } from '@/modules/home';
import postsReducer from '@/modules/posts/reducer';
import appsReducer from '@/modules/apps/reducer';

const rootReducer = combineReducers({
  counter,
  accordian,
  posts: postsReducer,
  apps: appsReducer
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;

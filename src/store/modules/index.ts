import { combineReducers } from 'redux';
import { counter } from '@/store/modules/counter';
import { accordian } from '@/store/modules/home';
import postsReducer from '@/store/modules/posts/reducer';
import appsReducer from '@/store/modules/apps/reducer';

const rootReducer = combineReducers({
  counter,
  accordian,
  posts: postsReducer,
  apps: appsReducer
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;

import { getApps } from '@/modules/apps/action';
import { TYPE_GET_APPS, IInitialState } from '@/modules/apps/types';

const initialState: IInitialState = {
  list: []
};

type Action = ReturnType<typeof getApps>;

const appsReducer = (prevState = initialState, action: Action) => {
  switch (action.type) {
    case TYPE_GET_APPS:
      return { list: action.payload };
    default:
      return prevState;
  }
};

export default appsReducer;

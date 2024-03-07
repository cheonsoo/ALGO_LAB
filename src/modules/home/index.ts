const TOGGLE_ARCORDIAN: string = "TOGGLE_ARCORDIAN";

interface ArcordianAction {
  id: string,
  type: typeof TOGGLE_ARCORDIAN;
}

interface InitialState {
  opened: string;
}

const initialState = {
    opened: ''
}

export const toggleArcordian = (id: string): ArcordianAction => ({ id, type: TOGGLE_ARCORDIAN });

type Action = ArcordianAction;
export const accordian = (prevState = initialState, action: Action) => {
  switch (action.type) {
    case TOGGLE_ARCORDIAN:
      return { opened: action.id };
		default:
      return prevState;
  }
};

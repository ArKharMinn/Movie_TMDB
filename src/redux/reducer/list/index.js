import { ActionType } from "../../action/action-type";

const initialState = {
  lists: [
    {
      code: "USD",
      rate: 0,
      date: "",
    },
    {
      code: "THB",
      rate: 0,
      date: "",
    },
    {
      code: "SGD",
      rate: 0,
      date: "",
    },
    {
      code: "MMK",
      rate: 0,
      date: "",
    },
  ],
};
export const listReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionType.UPDATE_LISTS:
      const { currency, rate } = payload;
      const updatedLists = state.lists.map((item) =>
        item.code === currency
          ? { ...item, rate: rate, date: new Date().toISOString() }
          : item
      );
      return {
        ...state,
        lists: updatedLists,
      };
    default:
      return state;
  }
};

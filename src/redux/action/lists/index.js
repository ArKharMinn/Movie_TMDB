import { ActionType } from "../action-type";

export const updateList = (currency, rate, date) => {
  return {
    type: ActionType.UPDATE_LISTS,
    payload: { currency, rate, date },
  };
};

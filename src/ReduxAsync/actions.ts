import { LOADING_STARTED, LOADING_STOPPED } from "./actionType";

export const LoadingStarted = () => {
  return {
    type: LOADING_STARTED,
  };
};
export const LoadingStopped = () => {
  return {
    type: LOADING_STOPPED,
  };
};

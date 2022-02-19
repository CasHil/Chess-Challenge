import { configureStore } from "@reduxjs/toolkit";
import challengeReducer from "../components/ChallengeSelector/challengeSelectorSlice";

export default configureStore({
  reducer: {
    challengeReducer: challengeReducer,
  },
});

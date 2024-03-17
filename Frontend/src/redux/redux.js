import { createReduxModule } from "hooks-for-redux";
export const initialState = {
    passStatus: false,
};
export const [state, { showGetPass, hideGetPass }] = createReduxModule(
    "status",
    initialState,
    {
        showGetPass: (state) => {
            return {
                ...state,
                passStatus: (state.passStatus = true),
            };
        },
        hideGetPass: (state) => {
            return {
                ...state,
                passStatus: (state.passStatus = false),
            };
        },
    }
);

import { createReduxModule } from "hooks-for-redux";
export const initialState = {
    passStatus: false,
    userStatus: false,
};
export const [state, { showGetPass, hideGetPass, showUser }] =
    createReduxModule("status", initialState, {
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
        showUser: (state) => {
            return {
                ...state,
                userStatus: (state.userStatus = true),
            };
        },
    });

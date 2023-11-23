import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
    token: "",
    user: "",
}


const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        userRegistration: (state, action: PayloadAction<{ token: string }>) => {
            state.token = action.payload.token
        },
        userLogedIn: (state, action: PayloadAction<{ accessToken: string, user: string }>) => {
            state.token = action.payload.accessToken
            state.user = action.payload.user
        },
        userLogedOut: (state) => {
            state.token = ""
            state.user = ""
        }
    }
})

export const { userRegistration, userLogedIn, userLogedOut } = authSlice.actions

export default authSlice.reducer
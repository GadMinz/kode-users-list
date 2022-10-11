import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { Category, Status, UserItem } from "../types";

type Response = {
    items: UserItem[];
};

type UsersState = {
    items: UserItem[];
    status: Status;
};

export const fetchUsers = createAsyncThunk<Response, Category>(
    "users/fetchUsersStatus",
    async (param) => {
        const { data } = await axios.get(
            `https://stoplight.io/mocks/kode-frontend-team/koder-stoplight/86566464/users?__example=all`
        );
        return data;
    }
);

const initialState: UsersState = {
    items: [],
    status: Status.LOADING,
};

const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.pending, (state) => {
            state.status = Status.LOADING;
            state.items = [];
        });

        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.items = action.payload.items;
            state.status = Status.SUCCESS;
        });

        builder.addCase(fetchUsers.rejected, (state) => {
            state.status = Status.ERROR;
            state.items = [];
        });
    },
});

export default usersSlice.reducer;
